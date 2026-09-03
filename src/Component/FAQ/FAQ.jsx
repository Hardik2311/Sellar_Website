import React, { useState } from 'react';
import {
    ChevronDown,
    HelpCircle,
    Receipt,
    ShoppingBag,
    Package,
    BarChart3,
    ShieldCheck,
    CheckCircle2,
} from 'lucide-react';

const FAQS = [
    {
        category: 'Billing & Invoicing',
        icon: Receipt,
        question: 'What is Sellar?',
        answer:
            'Sellar is a complete business management solution that combines billing, invoicing, inventory management, sales tracking and digital catalogue-based order management in one place.',
    },
    {
        category: 'Billing & Invoicing',
        icon: Receipt,
        question: 'Can I create GST invoices with Sellar?',
        answer:
            'Yes. Sellar allows you to create professional GST invoices quickly. You can add products, quantities, taxes and customer details and generate invoices in seconds.',
    },
    {
        category: 'Billing & Invoicing',
        icon: Receipt,
        question: 'Can I create estimate invoices?',
        answer:
            'Yes. You can create estimate invoices for customers before finalizing a sale. This makes it easier to share pricing and convert estimates into actual sales.',
    },
    {
        category: 'Billing & Invoicing',
        icon: Receipt,
        question: 'Can I generate invoices quickly at the counter?',
        answer:
            'Yes. Sellar is designed for fast counter billing so you can add products, calculate the total and complete transactions without unnecessary steps.',
    },

    {
        category: 'Catalogue & Orders',
        icon: ShoppingBag,
        question: 'What is Sellar Catalogue?',
        answer:
            'Sellar Catalogue is a digital product catalogue that allows you to showcase your products to customers and receive orders digitally.',
    },
    {
        category: 'Catalogue & Orders',
        icon: ShoppingBag,
        question: 'Can I share my product catalogue with customers?',
        answer:
            'Yes. You can share your digital catalogue with customers so they can browse your products and place orders more conveniently.',
    },
    {
        category: 'Catalogue & Orders',
        icon: ShoppingBag,
        question: 'Can customers place orders through the catalogue?',
        answer:
            'Yes. Customers can view your products through the digital catalogue and submit their orders. You can then manage those orders from your side.',
    },
    {
        category: 'Catalogue & Orders',
        icon: ShoppingBag,
        question: 'Can I manage all customer orders from one place?',
        answer:
            'Yes. Sellar Catalogue helps you keep customer orders organized so you can easily view and manage your incoming and upcoming orders.',
    },

    {
        category: 'Products & Inventory',
        icon: Package,
        question: 'Can I manage my products in Sellar?',
        answer:
            'Yes. You can manage your products and keep important product information organized while handling your billing and catalogue operations.',
    },
    {
        category: 'Products & Inventory',
        icon: Package,
        question: 'Can Sellar help me track purchases?',
        answer:
            'Yes. Sellar includes purchase management features that help you record purchases and keep your business information organized.',
    },
    {
        category: 'Products & Inventory',
        icon: Package,
        question: 'Can I generate product barcodes?',
        answer:
            'Yes. Sellar provides barcode generation and management features that make it easier to identify and manage products.',
    },
    {
        category: 'Products & Inventory',
        icon: Package,
        question: 'Can I keep track of my stock?',
        answer:
            'Yes. Sellar helps you keep track of stock alongside your sales and purchase activities, giving you better visibility into your inventory.',
    },

    {
        category: 'Reports & Business',
        icon: BarChart3,
        question: 'Can I see my sales reports?',
        answer:
            'Yes. Sellar provides business reports that help you understand sales, purchases, stock and overall business performance.',
    },
    {
        category: 'Reports & Business',
        icon: BarChart3,
        question: 'Can I track my business performance?',
        answer:
            'Yes. You can use Sellar reports to get a clearer view of your sales, purchases and overall business activity.',
    },
    {
        category: 'Reports & Business',
        icon: BarChart3,
        question: 'Can I understand my profit and loss?',
        answer:
            'Sellar Catalogue includes profit and loss reporting features that help you understand your sales, expenses and overall business performance.',
    },

    {
        category: 'Security & Account',
        icon: ShieldCheck,
        question: 'Is my business data secure?',
        answer:
            'Sellar is designed with business data protection in mind. Your business information should be handled responsibly and accessed only through your authorized account.',
    },
    {
        category: 'General',
        icon: HelpCircle,
        question: 'Can I use Sellar on different devices?',
        answer:
            'Sellar is designed to make your business operations accessible and convenient across supported devices. Your exact experience may depend on the device and version you are using.',
    },
    {
        category: 'General',
        icon: HelpCircle,
        question: 'Who can use Sellar?',
        answer:
            'Sellar is built for retailers and businesses that need an easy way to manage billing, products, sales, purchases, digital catalogues and customer orders.',
    },
];

