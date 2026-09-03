import React, { useState } from "react";
import {
    Quote,
    Star,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    MessageCircle,
} from "lucide-react";

const testimonials = [
    {
        name: "M.Vogue",
        username: "@mvogue",
        review:
            "Humne recently ye system shop me use karna start kiya. Billing ab thodi fast ho gayi hai aur kaun sa item stock me hai wo bhi easily check ho jata hai. Pehle sab alag-alag likhna padta tha, ab kaam thoda easy ho gaya.",
        img: "Testimonials/testimonial.jpeg",
    },
    {
        name: "GIFTINGURU - Indirapuram",
        username: "@giftinguru_indirapuram",
        review:
            "Shop me daily ka kaam manage karne me help milti hai. Billing aur products ka record ek jagah mil jata hai. Staff ko bhi use karna jaldi samajh aa gaya.",
        img: "Testimonials/TestimonialINDRA.jpg",
    },
    {
        name: "Daksh Toys",
        username: "@dakshtoys",
        review:
            "Now we sell toys in Jalandhar, Kerala and Karnataka using their catalog services",
        img: "Testimonials/Dakshentre.jpeg",
    },
    {
        name: "GIFTINGURU - Siddharth Vihar",
        username: "@giftinguru_siddharthvihar",
        review:
            "System simple hai aur kaafi useful laga. Ab sales dekhna aur stock check karna easy ho gaya hai. Pehle thoda confusion ho jata tha but ab sab clear rehta hai.",
        img: "Testimonials/TestimonialSiddharth.jpg",
    },
    {
        name: "Aaliya Cosmetics",
        username: "@aaliyacosmetics",
        review:
            "Badiya system hai. Bilkul Calculator ki tarah h.",
        img: "Testimonials/Aliyacosmetic.jpeg",
    },
    {
        name: "GIFTINGURU - Shakti Khand 4",
        username: "@giftinguru_shaktikhand",
        review:
            "Humare store ke liye kaafi helpful raha. Billing karte time time bach jata hai aur pata rehta hai ki kaunsa item kitna bacha hai. Overall experience accha raha abhi tak.",
        img: "Testimonials/TestimonialSHAKTI.jpg",
    },
];


// ============================================================
// TESTIMONIAL CARD
// ============================================================

const Card = ({ t }) => {
    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.14)]">

            {/* IMAGE */}

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">

                <img
                    src={t.img}
                    alt={t.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />


                {/* Quote */}

                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/90 text-[#007EA7] shadow-lg backdrop-blur-md">

                    <Quote
                        size={18}
                        fill="currentColor"
                    />

                </div>


                {/* Customer badge */}

                <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">

                    Verified Customer

                </div>

            </div>


            {/* CONTENT */}

            <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Stars */}

                <div className="mb-4 flex items-center gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={14}
                            fill="#FBBF24"
                            className="text-amber-400"
                        />
                    ))}

                </div>


                {/* Review */}

                <p className="flex-1 text-sm leading-7 text-slate-500">

                    "{t.review}"

                </p>


                {/* Divider */}

                <div className="my-5 h-px bg-slate-100" />


                {/* Customer */}

                <div className="flex items-center justify-between gap-3">

                    <div className="min-w-0">

                        <h4 className="truncate text-sm font-black text-[#00171f]">
                            {t.name}
                        </h4>

                        <p className="mt-0.5 truncate text-[11px] font-medium text-slate-400">
                            {t.username}
                        </p>

                    </div>


                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#007EA7]">

                        <MessageCircle size={16} />

                    </div>

                </div>

            </div>

        </div>
    );
};


// ============================================================
// SLIDER CONTROLS
// ============================================================

const SliderControls = ({
    current,
    total,
    onPrev,
    onNext,
    onDot,
}) => {
    return (
        <div className="mt-9 flex items-center justify-center gap-4">

            {/* Previous */}

            <button
                onClick={onPrev}
                aria-label="Previous testimonial"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-[#007EA7] hover:bg-[#007EA7] hover:text-white hover:shadow-md"
            >
                <ChevronLeft
                    size={18}
                    className="transition-transform group-hover:-translate-x-0.5"
                />
            </button>


            {/* Dots */}

            <div className="flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-2 shadow-sm backdrop-blur-md">

                {Array.from({ length: total }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => onDot(i)}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`
                            h-1.5 rounded-full p-0 transition-all duration-300
                            ${i === current
                                ? "w-7 bg-[#007EA7]"
                                : "w-1.5 bg-slate-300 hover:bg-slate-400"
                            }
                        `}
                    />
                ))}

            </div>


            {/* Next */}

            <button
                onClick={onNext}
                aria-label="Next testimonial"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:translate-x-0.5 hover:border-[#007EA7] hover:bg-[#007EA7] hover:text-white hover:shadow-md"
            >
                <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                />
            </button>

        </div>
    );
};


