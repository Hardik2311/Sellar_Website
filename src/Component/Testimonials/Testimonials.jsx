import React, { useState } from "react";

const testimonials = [
  {
    name: "M.Vogue",
    username: "@mvogue",
    review:
      "Humne recently ye system shop me use karna start kiya. Billing ab thodi fast ho gayi hai aur kaun sa item stock me hai wo bhi easily check ho jata hai. Pehle sab alag-alag likhna padta tha, ab kaam thoda easy ho gaya.",
    img: "src/assets/testimonial.jpeg",
  },
  {
    name: "GIFTINGURU - Indirapuram",
    username: "@giftinguru_indirapuram",
    review:
      "Shop me daily ka kaam manage karne me help milti hai. Billing aur products ka record ek jagah mil jata hai. Staff ko bhi use karna jaldi samajh aa gaya.",
    img: "src/assets/TestimonialINDRA.jpg",
  },
  {
    name: "GIFTINGURU - Siddharth Vihar",
    username: "@giftinguru_siddharthvihar",
    review:
      "System simple hai aur kaafi useful laga. Ab sales dekhna aur stock check karna easy ho gaya hai. Pehle thoda confusion ho jata tha but ab sab clear rehta hai.",
    img: "src/assets/TestimonialSIDDHARTH.jpg",
  },
  {
    name: "GIFTINGURU - Shakti Khand 4",
    username: "@giftinguru_shaktikhand",
    review:
      "Humare store ke liye kaafi helpful raha. Billing karte time time bach jata hai aur pata rehta hai ki kaunsa item kitna bacha hai. Overall experience accha raha abhi tak.",
    img: "src/assets/TestimonialSHAKTI.jpg",
  },
];

const Card = ({ t }) => (
  <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 20px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column" }}>
    <div style={{ width: "100%", paddingBottom: "80%", position: "relative", overflow: "hidden" }}>
      <img src={t.img} alt={t.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
    <div style={{ padding: "20px 22px 24px", borderTop: "1px solid #f2efe9" }}>
      <p style={{ fontSize: "13.5px", color: "#666", lineHeight: 1.65,  fontStyle: "italic", margin: "0 0 14px" }}>{t.review}</p>
      <p style={{ fontSize: "13px", fontWeight: 600, color: "#222",  fontStyle: "italic", textAlign: "right", margin: 0 }}>— {t.name}</p>
    </div>
  </div>
);

const SliderControls = ({ current, total, onPrev, onNext, onDot }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 40 }}>
    <button onClick={onPrev} style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 20, color: "#666", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
    <div style={{ display: "flex", gap: 8 }}>
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} onClick={() => onDot(i)} style={{ height: 8, width: i === current ? 24 : 8, borderRadius: 4, border: "none", background: i === current ? "#333" : "#ccc", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
      ))}
    </div>
    <button onClick={onNext} style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 20, color: "#666", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
  </div>
);

export default function Testimonials() {
  const [mobileCurrent, setMobileCurrent] = useState(0);
  const [tabletCurrent, setTabletCurrent] = useState(0);
  const TABLET_VISIBLE = 2;
  const tabletTotal = testimonials.length - TABLET_VISIBLE + 1;
  const tabletVisible = testimonials.slice(tabletCurrent, tabletCurrent + TABLET_VISIBLE);

  const mobilePrev = () => setMobileCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1));
  const mobileNext = () => setMobileCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1));
  const tabletPrev = () => setTabletCurrent(c => (c === 0 ? tabletTotal - 1 : c - 1));
  const tabletNext = () => setTabletCurrent(c => (c === tabletTotal - 1 ? 0 : c + 1));

  return (
    <section style={{ padding: "40px 24px", background: "#faf9f6" }} id="testimonial">
      <style>{`
        .t-desktop { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
        .t-tablet  { display: none; }
        .t-mobile  { display: none; }
        @media (max-width: 1024px) and (min-width: 641px) {
          .t-desktop { display: none; }
          .t-tablet  { display: block; }
        }
        @media (max-width: 640px) {
          .t-desktop { display: none; }
          .t-mobile  { display: block; }
        }
      `}</style>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <p style={{ color: "#aaa", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Testimonials</p>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 400, fontStyle: "italic", color: "#1a1a1a", margin: 0 }}>Transformative Client Experiences</h2>
        </div>

        {/* Desktop: all 3 */}
        <div className="t-desktop">
          {testimonials.map(t => <Card key={t.username} t={t} />)}
        </div>

        {/* Tablet: 2 visible + controls */}
        <div className="t-tablet">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            {tabletVisible.map(t => <Card key={t.username} t={t} />)}
          </div>
          <SliderControls current={tabletCurrent} total={tabletTotal} onPrev={tabletPrev} onNext={tabletNext} onDot={setTabletCurrent} />
        </div>

        {/* Mobile: 1 card + controls */}
        <div className="t-mobile">
          <Card t={testimonials[mobileCurrent]} />
          <SliderControls current={mobileCurrent} total={testimonials.length} onPrev={mobilePrev} onNext={mobileNext} onDot={setMobileCurrent} />
        </div>
      </div>
    </section>
  );
}