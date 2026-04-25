import React, { useState } from 'react';
import { BASIC_FEATURES, CATALOGUE_FEATURES, PRO_FEATURES } from './PricingFeature';

const Pricing = () => {
    const [activeService, setActiveService] = useState('pos');

    const posFeatures = [...new Set([...BASIC_FEATURES, ...PRO_FEATURES])].map(f => ({
        name: f,
        basic: BASIC_FEATURES.includes(f),
        pro: PRO_FEATURES.includes(f)
    }));

    const bothFeatures = [
        ...new Set([
            ...PRO_FEATURES,
            ...CATALOGUE_FEATURES
        ])
    ].map(f => ({
        name: f,
        pro: true
    }));

    const catalogueFeatures = CATALOGUE_FEATURES.map(f => ({
        name: f,
        pro: true
    }));

    const currentFeatures =
        activeService === 'pos'
            ? posFeatures
            : activeService === 'catalogue'
                ? catalogueFeatures
                : bothFeatures;



    const planLabels = {
        pos: {
            basic: "POS Basic (Cal-C)",
            pro: "POS Pro"
        },
        catalogue: {
            pro: "Premium"
        },
        both: {
            pro: "Enterprise"
        }
    };

    const pricing = {
        pos: {
            basic: '999',
            pro: '2,999',
            originalBasic: '1,999',
            originalPro: '3,999',
        },
        catalogue: {
            pro: '4,999',
            originalPro: '7,999'
        },
        both: {
            pro: '7,999',
            originalPro: '14,999'
        }
    };

    return (
        <section className="py-10 px-4 md:px-6 bg-[#f8fafc]" id="pricing">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-[900] text-[#00171f] mb-4 md:mb-6 leading-tight">
                        Simple, <span className="text-[#007EA7]">Transparent</span> Pricing
                    </h2>

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
                            Enterprise-both
                        </button>
                    </div>
                </div>

                {/* Pricing Table Card */}
                <div className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
                    {/* Table Header */}
                    <div className={`grid ${(activeService === 'both' || activeService === 'catalogue')
                        ? 'grid-cols-[1.5fr_1fr] md:grid-cols-[2.2fr_1fr]'
                        : 'grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2.2fr_1fr_1fr]'
                        } bg-slate-50 border-b-2 border-slate-200 sticky top-0 z-20`}>
                        {/* Dynamic Feature Header */}
                        <div className="p-4 md:p-10 border-r border-slate-200 flex flex-col justify-center">
                            <span className="text-[12px]  font-extrabold text-slate-400 tracking-widest  mb-1">
                                Features
                            </span>
                            <h3 className="text-xl md:text-2xl font-[1000] text-[#007EA7] tracking-tight  truncate">
                                {activeService === 'pos' ? 'POSI' : 'Catalog'}
                            </h3>
                        </div>

                        {/* Basic Price Section */}
                        {activeService === 'pos' && (
                            <div className="p-4 md:p-8 text-center border-r border-slate-200 flex flex-col justify-center items-center mt-2">
                                <span className="block text-[10px] md:text-sm font-extrabold text-slate-500 tracking-wider mb-1 Pro md:mt-0">
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
                                <p className='text-sm font-thin text-slate-400 mt-1'>per year</p>
                            </div>)}

                        {/* Pro Price Section */}
                        <div className="p-4 md:p-8 text-center relative bg-blue-50/40 flex flex-col justify-center items-center">
                            {/* Best Seller Badge */}
                            <div className={`absolute top-0 left-0 right-0 text-[9px] md:text-[10px] font-black py-1  tracking-tighter md:tracking-widest ${activeService === 'both'
                                ? 'bg-yellow-500 text-white'
                                : 'bg-[#007EA7] text-white'
                                }`}>
                                Best Seller
                            </div>
                            <span className="block text-[10px] md:text-sm font-extrabold text-slate-500  tracking-wider mb-1 mt-3 md:mt-0">
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
                            <p className='text-sm font-thin text-slate-400 mt-1'>per year</p>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="max-h-[500px] md:max-h-[600px] overflow-y-auto">
                        {currentFeatures.map((f, i) => (
                            <div className={`grid ${(activeService === 'both' || activeService === 'catalogue')
                                ? 'grid-cols-[1.5fr_1fr] md:grid-cols-[2.2fr_1fr]'
                                : 'grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[2.2fr_1fr_1fr]'
                                } border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors`} key={i}>
                                <div className="p-3 md:p-6 text-[12px] md:text-[15px] font-semibold text-slate-700 border-r border-slate-100 flex items-center leading-tight">
                                    {f.name}
                                </div>
                                {activeService === 'pos' && (
                                    <div className="p-3 md:p-4 flex justify-center items-center border-r border-slate-100">
                                        {f.basic ?
                                            <span className="text-green-500 text-base md:text-xl font-bold">✔</span> :
                                            <span className="text-red-500 text-base md:text-xl">✖</span>
                                        }
                                    </div>)}
                                <div className="p-3 md:p-4 flex justify-center items-center bg-blue-50/10">
                                    {f.pro ?
                                        <span className="text-green-500 text-base md:text-xl font-bold">✔</span> :
                                        <span className="text-red-500 text-base md:text-xl">✖</span>
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