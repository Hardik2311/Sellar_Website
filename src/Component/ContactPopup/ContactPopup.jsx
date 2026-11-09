import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { CheckCircle2, X } from 'lucide-react';
import { db } from '../../Lib/Firebase';

const FIRST_DELAY = 10 * 1000;
// Wait before reopening after the 1st close, then the 2nd. After the last one it stays closed.
const REOPEN_DELAYS = [60 * 1000, 3 * 60 * 1000];
// Keeps a reopen that is already due from appearing the moment the page loads.
const MIN_DELAY = 3 * 1000;
const SEND_TIMEOUT = 15 * 1000;
// One heading per appearance: first visit, 1-minute return, 3-minute return.
const HEADINGS = ['Need help?', 'Let us help you', 'Stuck somewhere? Let us help you'];

const SCHEDULE_KEY = 'sellar-contact-popup-schedule';
const SUBMITTED_KEY = 'sellar-contact-popup-submitted';

const EMPTY_FORM = { fullName: '', phone: '', message: '' };
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([tabindex="-1"]), textarea';

const readSchedule = () => {
    try {
        const stored = JSON.parse(sessionStorage.getItem(SCHEDULE_KEY));
        if (Number.isInteger(stored?.closes)) return stored;
    } catch {
        /* storage unavailable or malformed: start the schedule over */
    }
    return { closes: 0, nextAt: null };
};

const writeSchedule = (schedule) => {
    try {
        sessionStorage.setItem(SCHEDULE_KEY, JSON.stringify(schedule));
    } catch {
        /* storage unavailable: the schedule lasts for this page view only */
    }
};

const readSubmitted = () => {
    try {
        return localStorage.getItem(SUBMITTED_KEY) === '1';
    } catch {
        return false;
    }
};

const writeSubmitted = () => {
    try {
        localStorage.setItem(SUBMITTED_KEY, '1');
    } catch {
        /* storage unavailable: the popup may appear again on a later visit */
    }
};

// Firestore queues writes while offline and never rejects, which would leave the form stuck on "Sending...".
const withTimeout = (promise, ms) => {
    let timer;
    const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error('Timed out')), ms);
    });
    return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
};

const validate = ({ phone }) => {
    if (!phone) return { phone: 'Phone number is required' };
    if (phone.length !== 10) return { phone: 'Phone number must be exactly 10 digits' };
    return {};
};

const fieldClasses = (hasError) =>
    `w-full rounded-sm border bg-white px-3 py-2 text-base text-[#00171f] sm:text-sm placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#007EA7] focus:border-[#007EA7] ${
        hasError ? 'border-red-600' : 'border-slate-300'
    }`;

const Field = ({ id, label, error, children }) => (
    <div className="flex flex-col gap-1">
        <label htmlFor={id} className="text-sm font-bold text-[#00171f]">
            {label}
        </label>
        {children}
        {error && (
            <p id={`${id}-error`} className="text-sm font-medium text-red-700">
                {error}
            </p>
        )}
    </div>
);

