import React, { useState } from 'react';
import {
    ShoppingCart,
    BookOpen,
    Calculator,
    CalendarDays,
    FileText,
    Package,
    BarChart3,
    ScanBarcode,
    Share2,
    ClipboardList,
    TrendingUp,
    WalletCards,
    CreditCard,
    ChevronDown
} from 'lucide-react';

const PRODUCTS = [
    {
        id: 'pos',
        number: '01',
        name: 'Sellar POS',
        shortName: 'Point of Sale',
        tagline: 'Everything you need to run your counter.',
        description:
            'A complete billing and business management solution for retailers. Create invoices, manage purchases, generate barcodes, track sales, and keep an eye on your business with powerful reports.',
        color: '#2563eb',
        colorSoft: '#dbeafe',
        icon: ShoppingCart,
        image: '/POS.png',
        features: [
            {
                icon: FileText,
                title: 'Smart Invoicing',
            },
            {
                icon: Package,
                title: 'Purchase Management',
            },
            {
                icon: ScanBarcode,
                title: 'Barcode Generation',
            },
            {
                icon: BarChart3,
                title: 'Business Reports',
            },
        ],
    },

    {
        id: 'catalogue',
        number: '02',
        name: 'Sellar Catalogue',
        shortName: 'Order Management',
        tagline: 'Turn your catalogue into your digital order counter.',
        description:
            'Share your product catalogue directly with customers, receive orders digitally, and stay ahead with upcoming order visibility. Manage your orders and understand your business with detailed reports.',
        color: '#f97316',
        colorSoft: '#ffedd5',
        icon: BookOpen,
        image: '/Catalogue.png',
        features: [
            {
                icon: Share2,
                title: 'Share Your Catalogue',
            },
            {
                icon: ClipboardList,
                title: 'Easy Order Management',
            },
            {
                icon: TrendingUp,
                title: 'Upcoming Orders',
            },
            {
                icon: BarChart3,
                title: 'Profit & Loss Reports',
            },
        ],
    },

    {
        id: 'calci',
        number: '03',
        name: 'Sellar Calci',
        shortName: 'Fast Billing Calculator',
        tagline: 'Calculate. Bill. Done.',
        description:
            'A lightning-fast billing calculator built for quick counter transactions. Keep adding amounts as you bill and turn the calculation directly into an invoice without slowing down the customer.',
        color: '#7c3aed',
        colorSoft: '#ede9fe',
        icon: Calculator,
        image: '/Calci.png',
        features: [
            {
                icon: Calculator,
                title: 'Fast Calculations',
            },
            {
                icon: FileText,
                title: 'Instant Invoice',
            },
            {
                icon: WalletCards,
                title: 'Transaction History',
            },
            {
                icon: CreditCard,
                title: 'Payment Tracking',
            },
        ],
    },

    {
        id: 'events',
        number: '04',
        name: 'Sellar Events',
        shortName: 'Event Management',
        tagline: 'Something exciting is coming.',
        description: '',
        color: '#059669',
        colorSoft: '#d1fae5',
        icon: CalendarDays,
        image: '',
        features: [],
        comingSoon: true,
    },
];

