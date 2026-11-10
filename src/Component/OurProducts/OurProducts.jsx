import React, { useState } from "react";
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
  ChevronDown,
  CalendarPlus,
  Users,
  QrCode,
} from "lucide-react";

const PRODUCTS = [
  {
    id: "pos",
    number: "01",
    name: "Sellar POS",
    shortName: "Point of Sale",
    tagline: "Everything you need to run your counter.",
    description:
      "A complete billing and business management solution for retailers. Create invoices, manage purchases, generate barcodes, track sales, and keep an eye on your business with powerful reports.",
    color: "#2563eb",
    colorSoft: "#dbeafe",
    icon: ShoppingCart,
    image: "/POS.png",
    features: [
      {
        icon: FileText,
        title: "Smart Invoicing",
      },
      {
        icon: Package,
        title: "Purchase Management",
      },
      {
        icon: ScanBarcode,
        title: "Barcode Generation",
      },
      {
        icon: BarChart3,
        title: "Business Reports",
      },
    ],
  },

  {
    id: "catalogue",
    number: "02",
    name: "Sellar Catalogue",
    shortName: "Order Management",
    tagline: "Turn your catalogue into your digital order counter.",
    description:
      "Share your product catalogue directly with customers, receive orders digitally, and stay ahead with upcoming order visibility. Manage your orders and understand your business with detailed reports.",
    color: "#f97316",
    colorSoft: "#ffedd5",
    icon: BookOpen,
    image: "/CATA.png",
    features: [
      {
        icon: Share2,
        title: "Share Your Catalogue",
      },
      {
        icon: ClipboardList,
        title: "Easy Order Management",
      },
      {
        icon: TrendingUp,
        title: "Upcoming Orders",
      },
      {
        icon: BarChart3,
        title: "Profit & Loss Reports",
      },
    ],
  },

  {
    id: "calci",
    number: "03",
    name: "Sellar Calci",
    shortName: "Fast Billing Calculator",
    tagline: "Calculate. Bill. Done.",
    description:
      "A lightning-fast billing calculator built for quick counter transactions. Keep adding amounts as you bill and turn the calculation directly into an invoice without slowing down the customer.",
    color: "#7c3aed",
    colorSoft: "#ede9fe",
    icon: Calculator,
    image: "/CALCI.png",
    features: [
      {
        icon: Calculator,
        title: "Fast Calculations",
      },
      {
        icon: FileText,
        title: "Instant Invoice",
      },
      {
        icon: WalletCards,
        title: "Transaction History",
      },
      {
        icon: CreditCard,
        title: "Payment Tracking",
      },
    ],
  },

  {
    id: "events",
    number: "04",
    name: "OutSold",
    shortName: "Event Management",
    tagline: "Everything you need to run your events.",
    description:
      "A complete event management platform to create events, manage attendees, collect payments, track ticket sales, and monitor your event performance in real time.",
    color: "#059669",
    colorSoft: "#d1fae5",
    icon: CalendarDays,
    image: "/Attendees App Feature Overview.png",
    features: [
      {
        icon: CalendarPlus,
        title: "Easy Event Creation",
      },
      {
        icon: Users,
        title: "Attendee Management",
      },
      {
        icon: QrCode,
        title: "Direct UPI Payments",
      },
      {
        icon: BarChart3,
        title: "Real-time Analytics",
      },
    ],
  },
];

const ProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState("pos");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const product = PRODUCTS.find((item) => item.id === activeProduct);

  return (
    <section
      id="products"
      className="relative isolate w-full overflow-hidden bg-[#080D17] py-10 text-white"
    >
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[18%] h-[460px] w-[460px] rounded-full bg-emerald-500/[0.08] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-[30%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.08] blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 shadow-lg shadow-black/10 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38D6B0] shadow-[0_0_12px_rgba(56,214,176,.8)]" />
            The Sellar Ecosystem
          </span>

          <h2 className="mt-5 text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Everything Your Business Needs.
            <span className="mt-1 block bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              One Powerful Ecosystem.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
            Smart tools for billing, digital orders, fast transactions and
            business growth - all working together in one place.
          </p>
        </div>

        {/* Product selector */}
        <div className="mb-7 hidden sm:mb-9 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
          {PRODUCTS.map((item) => {
            const Icon = item.icon;
            const isSelected = activeProduct === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveProduct(item.id);
                  setIsMobileOpen(true);
                }}
                className={`group flex min-h-[54px] items-center gap-2.5 rounded-xl border px-3 py-3 text-left text-xs font-bold transition-all duration-300 sm:min-h-0 sm:justify-center sm:px-5 sm:text-sm ${
                  isSelected
                    ? "border-white/20 bg-white/[0.10] text-white shadow-[0_8px_30px_rgba(0,0,0,.22)]"
                    : "border-white/[0.08] bg-white/[0.025] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                }`}
                style={
                  isSelected
                    ? {
                        boxShadow: `inset 0 0 0 1px ${item.color}35, 0 8px 30px rgba(0,0,0,.22)`,
                      }
                    : undefined
                }
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border"
                  style={{
                    color: item.color,
                    backgroundColor: `${item.color}16`,
                    borderColor: `${item.color}35`,
                  }}
                >
                  <Icon size={17} />
                </span>

                <span className="leading-tight">{item.shortName}</span>

                <ChevronDown
                  size={15}
                  className={`ml-auto shrink-0 text-slate-500 transition-transform sm:hidden ${
                    isSelected && isMobileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* =====================================================
            DESKTOP PRODUCT SHOWCASE
            Desktop layout remains same
        ====================================================== */}
        <div
          className="relative hidden overflow-hidden rounded-2xl border border-white/[0.09] bg-[radial-gradient(ellipse_at_18%_48%,rgba(255,255,255,0.025),transparent_48%),linear-gradient(135deg,#0C1320_0%,#0D1421_52%,#0A111D_100%)] shadow-[0_30px_100px_rgba(0,0,0,.34)] md:block sm:rounded-[28px] lg:rounded-[32px]"
          style={{ "--product-accent": product.color }}
        >
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
            }}
          />

          <div
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-[0.12] blur-[90px] sm:h-96 sm:w-96"
            style={{ backgroundColor: product.color }}
          />

          <div className="grid items-center gap-3 p-5 sm:p-8 md:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:p-12 xl:p-14">
            {/* Product image */}
            <div className="relative isolate flex min-h-[230px] items-center justify-center sm:min-h-[320px] md:min-h-[390px] lg:min-h-[470px]">
              {/* Soft product-colour light */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[58%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[65px] sm:blur-[90px]"
                style={{ backgroundColor: product.color, opacity: 0.16 }}
              />

              <div
                className="relative z-10 flex w-full items-center justify-center"
                style={{
                  mixBlendMode: "screen",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 78% 76% at 50% 48%, #000 48%, rgba(0,0,0,.92) 66%, rgba(0,0,0,.45) 83%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 78% 76% at 50% 48%, #000 48%, rgba(0,0,0,.92) 66%, rgba(0,0,0,.45) 83%, transparent 100%)",
                }}
              >
                <img
                  key={product.image}
                  src={product.image}
                  alt={`${product.name} product preview`}
                  loading="lazy"
                  className="max-h-[280px] w-full max-w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.015] sm:max-h-[400px] md:max-h-[480px] lg:max-h-[560px]"
                />
              </div>
            </div>

            {/* Product details */}
            <div className="relative z-10 pb-1 pt-2 sm:pt-4 lg:py-8">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="rounded-md border px-2.5 py-1.5 text-[10px] font-extrabold tracking-[0.18em] sm:text-xs"
                  style={{
                    color: product.color,
                    backgroundColor: `${product.color}12`,
                    borderColor: `${product.color}35`,
                  }}
                >
                  PRODUCT {product.number}
                </span>

                <span className="h-px w-8 bg-white/15" />

                <span className="text-xs font-medium text-slate-500 sm:text-sm">
                  {product.shortName}
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
                {product.name}

                {product.id === "events" && (
                  <a
                    href="https://outsold.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500 px-4 py-2 align-middle text-xs font-black text-white shadow-[0_4px_15px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_6px_25px_rgba(16,185,129,0.45)] active:translate-y-0"
                  >
                    OutSold
                  </a>
                )}
              </h3>

              <p
                className="mt-3 text-base font-semibold sm:text-lg"
                style={{ color: product.color }}
              >
                {product.tagline}
              </p>

              {product.description && (
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
                  {product.description}
                </p>
              )}

              {/* Feature cards */}
              {product.features.length > 0 && (
                <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-3.5">
                  {product.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="group flex min-h-[72px] items-center gap-3 rounded-xl border border-white/[0.075] bg-white/[0.035] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.065] sm:min-h-[82px] sm:gap-3.5 sm:p-4"
                      >
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
                          style={{
                            color: product.color,
                            backgroundColor: `${product.color}13`,
                            borderColor: `${product.color}30`,
                          }}
                        >
                          <FeatureIcon size={19} strokeWidth={1.8} />
                        </span>

                        <div className="min-w-0">
                          <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                            FEATURE 0{index + 1}
                          </span>

                          <h4 className="text-xs font-bold leading-snug text-slate-200 sm:text-sm">
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE PRODUCT SHOWCASE
            All products one below another
        ====================================================== */}
        <div className="space-y-6 md:hidden">
          {PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[radial-gradient(ellipse_at_18%_48%,rgba(255,255,255,0.025),transparent_48%),linear-gradient(135deg,#0C1320_0%,#0D1421_52%,#0A111D_100%)] shadow-[0_30px_100px_rgba(0,0,0,.34)]"
            >
              {/* Product Image */}
              <div className="relative flex min-h-[230px] items-center justify-center p-4">
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[58%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[65px]"
                  style={{
                    backgroundColor: item.color,
                    opacity: 0.16,
                  }}
                />

                <div
                  className="relative z-10 flex w-full items-center justify-center"
                  style={{
                    mixBlendMode: "screen",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 78% 76% at 50% 48%, #000 48%, rgba(0,0,0,.92) 66%, rgba(0,0,0,.45) 83%, transparent 100%)",
                    maskImage:
                      "radial-gradient(ellipse 78% 76% at 50% 48%, #000 48%, rgba(0,0,0,.92) 66%, rgba(0,0,0,.45) 83%, transparent 100%)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={`${item.name} product preview`}
                    loading="lazy"
                    className="max-h-[280px] w-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Product details */}
              <div className="relative z-10 p-5">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="rounded-md border px-2.5 py-1.5 text-[10px] font-extrabold tracking-[0.18em]"
                    style={{
                      color: item.color,
                      backgroundColor: `${item.color}12`,
                      borderColor: `${item.color}35`,
                    }}
                  >
                    PRODUCT {item.number}
                  </span>

                  <span className="h-px w-8 bg-white/15" />

                  <span className="text-xs font-medium text-slate-500">
                    {item.shortName}
                  </span>
                </div>

                <h3 className="text-3xl font-black leading-tight tracking-tight text-white">
                  {item.name}

                  {item.id === "events" && (
                    <a
                      href="https://outsold.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500 px-4 py-2 align-middle text-xs font-black text-white shadow-[0_4px_15px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_6px_25px_rgba(16,185,129,0.45)] active:translate-y-0"
                    >
                      OutSold
                    </a>
                  )}
                </h3>
                <p
                  className="mt-3 text-base font-semibold"
                  style={{ color: item.color }}
                >
                  {item.tagline}
                </p>

                {item.description && (
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                )}

                {/* Mobile features: 2 columns x 2 rows */}
                {item.features.length > 0 && (
                  <div className="mt-7 grid grid-cols-2 gap-2.5">
                    {item.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;

                      return (
                        <div
                          key={feature.title}
                          className="group flex min-h-[88px] flex-col justify-center gap-2 rounded-xl border border-white/[0.075] bg-white/[0.035] p-3 transition-all duration-300"
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
                            style={{
                              color: item.color,
                              backgroundColor: `${item.color}13`,
                              borderColor: `${item.color}30`,
                            }}
                          >
                            <FeatureIcon size={17} strokeWidth={1.8} />
                          </span>

                          <div className="min-w-0">
                            <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.12em] text-slate-600">
                              FEATURE 0{index + 1}
                            </span>

                            <h4 className="text-[11px] font-bold leading-snug text-slate-200">
                              {feature.title}
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[11px] font-medium tracking-wide text-slate-600 sm:mt-6 sm:text-xs">
          One connected ecosystem. Simple tools. Better business.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
