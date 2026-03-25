import React, { useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="mt-14 bg-white text-slate-900 min-h-screen px-6 py-16 font-sans">
                <div className="max-w-3xl mx-auto">

                    <header className="border-b border-slate-100 pb-8 mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-500 font-medium">
                            Last Updated: March 2026
                        </p>
                    </header>

                    <div className="space-y-12 text-slate-700 leading-relaxed text-lg">

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                                <span className="mr-3 text-slate-300">01</span> Information We Collect
                            </h2>
                            <p>
                                We collect information that is necessary to provide, operate, and improve our SaaS platform. This may include personal details such as
                                <span className="text-black font-medium"> your name, email address, phone number, and business information</span>
                                when you register or use our services.
                            </p>
                            <p className="mt-3">
                                Additionally, we may collect usage data such as login activity, device information, browser type, IP address, and interactions within the platform
                                to better understand user behavior and enhance overall performance.
                            </p>
                            <p className="mt-3">
                                We only collect data that is relevant, limited, and required to deliver a smooth and secure user experience.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                                <span className="mr-3 text-slate-300">02</span> How We Use Information
                            </h2>
                            <p>
                                The information we collect is used to deliver and maintain our services efficiently. This includes account management, processing transactions,
                                generating invoices, and enabling key features of the platform.
                            </p>
                            <p className="mt-3">
                                We may also use your data to personalize your experience, provide customer support, send important service-related updates, and improve our platform
                                through analytics and performance monitoring.
                            </p>
                            <p className="mt-3">
                                We do not use your personal data for any unauthorized or unrelated purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                                <span className="mr-3 text-slate-300">03</span> Data Sharing
                            </h2>
                            <p>
                                We value your trust and <span className="text-black font-medium">do not sell, rent, or trade your personal data</span> to third parties.
                            </p>
                            <p className="mt-3">
                                Your data may only be shared with trusted third-party service providers such as payment gateways, cloud storage providers, or analytics tools
                                that help us operate our services effectively.
                            </p>
                            <p className="mt-3">
                                These partners are contractually obligated to keep your information secure and use it only for the intended purpose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                                <span className="mr-3 text-slate-300">04</span> Cookies & Tracking Technologies
                            </h2>
                            <p>
                                We use cookies and similar tracking technologies to enhance your browsing experience, remember user preferences, and improve platform performance.
                            </p>
                            <p className="mt-3">
                                Cookies help us understand how users interact with our platform, allowing us to optimize features and deliver a more personalized experience.
                            </p>
                            <p className="mt-3">
                                You can choose to disable cookies through your browser settings; however, some features of the platform may not function properly as a result.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                                <span className="mr-3 text-slate-300">05</span> Your Rights & Data Control
                            </h2>
                            <p>
                                You have full control over your personal data. At any time, you may request access to the information we hold about you,
                                correct inaccurate details.
                            </p>
                            <p className="mt-3">
                                We are committed to ensuring transparency and providing you with the tools necessary to manage your data effectively.
                            </p>
                            <p className="mt-3">
                                For any such requests, you can contact us directly, and we will respond in a timely manner in accordance with applicable data protection laws.
                            </p>
                        </section>

                        <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h2 className="text-2xl font-bold text-black mb-4">
                                06. Contact Us
                            </h2>
                            <p className="mb-4">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, feel free to contact us anytime.
                            </p>
                            <p className="mb-4">
                                Our team is committed to resolving your queries and ensuring that your data remains secure and protected.
                            </p>
                            <Link
                                to="/"
                                state={{ scrollTo: "contact" }}
                                className="text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-800 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </section>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;