const ContactPopup = () => {
    const reduceMotion = useReducedMotion();
    const [alreadySubmitted] = useState(readSubmitted);
    const [schedule, setSchedule] = useState(readSchedule);
    const [open, setOpen] = useState(false);
    // Set on open rather than derived from the schedule, so the heading can't change during the fade-out.
    const [heading, setHeading] = useState(HEADINGS[0]);
    const [form, setForm] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | sending | error | sent

    const dialogRef = useRef(null);
    const honeypotRef = useRef(null);

    const finished = schedule.closes > REOPEN_DELAYS.length;

    // Open on schedule, waiting for the visitor to return if the tab is in the background.
    useEffect(() => {
        if (open || alreadySubmitted || finished || status === 'sent') return undefined;

        const show = () => {
            setHeading(HEADINGS[schedule.closes]);
            setOpen(true);
        };
        const onVisible = () => {
            if (!document.hidden) show();
        };
        const delay =
            schedule.nextAt === null
                ? FIRST_DELAY
                : Math.max(schedule.nextAt - Date.now(), MIN_DELAY);

        const timer = setTimeout(() => {
            if (document.hidden) document.addEventListener('visibilitychange', onVisible);
            else show();
        }, delay);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('visibilitychange', onVisible);
        };
    }, [open, alreadySubmitted, finished, status, schedule]);

    const close = useCallback(() => {
        if (status === 'sending') return;
        setOpen(false);
        if (status === 'sent') return;
        if (status === 'error') setStatus('idle');

        const closes = schedule.closes + 1;
        const wait = REOPEN_DELAYS[closes - 1];
        const next = { closes, nextAt: wait ? Date.now() + wait : null };
        setSchedule(next);
        writeSchedule(next);
    }, [status, schedule]);

    // Lock page scroll and move focus into the dialog, restoring both on close.
    useEffect(() => {
        if (!open) return undefined;

        const previousFocus = document.activeElement;
        const root = document.documentElement;
        const previousOverflow = root.style.overflow;
        const previousPadding = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - root.clientWidth;

        root.style.overflow = 'hidden';
        if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
        // The dialog takes focus rather than a field so phones don't raise the keyboard unprompted.
        dialogRef.current?.focus();

        return () => {
            root.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPadding;
            previousFocus?.focus?.({ preventScroll: true });
        };
    }, [open]);

    // Esc closes; Tab stays inside the dialog.
    useEffect(() => {
        if (!open) return undefined;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                close();
                return;
            }
            if (e.key !== 'Tab' || !dialogRef.current) return;

            const dialog = dialogRef.current;
            const items = dialog.querySelectorAll(FOCUSABLE);
            if (!items.length) return;
            const first = items[0];
            const last = items[items.length - 1];
            const active = document.activeElement;

            if (e.shiftKey && (active === first || active === dialog)) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open, close]);

    // The submit button disappears on success, so bring focus back to the dialog.
    useEffect(() => {
        if (status === 'sent') dialogRef.current?.focus();
    }, [status]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const nextValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
        setForm((prev) => ({ ...prev, [name]: nextValue }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'sending') return;

        const nextErrors = validate(form);
        setErrors(nextErrors);
        if (nextErrors.phone) {
            document.getElementById('contact-popup-phone')?.focus();
            return;
        }

        const finish = () => {
            writeSubmitted();
            setForm(EMPTY_FORM);
            setStatus('sent');
        };

        // Only bots fill the hidden field: show success without saving anything.
        if (honeypotRef.current?.value) {
            finish();
            return;
        }

        if (!navigator.onLine) {
            setStatus('error');
            return;
        }

        setStatus('sending');
        try {
            await withTimeout(
                addDoc(collection(db, 'contacts'), {
                    fullName: form.fullName.trim(),
                    phone: form.phone,
                    message: form.message.trim(),
                    submittedAt: serverTimestamp(),
                }),
                SEND_TIMEOUT
            );
            finish();
        } catch {
            setStatus('error');
        }
    };

    // Ignore backdrop clicks once something is typed so a stray click can't interrupt the visitor.
    const handleBackdrop = (e) => {
        if (e.target !== e.currentTarget) return;
        if (Object.values(form).some((value) => value.trim())) return;
        close();
    };

    if (alreadySubmitted) return null;

    const sending = status === 'sending';
    const describedBy = (name) => (errors[name] ? `contact-popup-${name}-error` : undefined);

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    key="contact-popup"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onMouseDown={handleBackdrop}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#00171f]/60 p-4"
                >
                    <motion.div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-popup-title"
                        tabIndex={-1}
                        initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                        className="relative w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-sm bg-white p-4 shadow-[0_30px_80px_rgba(0,23,31,0.35)] focus:outline-none sm:p-5"
                    >
                        <button
                            type="button"
                            onClick={close}
                            disabled={sending}
                            aria-label="Close contact form"
                            className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#00171f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EA7] disabled:opacity-50"
                        >
                            <X size={18} strokeWidth={2.25} aria-hidden="true" />
                        </button>

                        {status === 'sent' ? (
                            <div role="status" className="flex flex-col items-start pr-8">
                                <CheckCircle2
                                    size={28}
                                    strokeWidth={2}
                                    aria-hidden="true"
                                    className="text-[#007EA7]"
                                />
                                <h2
                                    id="contact-popup-title"
                                    className="mt-2 text-xl font-black tracking-tight text-[#00171f]"
                                >
                                    Thanks, your message has been sent.
                                </h2>
                                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                    Our team will get back to you soon.
                                </p>
                                <button
                                    type="button"
                                    onClick={close}
                                    className="mt-4 rounded-sm bg-[#007EA7] px-5 py-2 text-sm font-black text-white transition-colors hover:bg-[#003459] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EA7] focus-visible:ring-offset-2"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2
                                    id="contact-popup-title"
                                    className="pr-8 text-balance text-xl font-black tracking-tight text-[#00171f] sm:text-2xl"
                                >
                                    {heading}
                                </h2>
                                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                    Share your details and our team will get back to you.
                                </p>

                                <form onSubmit={handleSubmit} noValidate className="mt-3 flex flex-col gap-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <Field id="contact-popup-fullName" label="Full Name">
                                            <input
                                                id="contact-popup-fullName"
                                                name="fullName"
                                                type="text"
                                                autoComplete="name"
                                                maxLength={100}
                                                placeholder="Your Name"
                                                value={form.fullName}
                                                onChange={handleChange}
                                                className={fieldClasses(false)}
                                            />
                                        </Field>
                                        <Field id="contact-popup-phone" label="Phone Number" error={errors.phone}>
                                            <input
                                                id="contact-popup-phone"
                                                name="phone"
                                                type="tel"
                                                inputMode="numeric"
                                                autoComplete="tel-national"
                                                placeholder="10 digits"
                                                value={form.phone}
                                                onChange={handleChange}
                                                aria-invalid={Boolean(errors.phone)}
                                                aria-describedby={describedBy('phone')}
                                                className={fieldClasses(errors.phone)}
                                            />
                                        </Field>
                                    </div>

                                    <Field
                                        id="contact-popup-message"
                                        label={
                                            <>
                                                Message <span className="font-medium text-slate-500">(optional)</span>
                                            </>
                                        }
                                    >
                                        <textarea
                                            id="contact-popup-message"
                                            name="message"
                                            rows={2}
                                            maxLength={2000}
                                            placeholder="How can we help?"
                                            value={form.message}
                                            onChange={handleChange}
                                            className={`${fieldClasses(false)} resize-none`}
                                        />
                                    </Field>

                                    {/* Honeypot: hidden from people, filled in by spam bots. */}
                                    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                                        <label htmlFor="contact-popup-company">Company</label>
                                        <input
                                            id="contact-popup-company"
                                            ref={honeypotRef}
                                            name="company"
                                            type="text"
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p role="alert" className="text-sm font-medium text-red-700">
                                            We couldn't send your message. Please check your connection and try again.
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={sending}
                                        className="w-full whitespace-nowrap rounded-sm bg-[#007EA7] px-6 py-2.5 text-sm font-black text-white transition-colors hover:bg-[#003459] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EA7] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {sending ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ContactPopup;