// ============================================================
// MAIN
// ============================================================

export default function Testimonials() {

    const [mobileCurrent, setMobileCurrent] = useState(0);
    const [tabletCurrent, setTabletCurrent] = useState(0);

    const TABLET_VISIBLE = 2;

    const tabletTotal =
        testimonials.length - TABLET_VISIBLE + 1;

    const tabletVisible = testimonials.slice(
        tabletCurrent,
        tabletCurrent + TABLET_VISIBLE
    );


    // TABLET

    const tabletPrev = () => {
        setTabletCurrent((current) =>
            current === 0
                ? tabletTotal - 1
                : current - 1
        );
    };


    const tabletNext = () => {
        setTabletCurrent((current) =>
            current === tabletTotal - 1
                ? 0
                : current + 1
        );
    };


    return (
        <section
            id="testimonial"
            className="relative w-full overflow-hidden bg-gradient-to-br from-white via-orange-50/50 to-violet-50/50 py-8"
        >

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-orange-200/25 blur-3xl" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-200/25 blur-3xl" />

            <div className="pointer-events-none absolute left-[40%] top-[-250px] h-[450px] w-[450px] rounded-full bg-sky-200/20 blur-3xl" />


            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 md:px-10">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <div className="mx-auto max-w-3xl text-center">

                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 shadow-sm">

                        <Sparkles size={13} />

                        Customer Stories

                    </div>


                    <h2 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-[#00171f] sm:text-5xl md:text-6xl">

                        Loved by

                        <span className="block text-[#007EA7]">
                            real businesses.
                        </span>

                    </h2>


                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">

                        See how businesses are using Sellar to make billing,
                        stock management and everyday operations easier.

                    </p>

                </div>


                {/* =====================================================
                    DESKTOP — 4 CARDS
                ====================================================== */}

                <div className="mt-8 hidden grid-cols-4 gap-6 lg:grid">

                    {testimonials.slice(0, 4).map((t) => (
                        <Card
                            key={t.username}
                            t={t}
                        />
                    ))}

                </div>


                {/* =====================================================
                    DESKTOP SECOND ROW
                ====================================================== */}

                <div className="mt-6 hidden grid-cols-2 gap-6 lg:grid">

                    {testimonials.slice(4).map((t) => (
                        <Card
                            key={t.username}
                            t={t}
                        />
                    ))}

                </div>


                {/* =====================================================
                    TABLET — 2 CARDS
                ====================================================== */}

                <div className="mt-10 hidden md:block lg:hidden">

                    <div className="grid grid-cols-2 gap-6">

                        {tabletVisible.map((t) => (
                            <Card
                                key={t.username}
                                t={t}
                            />
                        ))}

                    </div>


                    <SliderControls
                        current={tabletCurrent}
                        total={tabletTotal}
                        onPrev={tabletPrev}
                        onNext={tabletNext}
                        onDot={setTabletCurrent}
                    />

                </div>


                {/* =====================================================
                    MOBILE — SWIPEABLE CARDS
                ====================================================== */}

                <div className="mt-6 block md:hidden">

                    <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-3 snap-x snap-mandatory scrollbar-hide">

                        {testimonials.map((t) => (
                            <div
                                key={t.username}
                                className="w-[88%] flex-none snap-center"
                            >
                                <Card t={t} />
                            </div>
                        ))}

                    </div>

                </div>


                {/* =====================================================
                    TRUST LINE
                ====================================================== */}

                <div className="mx-auto mt-4 flex max-w-xl items-center justify-center gap-2 text-center text-[11px] font-semibold text-slate-400">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">

                        <Star
                            size={12}
                            fill="currentColor"
                        />

                    </div>

                    Real experiences from businesses using Sellar

                </div>

            </div>

        </section>
    );
}