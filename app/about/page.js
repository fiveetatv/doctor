"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Sparkles, Award, ShieldCheck, Star, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  const values = [
    {
      title: "Compassion First",
      description: "We believe healing starts with listening. Our clinicians approach every patient with warmth and understanding.",
      icon: <Heart className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />,
    },
    {
      title: "Clinical Innovation",
      description: "Integrating telehealth, AI diagnostics, and modern research to secure the best clinical health outcomes.",
      icon: <Sparkles className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />,
    },
    {
      title: "Excellence & Rigor",
      description: "Only certified specialists and verified workflows are permitted. Quality is non-negotiable for Doctor.",
      icon: <Award className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />,
    },
    {
      title: "Absolute Integrity",
      description: "Secure health records, complete pricing transparency, and honest communication with our clients.",
      icon: <ShieldCheck className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />,
    },
  ];

  const milestones = [
    { value: "15+", label: "Years of Excellence" },
    { value: "120+", label: "Certified Specialists" },
    { value: "50+", label: "Clinics Nationwide" },
    { value: "1.2M+", label: "Patient Consultations" },
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#f8f9fc] py-20 lg:py-28 border-b border-slate-100 overflow-hidden">
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
            <span className="text-slate-500 font-medium">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-950 tracking-tight leading-tight max-w-4xl">
            About Doctor — Dedicated to Patient-Centered Healing
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl font-normal mt-2">
            Doctor was founded with a single mission: to make premium, modern healthcare accessible, compassionate, and highly effective for everyone.
          </p>
        </motion.div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-violet-50 text-violet-700 uppercase tracking-wider w-fit">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-950 tracking-tight leading-tight">
              Redefining Clinical Care for a Connected World
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Founded in 2011, Doctor has grown from a single clinic to a nationwide network. We realized that traditional medicine is often too complex and cold. Our goal was to create a modern clinical ecosystem where patients feel valued and heard.
            </p>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              By merging advanced diagnostics with compassionate physical and mental health treatments, we cover every layer of wellness. We integrate state-of-the-art telemetry devices and online consult queues to connect you to doctors in seconds, without sacrificing the personal touch of clinic visits.
            </p>
            <div className="pt-2">
              <Link href="/services" className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-full shadow-md transition-all text-sm group">
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Clean Graphic: Image + Overlapping Stats Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-slate-100 shadow-lg bg-slate-50">
              <Image
                src="/images/clinic_interior.png"
                alt="Clinic Lobby"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Overlay statistics box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-6 -left-6 bg-white border border-slate-100 rounded-3xl p-6 shadow-xl max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 shadow-sm border border-violet-100/30">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-base leading-tight">99.4%</h4>
                  <p className="text-slate-400 text-xs mt-0.5 font-semibold">Accurate Clinical Diagnosis</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="relative bg-[#f8f9fc]/50 py-24 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Our Values"
            title="The principles that guide our care"
            subtitle="Doctor operates on core human values. We maintain clinical standards and strict ethics to prioritize your wellness."
            className="mb-16"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((val) => (
              <motion.div 
                variants={cardVariants}
                key={val.title} 
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-3 group-hover:text-violet-600 transition-colors">
                  {val.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ACHIEVEMENT STATS ROW */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-100 rounded-[32px] py-10 px-6 sm:px-12 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.06)] grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {milestones.map((ms, idx) => (
            <div key={ms.label} className="flex flex-col items-center text-center gap-1 w-full relative">
              {idx > 0 && <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-100" />}
              <span className="text-4xl sm:text-5xl font-extrabold text-violet-600 tracking-tight">{ms.value}</span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 mt-1 uppercase tracking-wider">{ms.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0e0f14] rounded-[36px] py-16 px-8 sm:px-16 text-center text-white overflow-hidden shadow-xl max-w-5xl mx-auto relative flex flex-col items-center gap-6"
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight max-w-2xl leading-tight">
            Want to meet our clinical directors?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
            Schedule an introductory virtual tour or book a diagnostic session at one of our physical facilities near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <Button href="/contact" variant="primary" className="bg-violet-600 hover:bg-violet-700 text-white border-none py-3.5 px-8 rounded-full font-bold">
              Book Appointment
            </Button>
            <Button href="/services" className="border border-white/25 text-white hover:bg-white/5 py-3.5 px-8 rounded-full font-bold">
              Learn What We Do
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
