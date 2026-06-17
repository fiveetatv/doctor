"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ChevronDown,
  AlertTriangle,
  Train,
  ParkingCircle,
  Accessibility,
  ArrowRight,
  Video
} from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const faqList = [
    {
      question: "Do you accept health insurance?",
      answer: "Yes, Doctor partner clinics accept most major health insurance plans. Please contact our support team with your policy provider details to verify coverage details.",
    },
    {
      question: "How can I reschedule or cancel my appointment?",
      answer: "You can reschedule or cancel an appointment up to 24 hours in advance. Log into your live Health Portal or call our reception desk directly.",
    },
    {
      question: "What are your telehealth service hours?",
      answer: "Our virtual telehealth team is available 24/7. Standard specialist visits are scheduled between 8:00 AM and 8:00 PM in your local time zone.",
    },
    {
      question: "Do I need a referral to see a specialist?",
      answer: "Depending on your insurance provider, you may need a primary care physician referral. However, our board-certified cardiologists and neurologists accept direct consult bookings.",
    },
  ];

  const contactInfo = [
    {
      title: "Clinic Location",
      details: ["1280 W Georgia St,", "Vancouver, BC V6E 4A2, Canada"],
      icon: <MapPin className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors" />,
    },
    {
      title: "Phone Support",
      details: ["Main Line: +1 (604) 555-0199", "Telehealth Line: +1 (604) 555-0244"],
      icon: <Phone className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors" />,
    },
    {
      title: "Email Address",
      details: ["General Support: care@doctor.com", "Clinic Directors: board@doctor.com"],
      icon: <Mail className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors" />,
    },
    {
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 8:00 PM", "Sat - Sun: 9:00 AM - 5:00 PM"],
      icon: <Clock className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors" />,
    },
  ];

  const accessGuides = [
    {
      title: "Transit Access",
      desc: "Located 5 minutes off the Burrard and Vancouver City Centre SkyTrain stations. Multiple transit bus routes stop directly in front of our main building entrance.",
      icon: <Train className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Visitor Parking",
      desc: "Secure underground parking is available within the Georgia Street parkade complex. Parking validation tickets are provided at reception for all visits exceeding 1 hour.",
      icon: <ParkingCircle className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Building Accessibility",
      desc: "Our medical clinic is fully wheelchair-accessible. High-speed elevators are situated in the central ground floor lobby, and support staff is stationed to assist you.",
      icon: <Accessibility className="w-5 h-5 text-violet-600" />
    }
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#f8f9fc] py-20 lg:py-28 border-b border-slate-100/60 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[250px] rounded-full bg-violet-100/30 blur-3xl -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 uppercase tracking-widest bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100/50">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-violet-300">/</span>
            <span className="text-slate-500 font-medium">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-955 tracking-tight leading-tight max-w-4xl">
            Get In <span className="text-gradient-purple">Touch</span> With Doctor
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl font-normal mt-2">
            Have questions about clinical scheduling, medical diagnostics, or insurance claims? Reach out to our coordinators.
          </p>
        </motion.div>
      </section>

      {/* 2. EMERGENCY NOTICE (New Section) */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-rose-100 bg-rose-50/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-rose-950 font-bold text-base tracking-tight">For Life-Threatening Medical Emergencies</h3>
              <p className="text-rose-700/80 text-sm mt-1 max-w-3xl leading-relaxed">
                If you are experiencing chest pain, severe shortness of breath, sudden numbness, or a medical crisis, please call <strong>911</strong> immediately or proceed to the nearest emergency room. Our clinics are for scheduled consultation only.
              </p>
            </div>
          </div>
          <a
            href="tel:911"
            className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-md hover:shadow-rose-100 transition-all flex-shrink-0"
          >
            Call 911 Now
          </a>
        </motion.div>
      </section>

      {/* 3. CONTACT SPLIT LAYOUT */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Form - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100/80 shadow-[0_12px_45px_-12px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Send a consultation message</h2>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-100 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="font-bold">Message sent successfully!</span>
                </div>
                <p className="text-sm">We will review your inquiry and one of our clinical coordinators will contact you in under 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="self-start text-xs font-bold text-violet-600 hover:text-violet-700 underline mt-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="px-5 py-3.5 rounded-full bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:bg-white transition-all text-sm font-semibold"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="px-5 py-3.5 rounded-full bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:bg-white transition-all text-sm font-semibold"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (604) 555-0199"
                      className="px-5 py-3.5 rounded-full bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:bg-white transition-all text-sm font-semibold"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Consultation query"
                      className="px-5 py-3.5 rounded-full bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:bg-white transition-all text-sm font-semibold"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Type details about your symptoms or scheduling requirements..."
                    className="px-5 py-4 rounded-3xl bg-slate-50 border border-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:bg-white transition-all text-sm font-semibold resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="py-3.5 px-8 rounded-full bg-gradient-to-r from-violet-600 to-[#5b64f6] text-white font-bold text-sm transition-all duration-300 shadow-md shadow-violet-200/50 self-start disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Cards - Right */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div 
                variants={itemVariants}
                key={info.title} 
                className="flex gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_-12px_rgba(109,40,217,0.06)] hover:border-violet-100 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 tracking-tight group-hover:text-violet-600 transition-colors mb-2">
                    {info.title}
                  </h3>
                  <div className="flex flex-col gap-1 text-sm text-slate-500 font-semibold">
                    {info.details.map((d, i) => (
                      <p key={i}>{d}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CLINIC LOCATION GUIDE (New Section) */}
      <section className="relative bg-[#f8f9fc]/50 py-24 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Directions"
            title="Clinic Access & Transit Guide"
            subtitle="Details to help physical visitors navigate building parking and public transportation lines."
            className="mb-16"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {accessGuides.map((guide, idx) => (
              <motion.div
                variants={itemVariants}
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                  {guide.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{guide.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{guide.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION SECTION */}
      <section className="relative py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="FAQ"
            title="Frequently asked questions"
            subtitle="Get answers to general clinical, booking, and medical health insurance questions."
            className="mb-16"
          />

          <div className="flex flex-col gap-4">
            {faqList.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:border-violet-200 transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-slate-900 text-sm sm:text-base hover:text-violet-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-violet-600" : ""
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-slate-50"
                      >
                        <p className="px-6 py-5 text-sm text-slate-500 leading-relaxed bg-slate-50/50">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TELEHEALTH PROMO QUICK-START (New Section) */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] bg-gradient-to-r from-violet-600 to-indigo-600 py-16 px-8 sm:px-16 text-center text-white overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Short on time? Talk to Dr. Dash virtually!</h3>
            <p className="text-violet-100 text-sm sm:text-base leading-relaxed">
              Skip the transit and parking. Start a secure, HIPAA-compliant virtual consultation session via our Health Portal in under 15 minutes.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold shadow-md transition-all group"
            >
              <span>Start Virtual Visit</span>
              <ArrowRight className="w-4 h-4 text-slate-900 transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