const ProductsSection = () => {
    const [activeProduct, setActiveProduct] = useState('pos');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleProductClick = (id) => {
        if (window.innerWidth < 768) {
            if (activeProduct === id && isMobileOpen) {
                setIsMobileOpen(false);
            } else {
                setActiveProduct(id);
                setIsMobileOpen(true);
            }
        } else {
            setActiveProduct(id);
        }
    };

    const product = PRODUCTS.find(
        (item) => item.id === activeProduct
    );

    const ProductIcon = product.icon;

    return (
        <section
            id="products"
            className="relative w-full py-10 overflow-hidden bg-gradient-to-br from-white via-violet-50/60 to-sky-50"
        >
            {/* Ambient Background */}
            <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-3xl pointer-events-none" />

            <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

            <div className="absolute top-1/2 left-[-150px] w-[350px] h-[350px] rounded-full bg-purple-100/40 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* Heading */}
                <div className="max-w-3xl mx-auto text-center mb-8">

                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-violet-200 text-violet-600 text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
                        Our Products
                    </span>

                    <h2 className="mt-2 text-3xl md:text-5xl font-black text-[#00171f] leading-[1.1] tracking-tight">
                        Everything Your Business Needs.
                        <span className="text-violet-600">One Ecosystem.</span>
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg mt-5 leading-relaxed max-w-2xl mx-auto">
                        From everyday billing to digital orders and fast counter
                        transactions, Sellar brings powerful tools together to
                        help you run your business better.
                    </p>

                </div>


                {/* Product Navigation */}
                <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center md:gap-3 md:mb-8">

                    {PRODUCTS.map((item) => {
                        const Icon = item.icon;
                        const isActive =
                            activeProduct === item.id && isMobileOpen;

                        return (
                            <React.Fragment key={item.id}>

                                {/* Product Button */}
                                <button
                                    onClick={() => handleProductClick(item.id)}
                                    className={`group flex items-center justify-between w-full px-4 py-4 rounded-xl border font-bold text-sm transition-all duration-300 md:w-auto md:px-5 md:py-3 md:justify-center md:gap-2.5 ${activeProduct === item.id
                                        ? 'bg-[#00171f] text-white border-[#00171f] shadow-lg md:scale-105'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-violet-300 hover:text-violet-600 hover:shadow-md'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            size={18}
                                            className="md:w-[17px] md:h-[17px]"
                                        />

                                        <span>{item.shortName}</span>
                                    </div>

                                    {/* Mobile Arrow */}
                                    <ChevronDown
                                        size={19}
                                        className={`transition-transform duration-300 md:hidden ${isActive ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>


                                {/* MOBILE: Open card directly below clicked button */}
                                {isActive && (
                                    <div className="md:hidden relative rounded-2xl border border-white/80 bg-white/90 shadow-xl overflow-hidden">

                                        {/* Top Accent */}
                                        <div
                                            className="h-1.5 w-full"
                                            style={{
                                                background: `linear-gradient(90deg, ${product.color}, ${product.colorSoft})`,
                                            }}
                                        />

                                        <div className="p-5">

                                            {/* Product Image */}
                                            <div className="relative flex items-center justify-center min-h-[180px]">

                                                {product.comingSoon ? (

                                                    <div className="text-center">

                                                        <div
                                                            className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
                                                            style={{
                                                                backgroundColor: product.colorSoft,
                                                            }}
                                                        >
                                                            <ProductIcon
                                                                size={36}
                                                                style={{
                                                                    color: product.color,
                                                                }}
                                                            />
                                                        </div>

                                                        <span
                                                            className="inline-flex px-4 py-2 rounded-full text-sm font-bold"
                                                            style={{
                                                                backgroundColor: product.colorSoft,
                                                                color: product.color,
                                                            }}
                                                        >
                                                            Coming Soon
                                                        </span>

                                                    </div>

                                                ) : (

                                                    <div className="relative w-full flex items-center justify-center">

                                                        <div
                                                            className="absolute w-[70%] h-[70%] rounded-full blur-3xl opacity-30"
                                                            style={{
                                                                backgroundColor: product.colorSoft,
                                                            }}
                                                        />

                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="relative z-10 max-h-[500px] max-w-[350px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.14)]"
                                                        />

                                                    </div>
                                                )}

                                            </div>


                                            {/* Product Content */}
                                            <div>

                                                <span
                                                    className="text-xs font-black tracking-[0.2em]"
                                                    style={{
                                                        color: product.color,
                                                    }}
                                                >
                                                    PRODUCT {product.number}
                                                </span>

                                                <h3 className="mt-3 text-2xl font-black text-[#00171f]">
                                                    {product.name}
                                                </h3>

                                                <p
                                                    className="mt-2 text-base font-bold"
                                                    style={{
                                                        color: product.color,
                                                    }}
                                                >
                                                    {product.tagline}
                                                </p>

                                                {/* Features */}
                                                {product.features.length > 0 && (
                                                    <div className="grid grid-cols-1 gap-4 mt-6">

                                                        {product.features.map((feature) => {
                                                            const FeatureIcon = feature.icon;

                                                            return (
                                                                <div
                                                                    key={feature.title}
                                                                    className="flex items-center gap-3"
                                                                >
                                                                    <div
                                                                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                                                                        style={{
                                                                            backgroundColor: product.colorSoft,
                                                                        }}
                                                                    >
                                                                        <FeatureIcon
                                                                            size={18}
                                                                            style={{
                                                                                color: product.color,
                                                                            }}
                                                                        />
                                                                    </div>

                                                                    <h4 className="font-bold text-sm text-[#00171f]">
                                                                        {feature.title}
                                                                    </h4>
                                                                </div>
                                                            );
                                                        })}

                                                    </div>
                                                )}

                                            </div>

                                        </div>
                                    </div>
                                )}

                            </React.Fragment>
                        );
                    })}
                </div>

                {/* DESKTOP PRODUCT SHOWCASE */}
                <div className="hidden md:block relative rounded-[36px] border border-white/80 bg-white/75 backdrop-blur-xl shadow-[0_25px_80px_rgba(76,29,149,0.10)] overflow-hidden">

                    {/* Product Top Accent */}
                    <div
                        className="absolute top-0 left-0 right-0 h-1.5"
                        style={{
                            background: `linear-gradient(90deg, ${product.color}, ${product.colorSoft})`,
                        }}
                    />

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 p-6 md:p-10 lg:p-14">

                        {/* Product Image */}
                        <div className="relative flex items-center justify-center min-h-[560px]">

                            {product.comingSoon ? (

                                <div className="text-center">

                                    <div
                                        className="mx-auto w-24 h-24 rounded-3xl flex items-center justify-center mb-7"
                                        style={{
                                            backgroundColor: product.colorSoft,
                                        }}
                                    >
                                        <ProductIcon
                                            size={44}
                                            style={{ color: product.color }}
                                        />
                                    </div>

                                    <span
                                        className="inline-flex px-4 py-2 rounded-full text-sm font-bold"
                                        style={{
                                            backgroundColor: product.colorSoft,
                                            color: product.color,
                                        }}
                                    >
                                        Coming Soon
                                    </span>

                                    <h3 className="mt-5 text-3xl font-black text-[#00171f]">
                                        Sellar Events
                                    </h3>

                                    <p className="mt-3 text-slate-500">
                                        Something exciting is being built here.
                                    </p>

                                </div>

                            ) : (

                                <div className="relative w-full h-full flex items-center justify-center">

                                    {/* Image Glow */}
                                    <div
                                        className="absolute w-[70%] h-[70%] rounded-full blur-3xl opacity-30"
                                        style={{
                                            backgroundColor: product.colorSoft,
                                        }}
                                    />

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="relative z-10 max-h-[1000px] max-w-[150%] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.14)] transition-all duration-500"
                                    />

                                </div>

                            )}

                        </div>


                        {/* Product Content */}
                        <div className="flex flex-col justify-center">

                            <div className="flex items-center gap-3 mb-5">

                                <span
                                    className="text-xs font-black tracking-[0.2em]"
                                    style={{ color: product.color }}
                                >
                                    PRODUCT {product.number}
                                </span>

                                <div className="h-px w-10 bg-slate-200" />

                                <span className="text-xs font-semibold text-slate-400">
                                    {product.shortName}
                                </span>

                            </div>


                            <h3 className="text-3xl md:text-4xl font-black text-[#00171f] leading-tight">
                                {product.name}
                            </h3>

                            <p
                                className="mt-3 text-lg font-bold"
                                style={{ color: product.color }}
                            >
                                {product.tagline}
                            </p>


                            {product.description && (
                                <p className="mt-5 text-slate-500 text-base leading-relaxed">
                                    {product.description}
                                </p>
                            )}


                            {/* Features */}
                            {product.features.length > 0 && (
                                <div className="grid sm:grid-cols-2 gap-5 mt-9">

                                    {product.features.map((feature) => {
                                        const FeatureIcon = feature.icon;

                                        return (
                                            <div
                                                key={feature.title}
                                                className="group/feature flex items-center gap-3"
                                            >
                                                <div
                                                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                                                    style={{
                                                        backgroundColor: product.colorSoft,
                                                    }}
                                                >
                                                    <FeatureIcon
                                                        size={18}
                                                        style={{
                                                            color: product.color,
                                                        }}
                                                    />
                                                </div>

                                                <h4 className="font-bold text-sm text-[#00171f]">
                                                    {feature.title}
                                                </h4>
                                            </div>
                                        );
                                    })}

                                </div>
                            )}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductsSection;