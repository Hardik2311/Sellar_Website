import React from 'react';
import {
    Store,
    Factory,
    Warehouse,
    Truck,
    ArrowUpRight,
} from 'lucide-react';

const AUDIENCES = [
    {
        id: 'retailer',
        number: '01',
        title: 'Retailers',
        tags: ['Fast Billing', 'Inventory', 'Barcodes'],
        color: '#2563eb',
        colorSoft: '#dbeafe',
        icon: Store,
    },
    {
        id: 'manufacturer',
        number: '02',
        title: 'Manufacturers',
        tags: ['Production Stock', 'GST Billing', 'Reports'],
        color: '#f59e0b',
        colorSoft: '#fef3c7',
        icon: Factory,
    },
    {
        id: 'wholesaler',
        number: '03',
        title: 'Wholesalers',
        tags: ['Bulk Orders', 'Stock Transfer', 'A4 Invoices'],
        color: '#059669',
        colorSoft: '#d1fae5',
        icon: Warehouse,
    },
    {
        id: 'distributor',
        number: '04',
        title: 'Distributors',
        tags: ['Party Ledger', 'Dues Tracking', 'Multi-location'],
        color: '#7c3aed',
        colorSoft: '#ede9fe',
        icon: Truck,
    },
];

const WhoCanUseSection = () => {
    return (
        <section
            id="who-its-for"
            className="relative w-full py-12 overflow-hidden bg-gradient-to-b from-pink-50 via-pink-50 to-pink-100"
        >
            {/* Ambient Background */}
            <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-pink-400/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">

                {/* Heading */}
                <div className="max-w-3xl mb-6">

                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-pink-200 text-pink-600 text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
                        Built For Your Business
                    </span>

                    <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#00171f] leading-[1.1] tracking-tight">
                        Whatever You Sell, Make, or Move
                        <span className="text-pink-600"> Sellar Fits Right In.</span>
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg mt-5 leading-relaxed max-w-2xl">
                        Whether you're running a retail counter, managing production,
                        handling wholesale orders, or delivering goods, Sellar gives
                        you the tools to run it all from one place.
                    </p>

                </div>


                {/* Audience Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-5">

                    {AUDIENCES.map((audience) => {
                        const Icon = audience.icon;

                        return (
                            <div
                                key={audience.id}
                                className="group relative h-full bg-white rounded-lg border border-pink-100/80 p-4 md:p-7 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(236,72,153,0.14)]"
                            >

                                {/* Number */}
                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className="text-xs font-black tracking-widest"
                                        style={{ color: audience.color }}
                                    >
                                        {audience.number}
                                    </span>
                                </div>


                                {/* Icon */}
                                <div
                                    className="w-8 h-8 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                                    style={{
                                        backgroundColor: audience.colorSoft,
                                    }}
                                >
                                    <Icon
                                        size={29}
                                        strokeWidth={2}
                                        style={{ color: audience.color }}
                                    />
                                </div>


                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-extrabold text-[#00171f] mb-1 transition-colors duration-300 group-hover:text-pink-600">
                                    {audience.title}
                                </h3>

                                {/* Bottom Accent */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                                    style={{
                                        backgroundColor: audience.color,
                                    }}
                                />

                                {/* Soft Hover Glow */}
                                <div
                                    className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        backgroundColor: audience.color,
                                    }}
                                />

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default WhoCanUseSection;