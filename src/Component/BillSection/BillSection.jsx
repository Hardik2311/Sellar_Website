import React, { useState } from 'react';

const BILL_TYPES = {
    a4: {
        label: 'A4 Bill',
        bills: [
            {
                id: 'a4-gst',
                title: 'A4 GST Bill',
                description:
                    'A professional A4 GST invoice with complete billing details, itemized products, taxes and company information.',
                image: '/A4-Bill.png',
            }
        ],
    },

    a5: {
        label: 'A5 Bill',
        bills: [
            {
                id: 'a5-gst',
                title: 'A5 GST Bill',
                description:
                    'A compact A5 GST bill containing essential customer, product, billing and tax details.',
                image: '/A5-Bill.png',
            }
        ],
    },

    thermal: {
        label: '2/3-Inch Thermal',
        bills: [
            {
                id: 'thermal',
                title: '2/3-Inch Thermal Receipt',
                description:
                    'A fast and compact thermal receipt designed for quick counter billing and high-footfall stores.',
                image: '/2-inch Thermal.png',
            },
        ],
    },
};

const BillFormatsSection = () => {
    const [activeType, setActiveType] = useState('a4');

    const activeBills = BILL_TYPES[activeType].bills;

    return (
        <section
            id="bill-formats"
            className="relative w-full py-10 overflow-hidden bg-gradient-to-b from-white via-violet-50/60 to-white"
        >
            {/* Background Glow */}
            <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />

            <div className="absolute bottom-0 right-[-150px] w-[450px] h-[450px] rounded-full bg-violet-200/25 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-10">

                    <span className="inline-flex items-center rounded-full border border-purple-200 bg-white/80 px-4 py-1.5 text-sm font-bold tracking-widest text-purple-600 uppercase shadow-sm">
                        Bill Formats
                    </span>

                    <h2 className="mt-2 mx-auto text-2xl md:text-5xl font-black text-[#00171f] leading-[1.15] tracking-tight text-nowrap">
                        Every Business. Every Bill. 
                    </h2>
                    <h2 className='mt-1 mx-auto text-5xl font-semibold text-purple-700'>
                        One Software.
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
                        From detailed office invoices to instant counter receipts print exactly the format your business needs, with your payment QR built right in.
                    </p>
                </div>


                {/* BILL TYPE BUTTONS */}
                <div className="flex justify-center gap-3 mb-8 md:gap-10">

                    {Object.entries(BILL_TYPES).map(([key, type]) => {
                        const isActive = activeType === key;

                        return (
                            <button
                                key={key}
                                onClick={() => {
                                    setActiveType(key);
                                }}
                                className={`
                                    px-4 py-2 md:px-6 md:py-4 rounded-lg
                                    text-sm md:text-base
                                    font-bold
                                    border
                                    transition-all duration-300
                                    ${isActive
                                        ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-200 scale-105'
                                        : 'bg-white text-slate-600 border-purple-100 hover:border-purple-300 hover:text-purple-600 hover:shadow-md'
                                    }
                                `}
                            >
                                {type.label}
                            </button>
                        );
                    })}

                </div>


                {/* BILLS */}
                <div
                    className={`
                        grid
                        ${activeBills.length === 1
                            ? 'grid-cols-1 max-w-2xl mx-auto'
                            : 'grid-cols-1 lg:grid-cols-2'
                        }
                        gap-12 lg:gap-16
                        items-start
                    `}
                >

                    {activeBills.map((bill) => {

                        return (
                            <div
                                key={bill.id}
                                className="group relative"
                            >

                                {/* Bill */}
                                <div
                                    className={`relative w-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-out`}
                                >
                                    <img
                                        src={bill.image}
                                        alt={bill.title}
                                        className={`block w-auto max-w-full object-contain transition-all duration-500 ease-out drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] ${activeType === 'thermal' ? 'max-h-[650px] max-w-[420px]' : 'max-h-[520px] max-w-[88%] sm:max-h-[580px] sm:max-w-[90%] lg:max-h-[680px] lg:max-w-[620px]'}`}
                                    />
                                </div>


                                {/* Description */}
                                <div className="mt-4 text-center lg:text-left">

                                    <h3 className="text-xl md:text-2xl font-extrabold text-[#00171f] transition-colors duration-300 group-hover:text-purple-600">
                                        {bill.title}
                                    </h3>

                                    <p className="mt-3 max-w-xl text-sm md:text-base leading-relaxed text-slate-500">
                                        {bill.description}
                                    </p>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default BillFormatsSection;