import React, { useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { Link } from "react-router-dom";

const Terms = () => {

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
              Terms & Conditions
            </h1>
            <p className="text-slate-500 font-medium">
              Last Updated: March 2026
            </p>
          </header>

          <div className="space-y-12 text-slate-700 leading-relaxed text-lg">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">01</span> Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or using the Sellar platform, you acknowledge that you have read, understood, and agree to be legally bound by these Terms & Conditions.
                These Terms apply to all users including but not limited to business owners, staff members, visitors, and any third party accessing the platform.
              </p>
              <p className="mt-3">
                If you do not agree with any part of these Terms, you must immediately discontinue use of the platform. Continued use of the platform constitutes your acceptance of these Terms.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">02</span> Description of Services
              </h2>
              <p>
                Sellar is a cloud-based retail management platform designed to assist businesses in managing billing (POS), digital catalogs, customer data, inventory, analytics, and other operational workflows.
              </p>
              <p className="mt-3">
                We reserve the right to update, enhance, modify, or discontinue any feature or functionality of the platform at any time without prior notice.
                We may also introduce new services or impose limitations on certain features as part of product evolution.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">03</span> User Responsibilities
              </h2>
              <p>
                As a user of Sellar, you agree to use the platform responsibly and in compliance with all applicable laws and regulations.
              </p>
              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>You must provide accurate, complete, and up-to-date information</li>
                <li>You are responsible for maintaining proper business records and tax compliance (including GST)</li>
                <li>You must ensure that your usage does not violate any laws or third-party rights</li>
                <li>You agree not to misuse the platform for fraudulent, illegal, or unethical activities</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">04</span> Account & Security
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials, including passwords, OTPs, and login access.
              </p>
              <p className="mt-3">
                Any activity performed through your account shall be deemed to be performed by you. Sellar shall not be liable for any unauthorized access, misuse, or loss arising due to compromised account security.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">05</span> Payments, Billing & Subscriptions
              </h2>

              <p>
                Certain features of Sellar are available under paid subscription plans. By subscribing to any paid plan, you agree to pay all applicable charges, including taxes, fees, and applicable GST, in accordance with the selected plan.
              </p>

              <p className="mt-3">
                Payments are processed through secure third-party payment gateways. Sellar does not store sensitive payment information such as complete card details, CVV, or banking credentials.
              </p>

              <p className="mt-3">
                Subscription plans may be billed on a recurring basis (monthly, quarterly, or yearly), depending on the plan selected. You authorize us to charge the applicable fees automatically at the beginning of each billing cycle unless canceled before renewal.
              </p>

              <p className="mt-3">
                All payments made are generally non-refundable unless explicitly stated otherwise. In cases of failed payments, delayed payments, or chargebacks, Sellar reserves the right to suspend or restrict access to premium features until dues are cleared.
              </p>

              <p className="mt-3">
                We reserve the right to revise pricing, introduce new plans, modify billing structures, or discontinue existing plans at our sole discretion.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">06</span> Data Ownership & Usage
              </h2>
              <p>
                You retain full ownership of your business data, including but not limited to customer information, invoices, product listings, and transaction records.
              </p>
              <p className="mt-3">
                Sellar processes your data solely for providing services, improving functionality, ensuring security, and enhancing user experience.
                We may use anonymized or aggregated data for analytics and product improvements.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">07</span> Prohibited Activities
              </h2>

              <p>
                Users are strictly prohibited from engaging in activities that compromise the integrity, security, or lawful use of the Sellar platform.
              </p>

              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Attempting to hack, disrupt, or gain unauthorized access to the platform, servers, or databases</li>
                <li>Reverse engineering, copying, modifying, or exploiting the software or underlying technology</li>
                <li>Uploading or distributing viruses, malware, or any harmful code</li>
                <li>Using the platform for fraudulent, illegal, misleading, or unethical business practices</li>
                <li>Violating intellectual property rights, privacy rights, or any third-party rights</li>
                <li>Misusing customer data or engaging in unauthorized data collection or scraping</li>
              </ul>

              <p className="mt-3">
                Any violation of these restrictions may result in immediate suspension or permanent termination of your account, along with potential legal action.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">08</span> Service Availability & Reliability
              </h2>

              <p>
                Sellar strives to provide a stable, secure, and uninterrupted platform experience. However, we do not guarantee that the service will always be available, uninterrupted, timely, or error-free.
              </p>

              <p className="mt-3">
                The platform may experience downtime due to scheduled maintenance, updates, server issues, network failures, or unforeseen technical disruptions.
              </p>

              <p className="mt-3">
                We are not responsible for any loss of data, business interruptions, or financial losses resulting from system outages or service interruptions.
              </p>

              <p className="mt-3">
                Users are advised to maintain backups of critical business data and ensure contingency measures for operational continuity.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">09</span> Limitation of Liability
              </h2>

              <p>
                To the maximum extent permitted by applicable law, Sellar shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>

              <p className="mt-3">
                This includes, but is not limited to, loss of profits, revenue, business opportunities, data loss, or reputational damage arising from:
              </p>

              <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Use or inability to use the platform</li>
                <li>Errors, bugs, or inaccuracies in the system</li>
                <li>Unauthorized access to user accounts or data</li>
                <li>Third-party integrations or services</li>
              </ul>

              <p className="mt-3">
                Your use of the platform is entirely at your own risk, and you agree that Sellar’s total liability shall not exceed the amount paid by you for the service in the preceding billing period.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">10</span> Intellectual Property Rights
              </h2>

              <p>
                All content, features, designs, trademarks, logos, software, and technology associated with Sellar are the exclusive property of Sellar and are protected under applicable intellectual property laws.
              </p>

              <p className="mt-3">
                Users are granted a limited, non-exclusive, non-transferable license to use the platform solely for business purposes in accordance with these Terms.
              </p>

              <p className="mt-3">
                You may not copy, reproduce, distribute, modify, create derivative works, or exploit any part of the platform without prior written permission.
              </p>

              <p className="mt-3">
                Any unauthorized use of Sellar’s intellectual property may result in legal action.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">11</span> Termination & Suspension
              </h2>

              <p>
                Sellar reserves the right to suspend, restrict, or terminate your account at its sole discretion, with or without prior notice.
              </p>

              <p className="mt-3">
                This may occur if you violate these Terms, engage in suspicious or harmful activities, fail to make required payments, or misuse the platform in any way.
              </p>

              <p className="mt-3">
                Upon termination, your access to the platform and its features may be revoked immediately. We may also delete or restrict access to your data in accordance with applicable laws and policies.
              </p>

              <p className="mt-3">
                You may choose to terminate your account at any time by contacting support or using available account settings.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">12</span> Governing Law
              </h2>

              <p>
                These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.
              </p>

              <p className="mt-3">
                Any disputes, claims, or legal proceedings arising out of or relating to these Terms or the use of the platform shall be subject to the exclusive jurisdiction of the courts located in Ghaziabad, Uttar Pradesh.
              </p>

              <p className="mt-3">
                By using the platform, you agree to submit to the jurisdiction of such courts and waive any objections to jurisdiction or venue.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center">
                <span className="mr-3 text-slate-300">13</span> Changes to Terms
              </h2>

              <p>
                Sellar reserves the right to update, modify, or replace these Terms & Conditions at any time to reflect changes in legal requirements, business practices, or platform features.
              </p>

              <p className="mt-3">
                Any changes will be posted on this page with an updated "Last Updated" date. Significant changes may also be communicated through notifications or email.
              </p>

              <p className="mt-3">
                Continued use of the platform after such updates constitutes your acceptance of the revised Terms.
              </p>

              <p className="mt-3">
                We encourage users to review these Terms periodically to stay informed about their rights and obligations.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-black mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                For any questions regarding these Terms:
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

export default Terms;