const CATEGORIES = [
    'All Questions',
    'Billing & Invoicing',
    'Catalogue & Orders',
    'Products & Inventory',
    'Reports & Business',
    'Security & Account',
    'General',
];

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('All Questions');
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const filteredFAQS = FAQS.filter(
        (faq) =>
            activeCategory === 'All Questions' ||
            faq.category === activeCategory
    );


    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-violet-50/60 to-sky-50">

            {/* Background Glow */}
            <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-3xl pointer-events-none" />

            <div className="absolute top-[40%] -right-40 w-[450px] h-[450px] rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-purple-200/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-8">

                {/* ================= HERO ================= */}
                <div className="max-w-4xl mx-auto text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-200 text-violet-600 text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
                        <HelpCircle size={16} />
                        Help Center
                    </div>

                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black text-[#00171f] leading-[1.05] tracking-tight">
                        Frequently Asked
                        <span className="block text-violet-600">
                            Questions.
                        </span>
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Everything you need to know about Sellar billing,
                        digital catalogues, orders, products and business
                        management.
                    </p>
                </div>

                {/* ================= CATEGORIES ================= */}
                <div className="mt-8 md:mt-16">
                    <div className="flex gap-2.5 overflow-x-auto pb-3 scrollbar-hide justify-start md:justify-center">
                        {CATEGORIES.map((category) => {
                            const active = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setActiveFAQ(null);
                                    }}
                                    className={`
                                        flex-shrink-0 px-4 md:px-5 py-2.5 rounded-full
                                        border text-sm font-bold
                                        transition-all duration-300
                                        ${active
                                            ? 'bg-[#00171f] text-white border-[#00171f] shadow-lg'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-violet-300 hover:text-violet-600'
                                        }
                                    `}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ================= FAQ CONTENT ================= */}
                <div className="max-w-4xl mx-auto mt-6">
                    <div className="max-h-[500px] md:max-h-[600px] space-y-2 overflow-y-auto pr-2 custom-scrollbar">
                        {filteredFAQS.map((faq, index) => {
                            const Icon = faq.icon;
                            const isOpen = activeFAQ === index;

                            return (
                                <div
                                    key={`${faq.question}-${index}`}
                                    className={`
                                            overflow-hidden rounded-2xl
                                            border bg-white/90 backdrop-blur-sm
                                            transition-all duration-300
                                            ${isOpen
                                            ? 'border-violet-300 shadow-[0_15px_45px_rgba(76,29,149,0.10)]'
                                            : 'border-slate-200 hover:border-violet-200 hover:shadow-md'
                                        }
                                        `}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center gap-4 text-left p-5 md:p-6"
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`
                                                    flex-shrink-0 w-10 h-10 md:w-11 md:h-11
                                                    rounded-xl flex items-center justify-center
                                                    transition-all duration-300
                                                    ${isOpen
                                                    ? 'bg-violet-600 text-white'
                                                    : 'bg-violet-50 text-violet-600'
                                                }
                                                `}
                                        >
                                            <Icon size={19} />
                                        </div>

                                        {/* Question */}
                                        <div className="flex-1 min-w-0">
                                            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-violet-500">
                                                {faq.category}
                                            </span>

                                            <h3 className="mt-1 text-sm md:text-base font-bold text-[#00171f] leading-relaxed">
                                                {faq.question}
                                            </h3>
                                        </div>

                                        {/* Arrow */}
                                        <div
                                            className={`
                                                    flex-shrink-0 w-8 h-8 rounded-full
                                                    flex items-center justify-center
                                                    bg-slate-50 transition-all duration-300
                                                    ${isOpen
                                                    ? 'rotate-180 bg-violet-50 text-violet-600'
                                                    : 'text-slate-500'
                                                }
                                                `}
                                        >
                                            <ChevronDown size={18} />
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`
                                                grid transition-all duration-300 ease-in-out
                                                ${isOpen
                                                ? 'grid-rows-[1fr] opacity-100'
                                                : 'grid-rows-[0fr] opacity-0'
                                            }
                                            `}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 md:px-6 pb-3 pl-[62px] md:pl-[68px]">
                                                <div className="h-px bg-slate-100 mb-2" />

                                                <p className="text-sm md:text-base text-slate-500 leading-6">
                                                    {faq.answer}
                                                </p>

                                                <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-emerald-600">
                                                    <CheckCircle2 size={15} />
                                                    Helpful information for your business
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;