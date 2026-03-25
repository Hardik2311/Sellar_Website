import React, { useState } from 'react';

// Define keyframes for the image slide animation locally or in tailwind.config
const animationStyle = `
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const AppShowCase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: "📊", title: "Dashboard", img: "/dashboard.png" },
    { icon: "📦", title: "Transactions", img: "/Transaction.png" },
    { icon: "📄", title: "Sales Voucher", img: "/Final.png" },
    { icon: "👥", title: "Reports", img: "/Reports.png" }
  ];

  return (
    <section className="relative py-10 px-5 bg-[radial-gradient(circle_at_0%_0%,#0f172a_0%,#020617_100%)]] overflow-hidden font-sans" id="posi">
      {/* <style>{animationStyle}</style> */}
      
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          {/* "POSI" */}
          <div className="flex flex-col items-center mb-2">
            <h1 className="text-6xl md:text-8 font-[1000] text-slate-900 tracking-tighter mb-0 leading-none">
                POS<span className="text-[#007EA7]">I</span>
            </h1>
            <div className="h-1.5 w-12 bg-[#007EA7] rounded-full mt-1"></div>
          </div>

          <span className="inline-block px-4 py-1.5 bg-slate-200 text-[#007EA7] rounded-full text-[11px] font-extrabold tracking-[2px] mb-4 mt-4">
            ALL-IN-ONE POS
          </span>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 leading-[1.1]">
            Business Management <br /> 
            <span className="text-[#007EA7]">Simplified</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Manage Billing, Inventory, Customers, Payments, and Reports seamlessly from a single Dashboard.
          </p>
        </div>

        {/* --- DISPLAY CONTAINER --- */}
        <div className="flex flex-row justify-between items-center gap-3 md:grid md:grid-cols-2 md:gap-16">
          
          {/* --- LEFT: IPHONE FRAME --- */}
          <div className="flex justify-center md:justify-end w-[62%] md:w-full">
            <div className="relative bg-black border-[8px] md:border-[12px] border-slate-800 rounded-[35px] md:rounded-[45px] shadow-2xl overflow-hidden 
                            w-[215px] h-[440px] 
                            xs:w-[180px] xs:h-[370px] 
                            md:w-[280px] md:h-[570px]">
              
              <div className="w-full h-full bg-white rounded-[26px] md:rounded-[33px] overflow-hidden relative">
                {/* Image Wrapper with Animation */}
                <div key={activeFeature} className="w-full h-full animate-[slideIn_0.4s_ease-out]">
                  <img 
                    src={features[activeFeature].img} 
                    alt={features[activeFeature].title} 
                    className="w-full h-full object-fill md:object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: INTERACTIVE BUTTONS --- */}
          <div className="flex flex-col gap-5 md:gap-4 w-[35%] md:w-full items-center md:items-stretch">
            {features.map((f, i) => (
              <button 
                key={i} 
                onClick={() => setActiveFeature(i)}
                className={`
                  group transition-all duration-300 cursor-pointer
                  flex flex-col items-center gap-1.5 bg-transparent border-0 p-0 w-full
                  md:flex-row md:gap-4 md:p-5 md:bg-white md:border md:border-slate-200 md:rounded-2xl md:text-left
                  ${activeFeature === i 
                    ? 'md:border-[#007EA7] md:shadow-[0_10px_25px_rgba(0,126,167,0.1)] md:translate-x-2' 
                    : ''}
                `}
              >
                
                {/* ICON BOX */}
                <div className={`
                  flex items-center justify-center shrink-0 transition-colors duration-300
                  w-[52px] h-[52px] xs:w-[45px] xs:h-[45px] text-xl rounded-sm border-2
                  ${activeFeature === i 
                    ? 'bg-sky-50 border-[#007EA7] text-[#007EA7]' 
                    : 'bg-white border-slate-200 text-slate-900'}
                  md:w-[55px] md:h-[55px] md:text-2xl md:rounded-2xl md:border-0
                  md:bg-slate-50 md:text-slate-900
                  ${activeFeature === i ? 'md:bg-[#007EA7] md:text-white' : ''}
                `}>
                  {f.icon}
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col">
                  <h4 className="m-0 text-[10px] md:text-lg font-extrabold md:font-bold text-slate-900 whitespace-nowrap md:whitespace-normal">
                    {f.title}
                  </h4>
                  <p className="hidden md:block m-0 mt-1 text-xs md:text-[13px] text-slate-500">
                    One-tap {f.title.toLowerCase()} control
                  </p>
                </div>

              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowCase;