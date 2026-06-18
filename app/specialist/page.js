"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  GraduationCap,
  Award,
  Calendar,
  Clock,
  Sparkles,
  Quote,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
  Briefcase
} from "lucide-react";
import Button from "../components/Button";

export default function Specialist() {
  const education = [
    {
      year: "2005 - 2009",
      degree: "Fellowship in Interventional Cardiology",
      institution: "Harvard Medical School / Massachusetts General Hospital",
      icon: <Briefcase className="w-5 h-5 text-violet-600" />,
    },
    {
      year: "2001 - 2005",
      degree: "Residency in Internal Medicine & Cardiology",
      institution: "Johns Hopkins University School of Medicine",
      icon: <GraduationCap className="w-5 h-5 text-violet-600" />,
    },
    {
      year: "1994 - 2001",
      degree: "Doctor of Medicine (MD)",
      institution: "Stanford University School of Medicine",
      icon: <GraduationCap className="w-5 h-5 text-violet-600" />,
    },
  ];

  const certifications = [
    "Board Certified in Cardiovascular Disease",
    "Board Certified in Interventional Cardiology",
    "Fellow of the American College of Cardiology (FACC)",
    "Member of the Society for Cardiovascular Angiography (FSCAI)",
  ];

  const expertise = [
    "Interventional Cardiology",
    "Heart Failure Management",
    "Coronary Angioplasty & Stents",
    "Valvular Heart Disease",
    "Cardiac Arrhythmia",
    "Preventative Cardiovascular Care",
  ];

  const stats = [
    { value: "15+", label: "Years Experience", sub: "Clinical Surgery" },
    { value: "45+", label: "Research Papers", sub: "Cardiology Journals" },
    { value: "99.4%", label: "Accuracy Rate", sub: "Diagnostic Precision" },
    { value: "4.5K+", label: "Interventions", sub: "Successful Stents" }
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#f8f9fc] py-20 lg:py-28 border-b border-slate-100/60 overflow-hidden">
        {/* Soft background gradient overlays */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] rounded-full bg-violet-100/20 blur-3xl -z-10" />
        <div className="absolute -bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-indigo-50/20 blur-3xl -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 uppercase tracking-widest bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100/50">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-violet-300">/</span>
            <span className="text-slate-500 font-medium">Our Specialist</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-955 tracking-tight leading-none max-w-4xl mt-2">
            Dr. John Doe, MD
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-violet-600 tracking-tight max-w-2xl">
            Chief Medical Director & Senior Interventional Cardiologist
          </p>
        </motion.div>
      </section>

      {/* 2. STATS ROW */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 -mt-8 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-white border border-slate-100 rounded-3xl py-8 px-6 md:px-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-1 w-full relative group">
              {idx > 0 && <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-slate-100" />}
              <span className="text-3xl sm:text-4xl font-bold text-violet-600 tracking-tight transition-transform duration-350 group-hover:scale-105">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">{stat.label}</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. PROFILE GRID */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT Column: Detailed Profile Info (span 7) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 flex flex-col gap-12"
          >
            
            {/* Biography & Mission Statement */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-violet-50 text-violet-700 uppercase tracking-wider w-fit">
                <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                Biography
              </span>
              <h2 className="text-3xl font-bold text-slate-955 tracking-tight mt-2">
                A Legacy of Clinical Excellence & Heart Health
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Dr. John Doe is a globally recognized pioneer in cardiovascular medicine with over 15 years of clinical and surgical expertise. Renowned for his patient-first approach, he specializes in advanced cardiac diagnostics, cardiovascular intervention therapies, and holistic preventative wellness plans.
              </p>
              
              {/* Premium Blockquote */}
              <blockquote className="relative border-l-4 border-violet-500 pl-6 my-6 italic text-slate-700 text-base sm:text-lg font-medium leading-relaxed bg-slate-50/50 py-4 pr-6 rounded-r-2xl">
                <Quote className="absolute right-4 top-4 w-12 h-12 text-violet-200/40 -z-10 transform rotate-180" />
                "My clinical philosophy is centered on blending cutting-edge scientific innovation with deep, compassionate patient relationships. Every heart tells a unique story, and every patient deserves our fully focused attention."
              </blockquote>

              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Prior to founding Doctor clinic, Dr. John Doe was the Associate Professor of Cardiology at leading university research hospitals. He has authored over 45 publications in international medical journals and continues to lead clinical trials for next-generation vascular stents.
              </p>
            </motion.div>

            {/* Core Expertise Pills */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 border-t border-slate-100 pt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                <Award className="w-4 h-4" /> Core Expertise
              </span>
              <div className="flex flex-wrap gap-2.5 mt-2">
                {expertise.map((item) => (
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    key={item}
                    className="text-xs font-semibold px-4 py-2.5 bg-slate-50 hover:bg-violet-50 text-slate-600 hover:text-violet-600 rounded-xl border border-slate-100 hover:border-violet-100 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Academic Training Timeline */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 border-t border-slate-100 pt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                <GraduationCap className="w-4.5 h-4.5" /> Education & Academic Training
              </span>
              <div className="mt-6 flex flex-col gap-8">
                {education.map((edu, idx) => (
                  <motion.div 
                    whileHover={{ x: 4 }}
                    key={idx} 
                    className="flex gap-4 sm:gap-6 relative group"
                  >
                    {/* Connecting line */}
                    {idx < education.length - 1 && <div className="absolute left-6 top-12 bottom-[-32px] w-[1.5px] bg-slate-100 group-hover:bg-violet-200 transition-colors" />}
                    
                    {/* Indicator Circle */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-xs text-violet-600 flex-shrink-0 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all duration-300 shadow-sm">
                      {edu.icon}
                    </div>
                    
                    <div className="flex-grow pt-1">
                      <span className="text-xs font-bold text-violet-500 tracking-wider uppercase bg-violet-50 px-2 py-0.5 rounded border border-violet-100">{edu.year}</span>
                      <h4 className="text-slate-950 font-bold text-base mt-2">{edu.degree}</h4>
                      <p className="text-slate-400 text-xs mt-0.5 font-medium">{edu.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Board Certifications */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 border-t border-slate-100 pt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Board Certifications & Affiliations
              </span>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.li 
                    whileHover={{ x: 2 }}
                    key={idx} 
                    className="flex items-start gap-3 text-slate-500 text-sm"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-600">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </motion.div>

          {/* RIGHT Column: Card Showcase + Hours (span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 items-center lg:items-end w-full lg:sticky lg:top-28">
            
            {/* The John Doe template card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-[450px] rounded-[36px] bg-white border border-slate-100 shadow-[0_12px_45px_-12px_rgba(0,0,0,0.06)] p-5 group transition-all duration-300 hover:shadow-[0_24px_55px_-12px_rgba(109,40,217,0.1)]"
            >
              
              {/* Doctor Portrait Container with soft violet-to-pink gradient background */}
              <div className="relative w-full aspect-[4/4.8] rounded-[28px] overflow-hidden bg-gradient-to-b from-[#eedfff] to-[#faf5ff]">
                <Image
                  src="/images/doctor_andrew_premium.png"
                  alt="Dr. John Doe"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>

              {/* Details (clean, premium bottom row) */}
              <div className="mt-6 px-3 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Dr. John Doe
                  </h3>
                  <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-wider">
                    Chief Cardiologist
                  </p>
                </div>

                {/* Social Buttons */}
                <div className="flex items-center gap-2.5">
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0c0d16] hover:bg-[#0077b5] text-white flex items-center justify-center transition-all duration-300" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0c0d16] hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-600 text-white flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0c0d16] hover:bg-[#1877f2] text-white flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Consulting Hours Widget (Glassmorphic look) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full max-w-[450px] bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4 hover:border-violet-100 transition-colors"
            >
              <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-violet-500" /> Consultation Hours
              </h4>
              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                  <span className="text-slate-500 font-semibold">Monday - Friday</span>
                  <span className="text-slate-900 font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                  <span className="text-slate-500 font-semibold">Saturday</span>
                  <span className="text-slate-900 font-bold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Sunday</span>
                  <span className="text-rose-500 font-bold">Emergency Only</span>
                </div>
              </div>
            </motion.div>

            {/* Direct Connect Quick Actions (Glassmorphic) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-[450px] bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4 hover:border-violet-100 transition-colors group"
            >
              <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-violet-500" /> Direct Connect
              </h4>
              <div className="flex flex-col gap-3">
                <motion.a
                  whileHover={{ x: 2 }}
                  href="tel:+16045550199"
                  className="flex items-center justify-between text-sm text-slate-600 hover:text-violet-600 transition-colors py-1.5 px-3 rounded-2xl bg-slate-50 hover:bg-violet-50/50 border border-slate-100 hover:border-violet-100/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-500 shadow-sm border border-slate-100/50">
                      <Phone className="w-3.5 h-3.5 text-violet-500" />
                    </span>
                    <span className="font-semibold">+1 (604) 555-0199</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition-colors" />
                </motion.a>
                
                <motion.a
                  whileHover={{ x: 2 }}
                  href="mailto:john.doe@doctor.com"
                  className="flex items-center justify-between text-sm text-slate-600 hover:text-violet-600 transition-colors py-1.5 px-3 rounded-2xl bg-slate-50 hover:bg-violet-50/50 border border-slate-100 hover:border-violet-100/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-500 shadow-sm border border-slate-100/50">
                      <Mail className="w-3.5 h-3.5 text-violet-500" />
                    </span>
                    <span className="font-semibold">john.doe@doctor.com</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition-colors" />
                </motion.a>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. CTA BANNER (Unified layout with 3D spheres background) */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-24 z-10">
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
