"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Activity,
  Baby,
  Brain,
  ShieldAlert,
  FlaskConical,
  Video,
  Leaf,
  ArrowRight,
  Quote,
  Award,
  Heart,
  ChevronDown,
  Clock,
  ShieldCheck
} from "lucide-react";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";

export default function Services() {
  const [activeFaq, setActiveFaq] = useState(null);

  const servicesList = [
    {
      title: "General Checkup",
      description: "Comprehensive medical assessments, vital sign logging, physical exams, and health monitoring.",
      icon: <Stethoscope className="w-7 h-7" />,
    },
    {
      title: "Cardiology & Surgery",
      description: "Heart monitoring, ECG, recovery therapies, and advanced surgical procedures for structural heart safety.",
      icon: <HeartPulse className="w-7 h-7" />,
    },
    {
      title: "Neurology & Brain Health",
      description: "Rigorous diagnostic testing for cerebral wellness, neurological exams, and motor nerve treatment.",
      icon: <Activity className="w-7 h-7" />,
    },
    {
      title: "Pediatric Care",
      description: "Dedicated clinical treatments for children, including immunizations, wellness reviews, and school physicals.",
      icon: <Baby className="w-7 h-7" />,
    },
    {
      title: "Mental Health Services",
      description: "Psychological consultations, stress-relief planning, psychiatric support, and talk therapy for wellness.",
      icon: <Brain className="w-7 h-7" />,
    },
    {
      title: "Emergency Care",
      description: "24/7 immediate clinical response, injury stabilization, acute care, and critical trauma management.",
      icon: <ShieldAlert className="w-7 h-7" />,
    },
    {
      title: "Diagnostic Services",
      description: "Advanced lab work, imaging reports, MRI/CT scans, and biomarker analytics for accurate diagnosis.",
      icon: <FlaskConical className="w-7 h-7" />,
    },
    {
      title: "Telehealth Services",
      description: "Instant video consultations, prescription refills, and virtual evaluations from the comfort of home.",
      icon: <Video className="w-7 h-7" />,
    },
    {
      title: "Holistic & Future Care",
      description: "Preventative nutrition plans, lifestyle audits, herbal therapy options, and longevity-focused health tracks.",
      icon: <Leaf className="w-7 h-7" />,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Schedule Slot",
      description: "Book an appointment online, choosing either a local clinic location or a virtual video session.",
    },
    {
      step: "02",
      title: "Consultation",
      description: "Discuss parameters, symptoms, and medical background with a certified clinical physician.",
    },
    {
      step: "03",
      title: "Tailored Plan",
      description: "Receive a personalized medical recovery track, active prescriptions, and follow-up guidance.",
    },
  ];

  const testimonials = [
    {
      text: "The telehealth service at Doctor is incredible. I spoke to Dr. Kudak in under 15 minutes, and she immediately arranged my prescription. Highly professional!",
      author: "Sarah Jenkins",
      title: "Patient (General Clinic)",
    },
    {
      text: "Doctor's pediatric team made my daughter feel completely at ease during her immunization checkup. The facility is extremely clean and welcoming.",
      author: "Michael Chen",
      title: "Father of 6yo Patient",
    },
    {
      text: "My recovery from heart surgery was guided closely by Dr. Martin. The daily diagnostics dashboard kept my heart rate and recovery metrics completely clear.",
      author: "Arthur Pendelton",
      title: "Cardiac Patient",
    },
  ];

  const faqList = [
    {
      question: "How do I schedule an online telehealth session?",
      answer: "You can book an online telehealth session directly from our booking page. Simply select 'Virtual Consult', choose a time slot, and you will receive a secure video consultation link via email.",
    },
    {
      question: "Are virtual prescription refills available?",
      answer: "Yes, during your telehealth session, our doctors can write or renew active prescriptions and send them directly to your preferred pharmacy for local pick-up.",
    },
    {
      question: "What should I bring to my physical checkup?",
      answer: "Please bring a valid photo ID, your health insurance card, a list of current active medications, and any recent lab reports or medical history summaries you have available.",
    },
    {
      question: "How is my medical diagnostic data secured?",
      answer: "We employ strict HIPAA-compliant secure servers, end-to-end encryption for all health portal queries, and role-based permissions to ensure complete privacy of your health records.",
    },
  ];

  const benefits = [
    {
      title: "Certified Specialists",
      desc: "Our clinic works exclusively with board-certified medical doctors and clinical consultants.",
      icon: <Award className="w-6 h-6 text-violet-600 group-hover:text-white" />
    },
    {
      title: "24/7 Telehealth Care",
      desc: "Connect with virtual support from the comfort of home, anytime day or night.",
      icon: <Video className="w-6 h-6 text-violet-600 group-hover:text-white" />
    },
    {
      title: "State-of-the-Art Tech",
      desc: "Active diagnostic telemetry, predictive screening, and modern laboratory analysis.",
      icon: <Activity className="w-6 h-6 text-violet-600 group-hover:text-white" />
    },
    {
      title: "Personalized Plans",
      desc: "Every care plan is custom-tailored to your patient background and active lifestyle.",
      icon: <Heart className="w-6 h-6 text-violet-600 group-hover:text-white" />
    }
  ];

  const servicesStats = [
    { value: "99.4%", label: "Diagnostic Accuracy", sub: "Verified clinical checks" },
    { value: "1.2M+", label: "Consultations", sub: "Completed Patient Cases" },
    { value: "15 Min", label: "Avg. Wait Time", sub: "Virtual Telehealth" },
    { value: "50+", label: "Clinics Nationwide", sub: "Locations Nationwide" }
  ];

  // Motion configs
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
      
      {/* 1. HERO SECTION WITH GRADIENT */}
      <section className="relative bg-[#f8f9fc] py-20 lg:py-28 border-b border-slate-100 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[250px] rounded-full bg-violet-100/30 blur-3xl -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 uppercase tracking-widest bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100/50">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-violet-300">/</span>
            <span className="text-slate-500 font-medium">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-950 tracking-tight leading-tight max-w-4xl">
            Our Premium <span className="text-gradient-purple">Healthcare</span> Services
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl font-normal mt-2">
            We provide a complete suite of clinical solutions. From immediate emergency treatment to preventative wellness consulting, we prioritize your health.
          </p>
        </motion.div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc) => (
            <ServiceCard
              key={svc.title}
              title={svc.title}
              description={svc.description}
              icon={svc.icon}
            />
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION (New Section) */}
      <section className="relative bg-slate-50/50 py-24 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Benefits"
            title="Why Choose Doctor Services"
            subtitle="We blend professional medical authority with modern digital tools to deliver exceptional patient-first outcomes."
            className="mb-16"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                variants={itemVariants}
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-955 mb-3 group-hover:text-violet-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Workflow"
            title="How it works"
            subtitle="Booking and consulting with Doctor is simple. Our clinical pathway is fully optimized for speed and clarity."
            className="mb-16"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
          >
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[1.5px] bg-slate-200/50 -z-10" />

            {steps.map((st) => (
              <motion.div 
                variants={itemVariants}
                key={st.step} 
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 text-violet-600 font-semibold text-lg flex items-center justify-center shadow-md group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-slate-955 tracking-tight group-hover:text-violet-600 transition-colors mt-2">
                  {st.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  {st.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SERVICES STATS & METRICS (New Section) */}
      <section className="relative bg-[#f8f9fc]/50 py-20 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-100 rounded-[32px] py-10 px-6 sm:px-12 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.06)] grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center"
          >
            {servicesStats.map((stat, idx) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-1 w-full relative group">
                {idx > 0 && <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-slate-100" />}
                <span className="text-4xl font-extrabold text-violet-600 tracking-tight transition-transform duration-300 group-hover:scale-105">{stat.value}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1 uppercase tracking-wider">{stat.label}</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">{stat.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. PATIENT TESTIMONIALS */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <SectionHeading
          tag="Reviews"
          title="What our patients say"
          subtitle="Read stories of recovery, health consultation, and pediatric wellness from families in our clinics."
          className="mb-16"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div 
              variants={itemVariants}
              key={idx} 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_-12px_rgba(109,40,217,0.06)] hover:border-violet-100 transition-all duration-300 flex flex-col gap-6 relative overflow-hidden group"
            >
              <Quote className="absolute -top-2 left-6 w-14 h-14 text-violet-100/40 transform rotate-180 -z-10" />
              <p className="text-slate-600 text-sm italic leading-relaxed relative z-10 flex-grow pt-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center font-bold text-violet-600 text-sm">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">{t.author}</h4>
                  <p className="text-xs text-slate-400 font-bold">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 7. SERVICES FAQ SECTION (New Section) */}
      <section className="relative bg-slate-50/30 py-24 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="FAQ"
            title="Service Inquiries"
            subtitle="Get clear guidance on diagnostic checking, online consultations, and prescription management."
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

      {/* 8. CTA BANNER (Unified layout with 3D spheres background) */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[32px] bg-[#7261fd] py-20 px-6 sm:px-16 text-center text-white overflow-hidden shadow-xl shadow-indigo-100/30 group flex items-center justify-center"
        >
          
          {/* Background Image of 3D spheres on violet base */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta_spheres.png"
              alt="Background decoration"
              fill
              className="object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-700"
              sizes="100vw"
              priority
            />
          </div>

          {/* Overlay to ensure contrast and soft lighting */}
          <div className="absolute inset-0 bg-violet-600/5 z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl text-white">
              Bring your customer services the next level of excellence.
            </h2>
            
            <div>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold pl-6 pr-2 py-2 rounded-full shadow-lg transition-all group w-fit">
                <span>Make a schedule</span>
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
