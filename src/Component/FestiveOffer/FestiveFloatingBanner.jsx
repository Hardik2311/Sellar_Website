import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Sparkles, X, ArrowRight } from 'lucide-react';

const DISMISS_KEY = 'sellar-festive-banner-dismissed';

const readDismissed = () => {
    try {
        return sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch {
        return false;
    }
};

// Same offset as the navbar links so the fixed nav doesn't cover the heading.
const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: y, behavior: 'smooth' });
};

const FestiveFloatingBanner = () => {
    const reduceMotion = useReducedMotion();
    const [dismissed, setDismissed] = useState(readDismissed);
    const [ready, setReady] = useState(false);
    const [pricingInView, setPricingInView] = useState(false);

    // Short delay so the banner doesn't compete with the hero on first paint.
    useEffect(() => {
        const t = setTimeout(() => setReady(true), 1200);
        return () => clearTimeout(t);
    }, []);

    // Hide the banner while the pricing table, which carries the offer, is on screen.
    useEffect(() => {
        const section = document.getElementById('pricing');
        if (!section) return;
        const observer = new IntersectionObserver(
            ([entry]) => setPricingInView(entry.isIntersecting),
            { threshold: 0.15 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const dismiss = () => {
        setDismissed(true);
        try {
            sessionStorage.setItem(DISMISS_KEY, '1');
        } catch {
            /* storage unavailable: dismiss for this page view only */
        }
    };

    const visible = ready && !dismissed && !pricingInView;

    return (
        <AnimatePresence>
            {visible && (
                <motion.aside
                    key="festive-banner"
                    aria-label="Festive offer"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    className="fixed z-40 bottom-10 left-4 right-24 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[360px] md:bottom-14"
                >
                    {/* Colours sampled from the Sellar logo, matching the pricing table strip */}
                    <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_18px_50px_rgba(10,10,10,0.35)]">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0"
                            style={{
                                background:
                                    'radial-gradient(ellipse 70% 90% at 5% 130%, rgba(255,64,33,0.30), transparent 70%), radial-gradient(ellipse 60% 100% at 100% -30%, rgba(255,0,214,0.24), transparent 70%)',
                            }}
                        />

                        <button
                            type="button"
                            onClick={dismiss}
                            aria-label="Close offer banner"
                            className="absolute top-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        >
                            <X size={15} strokeWidth={2.25} aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            onClick={scrollToPricing}
                            className="group relative flex w-full items-center gap-3 p-3 pr-10 sm:p-4 sm:pr-10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF14A0] rounded-2xl"
                        >
                            <span className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FF4021] to-[#FF00D6] text-white">
                                <Sparkles size={20} strokeWidth={2} aria-hidden="true" />
                            </span>

                            <span className="min-w-0 flex-1">
                                <span className="block text-[11px] sm:text-xs font-bold text-white">
                                    Festive Offer
                                </span>
                                <span className="block text-sm sm:text-base font-extrabold text-white leading-tight">
                                    Up to <span className="text-[#FF14A0]">80% off</span>
                                </span>
                                <span className="mt-0.5 hidden sm:flex items-center gap-1 text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                                    From ₹999/year. View offer
                                    <ArrowRight
                                        size={13}
                                        strokeWidth={2.25}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
                                </span>
                                <span className="mt-0.5 block sm:hidden text-[11px] font-semibold text-neutral-300">
                                    From ₹999/year
                                </span>
                            </span>
                        </button>
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default FestiveFloatingBanner;
