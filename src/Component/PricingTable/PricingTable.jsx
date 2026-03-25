import React, { useState } from 'react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [activeService, setActiveService] = useState('pos');

    const BASIC_FEATURES = [
        "Vendor POS Dashboard Access",
        "Total Sale Board",
        "Automated Sales Reports",
        "Custom Voucher Numbering",
        "Bar Code + QR Code Scanner",
        "Autofill Bill Amount & Balances",
        "Bulk Import Items",
        "Parent Categorisation of Items",
        "Automated Invoice Generation",
        "GST composition"
    ];

    const PRO_FEATURES = [
        ...BASIC_FEATURES,
        "Daily Performance Board",
        "Payment Methods Board",
        "Top Items Sold Board",
        "Top Salesman Board",
        "Restock Items Board",
        "Hide Data Functionality",
        "Amount vs Quantity in Boards",
        "Sales return voucher",
        "Voucher/Invoice modification",
        "Purchase voucher",
        "Shortcut Barcode Printing",
        "Purchase return voucher",
        "Payment reminder feature",
        "Transaction filter & search",
        "Multi-store functionality",
        "Automated business card making",
        "Automated purchase reports",
        "Automated Item reports",
        "Automated PnL reports",
        "Downloadable reports",
        "List vs Card view",
        "Salesman wise billing",
        "Automated rounding off (upto ₹100)",
        "Item-wise discount setting",
        "Negative inventory billing",
        "Customer database management",
        "Custom barcode generation",
        "Supplier database management",
        "Custom users management",
        "Custom user app permissions",
        "Discount/Sale amount secret editor",
        "Credit Note functionality",
        "Exchange items functionality",
        "Multi-tax Purchase vouchering",
        "Individual barcode printing",
        "Credit sales setting",
        "Multiple owners in same company"
    ];

    const posFeatures = PRO_FEATURES.map(f => ({
        name: f,
        basic: BASIC_FEATURES.includes(f),
        pro: true
    }));

    const catalogueFeatures = [
        { name: "Online Catalogue", basic: true, pro: true },
        { name: "Share on WhatsApp", basic: true, pro: true },
        { name: "Receive Orders", basic: true, pro: true },
        { name: "Online Payments", basic: false, pro: true },
        { name: "Custom Domain", basic: false, pro: true },
        { name: "Order Analytics", basic: false, pro: true }
    ];

    const bothFeatures = [
        ...PRO_FEATURES.map(f => ({
            name: f,
            basic: true,
            pro: true
        })),
        ...catalogueFeatures
    ];

    const currentFeatures =
        activeService === 'pos'
            ? posFeatures
            : activeService === 'catalogue'
                ? catalogueFeatures
                : bothFeatures;



    const planLabels = {
        pos: {
            basic: "POS Basic",
            pro: "POS Pro"
        },
        catalogue: {
            basic: "Starter",
            pro: "Premium"
        },
        both: {
            pro: "Enterprise"
        }
    };

    const pricing = {
        pos: {
            basic: isYearly ? '999' : '99',
            pro: isYearly ? '2,999' : '299',
            originalBasic: isYearly ? '1,999' : '199',
            originalPro: isYearly ? '3,999' : '499'
        },
        catalogue: {
            basic: isYearly ? '1,499' : '149',
            pro: isYearly ? '4,999' : '499',
            originalBasic: isYearly ? '2,999' : '299',
            originalPro: isYearly ? '7,999' : '799'
        },
        both: {
            pro: isYearly ? '7,999' : '799',
            originalPro: isYearly ? '14,999' : '1,499'
        }
    };

    return (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f8fafc]" id="pricing">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-[900] text-[#00171f] mb-4 md:mb-6 leading-tight">
                        Simple, <span className="text-[#007EA7]">Transparent</span> Pricing
                    </h2>

                    {/* Toggle Monthly/Yearly */}
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 font-bold text-slate-500 text-sm md:text-base">
                        <span className={!isYearly ? "text-[#00171f]" : ""}>4 Weeks</span>
                        <label className="relative inline-block w-11 h-6 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isYearly}
                                onChange={() => setIsYearly(!isYearly)}
                            />
                            <div className="w-full h-full bg-slate-300 rounded-full peer peer-checked:bg-[#007EA7] transition-colors"></div>
                            <div className="absolute left-1 bottom-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                        </label>
                        <span className={isYearly ? "text-[#00171f]" : ""}>
                            Yearly <span className="ml-1 md:ml-2 text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-md">Save 23%</span>
                        </span>
                    </div>

                    {/* Service Tabs */}
                    <div className="inline-flex bg-slate-200 p-1 rounded-xl">
                        <button
                            className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${activeService === 'pos' ? 'bg-white text-[#007EA7] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => setActiveService('pos')}
                        >
                            POSI - billing
                        </button>
                        <button
                            className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${activeService === 'catalogue' ? 'bg-white text-[#007EA7] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => setActiveService('catalogue')}
                        >
                            CATALOG - digital store
                        </button>
                        <button
                            className={`px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${activeService === 'both' ? 'bg-yellow-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => setActiveService('both')}
                        >
                            BOTH
                        </button>
                    </div>
                </div>

                {/* Pricing Table Card */}
                <div className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
                    {/* Table Header */}
                    <div className={`grid ${activeService === 'both' ? 'grid-cols-[1.5fr_1fr] md:grid-cols-[2.2fr_1fr]' : 'grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2.2fr_1fr_1fr]'} bg-slate-50 border-b-2 border-slate-200 sticky top-0 z-20`}>
                        {/* Dynamic Feature Header */}
                        <div className="p-4 md:p-10 border-r border-slate-200 flex flex-col justify-center">
                            <span className="text-[9px] md:text-[10px] font-extrabold text-slate-400 tracking-widest uppercase mb-1">
                                Features
                            </span>
                            <h3 className="text-sm md:text-2xl font-[1000] text-[#007EA7] tracking-tight uppercase truncate">
                                {activeService === 'pos' ? 'POSI' : 'Catalog'}
                            </h3>
                            {/* --- ADDED BILLING CYCLE TEXT --- */}
                            <span className="text-[8px] md:text-[11px] font-bold text-slate-500 uppercase mt-1">
                                Per {isYearly ? 'Year' : '4 Weeks'}
                            </span>
                        </div>

                        {/* Basic Price Section */}
                        {activeService !== 'both' && (
                            <div className="p-4 md:p-8 text-center border-r border-slate-200 flex flex-col justify-center items-center mt-2">
                                <span className="block text-[10px] md:text-sm font-extrabold text-slate-500 uppercase tracking-wider mb-1 Pro md:mt-0">
                                    {planLabels[activeService].basic}
                                </span>
                                <div className="flex flex-col">
                                    <span className="block text-xs md:text-xl font-[900] text-slate-400 line-through">
                                        ₹{pricing[activeService].originalBasic}
                                    </span>
                                    <span className="block text-lg md:text-4xl font-[900] text-slate-900 leading-none">
                                        ₹{pricing[activeService].basic}
                                    </span>
                                </div>
                            </div>)}

                        {/* Pro Price Section */}
                        <div className="p-4 md:p-8 text-center relative bg-blue-50/40 flex flex-col justify-center items-center">
                            {/* Best Seller Badge */}
                            <div className={`absolute top-0 left-0 right-0 text-[7px] md:text-[10px] font-black py-1 uppercase tracking-tighter md:tracking-widest ${activeService === 'both'
                                    ? 'bg-yellow-500 text-white'
                                    : 'bg-[#007EA7] text-white'
                                }`}>
                                Best Seller
                            </div>
                            <span className="block text-[10px] md:text-sm font-extrabold text-slate-500 uppercase tracking-wider mb-1 mt-2 md:mt-0">
                                {planLabels[activeService].pro}
                            </span>
                            <div className="flex flex-col">
                                <span className="block text-xs md:text-xl font-[900] text-slate-400 line-through">
                                    ₹{pricing[activeService].originalPro}
                                </span>
                                <span className="block text-lg md:text-4xl font-[900] text-slate-900 leading-none">
                                    ₹{pricing[activeService].pro}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="max-h-[500px] md:max-h-full overflow-y-auto">
                        {currentFeatures.map((f, i) => (
                            <div className={`grid ${activeService === 'both'
                                ? 'grid-cols-[1.5fr_1fr] md:grid-cols-[2.2fr_1fr]'
                                : 'grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2.2fr_1fr_1fr]'
                                } border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors`} key={i}>
                                <div className="p-3 md:p-6 text-[10px] md:text-[15px] font-semibold text-slate-700 border-r border-slate-100 flex items-center leading-tight">
                                    {f.name}
                                </div>
                                {activeService !== 'both' && (
                                    <div className="p-3 md:p-4 flex justify-center items-center border-r border-slate-100">
                                        {f.basic ?
                                            <span className="text-green-500 text-base md:text-xl font-bold">✔</span> :
                                            <span className="text-red-500 text-base md:text-xl">✖</span>
                                        }
                                    </div>)}
                                <div className="p-3 md:p-4 flex justify-center items-center bg-blue-50/10">
                                    {f.pro ?
                                        <span className="text-green-500 text-base md:text-xl font-bold">✔</span> :
                                        <span className="text-red-300 text-base md:text-xl">✖</span>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-3 mb-3 relative flex justify-center md:justify-start">
                    <span className="absolute left-1 italic text-slate-900 text-xs md:text-sm font-medium">
                        All prices exclude GST.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Pricing;