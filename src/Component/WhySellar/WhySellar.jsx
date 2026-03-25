import React from 'react';

const WhySellar = () => {
    const comparisonData = [
        { feature: "System Requirement", others: "Dedicated device", sellar: "Works on any device" },
        { feature: "Costing", others: "₹5K to ₹25K", sellar: "Starts at ₹99" },
        { feature: "Number of Users", others: "Pay extra per user", sellar: "Includes upto 20 users" },
        { feature: "Ease of use", others: "Complex Interface", sellar: "Super easy; only what you need" },
        { feature: "Order Tracking", others: "Manual updates", sellar: "Auto updates" },
        { feature: "Reporting", others: "Raw data", sellar: "Smart reports" },
        { feature: "Dashboard", others: "Non-existent or confusing", sellar: "Crisp, clear, and informative" },
        { feature: "Storage", others: "Local storage", sellar: "100% cloud-based" },
        { feature: "User by function", others: "Mostly not available", sellar: "Owner, Manager, Salesman" },
        { feature: "Data Safety", others: "Wague, Mostly locally Stored", sellar: "100% Safe With firebase Google" },
        { feature: "Settlement", others: "Manual, if at all", sellar: "100% Automatic" },
        { feature: "Customers Retargeting", others: "Complex, if at all present", sellar: "AI Automated" },
    ];

    return (
        <section
            id="why-sellar"
            className="relative py-12 px-[10px] md:py-20 md:px-5 bg-[#f1f5f9] font-sans overflow-hidden"
            style={{
                backgroundImage: `
                    radial-gradient(circle at 0% 0%, #e2e8f0 0%, transparent 50%),
                    radial-gradient(circle at 100% 100%, #dfe7f0 0%, transparent 50%)
                `
            }}
        >
            <div className="max-w-[1100px] mx-auto">

                {/* --- HEADER CONTENT --- */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-white border-2 border-[#007EA7] text-[#005a78] text-xs font-extrabold tracking-[2px] px-[18px] py-[6px] rounded-full shadow-[0_4px_12px_rgba(0,126,167,0.15)] uppercase">
                        THE COMPARISON
                    </span>

                    <h2 className="text-[1.8rem] md:text-5xl font-black text-black mt-5 leading-[1.1] tracking-[-1.5px]">
                        Why Choose <span className="text-[#007EA7]">Sellar?</span>
                    </h2>

                    <p className="mt-4 text-slate-700 text-lg font-semibold">
                        Stop settling for outdated systems. Switch to the future of retail.
                    </p>
                </div>

                {/* --- TABLE CONTAINER --- */}
                <div className="max-w-[950px] mx-auto bg-white rounded-xl shadow-[0_35px_70px_rgba(15,23,42,0.12)] overflow-hidden border border-slate-300">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="bg-slate-200 p-4 md:p-6 text-sm font-black text-slate-800 uppercase tracking-widest border-b-2 border-slate-300 text-left">
                                    Features
                                </th>
                                {/* --- RED HEADER FOR OTHERS --- */}
                                <th className="bg-red-100 p-4 md:p-6 text-sm font-black text-red-900 uppercase tracking-widest border-b-2 border-red-200 text-left">
                                    Others
                                </th>
                                {/* --- GREEN HEADER FOR SELLAR --- */}
                                <th className="bg-emerald-100 p-4 md:p-6 text-sm font-black text-emerald-900 uppercase tracking-widest border-b-2 border-emerald-200 text-left">
                                    Sellar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((item, index) => (
                                <tr key={index}>
                                    <td className="w-[38%] md:w-[30%] p-[16px_8px] md:p-3 bg-slate-50 border-b border-slate-200 text-black font-extrabold text-[0.65rem] md:text-[1.05rem]">
                                        {item.feature}
                                    </td>

                                    {/* --- RED BACKGROUND FOR OTHERS --- */}
                                    <td className="p-[18px_10px] md:p-3 border-b border-red-100 bg-red-50 text-red-900/80 font-semibold text-[0.65rem] md:text-[1.05rem]">
                                        {item.others}
                                    </td>

                                    {/* --- GREEN BACKGROUND FOR SELLAR --- */}
                                    <td className="p-[18px_10px] md:p-3 border-b border-emerald-100 bg-emerald-50 text-emerald-950 font-extrabold text-[0.65rem] md:text-[1.05rem]">
                                        {item.sellar}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default WhySellar;