import React, { useEffect } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    ShoppingBag,
    Sparkles,
    ArrowUpRight,
} from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const contactOptions = [
        {
            title: 'WhatsApp Us',
            description: 'Chat with our team instantly',
            icon: MessageCircle,
            link: 'https://wa.me/9818815838',
        },
        {
            title: 'Call Us',
            description: 'Speak directly with our team',
            icon: Phone,
            link: 'tel:+919818815838', 
        },
        {
            title: 'Email Us',
            description: 'Send us your queries anytime',
            icon: Mail,
            link: 'mailto:sellarsuite@gmail.com', 
        },
        {
            title: 'Visit Us',
            description: 'Find our office location',
            icon: MapPin,
            link: 'https://maps.app.goo.gl/uM5EPUW8yuLANai18', 
        },
        {
            title: 'Buy From Us',
            description: 'Start growing your business today',
            icon: ShoppingBag,
            link: 'https://app.sellar.in',
        },
    ];

    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden bg-gradient-to-br from-white via-sky-50 to-violet-50 py-8"
        >
            {/* Background Glow */}

            <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-200px] left-[35%] h-[400px] w-[400px] rounded-full bg-cyan-200/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-10">

                {/* Heading */}

                <div className="mx-auto max-w-2xl text-center">

                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#007EA7] shadow-sm">
                        <Sparkles size={14} />
                        Get in touch
                    </div>

                    <h2 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-[#00171f] sm:text-5xl md:text-6xl">
                        Connect with
                        <span className="block text-[#007EA7]">
                            Sellar.
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">
                        Choose your preferred way to connect with us. We're
                        always here to help your business grow.
                    </p>

                </div>


                {/* Action Buttons */}

                <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {contactOptions.map((option) => {
                        const Icon = option.icon;

                        return (
                            <a
                                key={option.title}
                                href={option.link}
                                target={
                                    option.link.startsWith('http')
                                        ? '_blank'
                                        : undefined
                                }
                                rel={
                                    option.link.startsWith('http')
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                className="group flex items-center justify-between rounded-2xl border border-white bg-white/90 p-5 shadow-[0_15px_50px_rgba(0,52,89,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-[0_20px_60px_rgba(0,126,167,0.15)]"
                            >
                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#007EA7] transition-all duration-300 group-hover:bg-[#007EA7] group-hover:text-white">
                                        <Icon size={22} />
                                    </div>

                                    <div>

                                        <h3 className="font-black text-[#00171f]">
                                            {option.title}
                                        </h3>

                                        <p className="mt-1 text-xs text-slate-400">
                                            {option.description}
                                        </p>

                                    </div>

                                </div>

                                <ArrowUpRight
                                    size={18}
                                    className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#007EA7]"
                                />

                            </a>
                        );
                    })}

                </div>


                {/* Bottom CTA */}

                <div className="mx-auto mt-6 max-w-5xl rounded-[24px] border border-sky-100 bg-white/70 p-5 text-center shadow-sm backdrop-blur-xl">

                    <p className="text-sm font-semibold text-slate-500">
                        Ready to simplify your business operations?
                    </p>

                    <a
                        href="https://app.sellar.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#007EA7] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-[#007EA7]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003459]"
                    >
                        Start with Sellar
                        <ArrowUpRight size={17} />
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Contact;