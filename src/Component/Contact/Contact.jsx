import React, { useState, useEffect } from 'react';
import { db } from '../../Lib/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
    // 1. State for form data
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        message: ''
    });

    // 2. State for Errors
    const [errors, setErrors] = useState({});

    // 3. State for loading status
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- VALIDATION LOGIC ---
    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        // Email Regex Check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        // Phone Length Check (Must be 10 digits)
        if (!formData.phone) {
            tempErrors.phone = "Phone number is required";
            isValid = false;
        } else if (formData.phone.length !== 10) {
            tempErrors.phone = "Phone number must be exactly 10 digits";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // --- PHONE NUMBER RESTRICTION ---
        if (name === 'phone') {
            // Only allow numbers (RegEx to remove non-digits)
            const numericValue = value.replace(/\D/g, '');

            // Stop updating if length > 10
            if (numericValue.length <= 10) {
                setFormData({ ...formData, [name]: numericValue });

                // Auto-clear error if length becomes 10
                if (numericValue.length === 10) {
                    setErrors({ ...errors, phone: '' });
                }
            }
            return; // Stop here so we don't run the standard setFormData below
        }

        setFormData({ ...formData, [name]: value });

        // Auto-clear email error while typing
        if (name === 'email') {
            setErrors({ ...errors, email: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Run Validation before sending
        if (!validate())
            return; // Stop if validation fails


        setIsSubmitting(true);

        try {
            const docRef = await addDoc(collection(db, "contacts"), {
                ...formData,
                submittedAt: new Date()
            });

            console.log("Form Data Sent:", docRef.id);
            alert("Message Sent Successfully!");

            // Reset form
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                city: '',
                message: ''
            });
            setErrors({}); // Clear errors

        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Something went wrong. Please check your internet connection.");
        } finally {
            console.log("finally executed");

            setIsSubmitting(false);
        }
    };

    return (
        <section
            id='contact'
            className="relative py-12 px-5 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden font-sans"
        >
            {/* Background Decoration */}
            <div className="absolute -bottom-[10%] -left-[5%] w-[300px] h-[300px] bg-[#007EA7]/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center">

                {/* --- LEFT SIDE: INFO --- */}
                <div className="px-2 md:px-0">
                    <span className="inline-block px-4 py-1.5 bg-sky-100 text-[#007EA7] rounded-full text-xs font-extrabold tracking-[1.5px] mb-4 border border-[#007EA7]/10">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#00171f] leading-tight mb-5 tracking-tight">
                        Let's Talk <span className="text-[#007EA7]">Business</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Have questions about Sellar? Our team is here to help you scale your retail business.
                    </p>
                </div>

                {/* --- RIGHT SIDE: FORM CARD --- */}
                <div className="bg-white p-4 md:p-10 mx-auto rounded-sm border border-[#007EA7]/10 shadow-[0_25px_50px_-12px_rgba(0,52,89,0.08)]">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>

                        {/* Row 1: Name & Phone */}
                        <div className="grid grid-cols-2 gap-4 md:gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#00171f] ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full p-2 md:p-4 rounded-sm border-[1.5px] border-slate-300 bg-slate-50 text-slate-900 text-[0.95rem] transition-all duration-300 focus:border-[#007EA7] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#007EA7]/10"
                                />
                            </div>

                            {/* PHONE INPUT */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#00171f] ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91"
                                    required
                                    className={`w-full p-2 md:p-4 rounded-sm border-[1.5px] bg-slate-50 text-slate-900 text-[0.95rem] transition-all duration-300 focus:bg-white focus:outline-none focus:ring-4 
                                    ${errors.phone ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-slate-300 focus:border-[#007EA7] focus:ring-[#007EA7]/10'}`}
                                />
                                {/* Error Message */}
                                {errors.phone && <span className="text-red-500 text-xs font-semibold ml-1">{errors.phone}</span>}
                            </div>
                        </div>

                        {/* Row 2: Email & City */}
                        <div className="grid grid-cols-2 gap-4 md:gap-5">

                            {/* EMAIL INPUT */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#00171f] ml-1">Email ID</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    required
                                    className={`w-full p-2 md:p-4 rounded-sm border-[1.5px] bg-slate-50 text-slate-900 text-[0.95rem] transition-all duration-300 focus:bg-white focus:outline-none focus:ring-4 
                                    ${errors.email ? 'border-red-500 focus:ring-red-100 focus:border-red-500' : 'border-slate-300 focus:border-[#007EA7] focus:ring-[#007EA7]/10'}`}
                                />
                                {/* Error Message */}
                                {errors.email && <span className="text-red-500 text-xs font-semibold ml-1">{errors.email}</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#00171f] ml-1">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Your City"
                                    required
                                    className="w-full p-2 md:p-4 rounded-sm border-[1.5px] border-slate-300 bg-slate-50 text-slate-900 text-[0.95rem] transition-all duration-300 focus:border-[#007EA7] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#007EA7]/10"
                                />
                            </div>
                        </div>

                        {/* Message Box */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#00171f] ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help?"
                                rows="4"
                                required
                                className="w-full p-2 md:p-4 rounded-sm border-[1.5px] border-slate-300 bg-slate-50 text-slate-900 text-[0.95rem] transition-all duration-300 focus:border-[#007EA7] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#007EA7]/10 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-2 bg-[#007EA7] hover:bg-[#003459] text-white p-4 rounded-sm font-extrabold text-base uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#003459]/20 disabled:opacity-70 disabled:cursor-not-allowed mb-3"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;