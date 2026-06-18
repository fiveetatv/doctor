"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Users,
  ShieldCheck,
  Calendar,
  Clock,
  Send,
  MapPin,
  ArrowRight,
  ChevronRight,
  Pointer,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook,
  Stethoscope,
  Lock,
  ClipboardList,
  Wifi,
  Battery,
  Shield,
  Star,
  Sparkles,
  Check,
  ChevronDown,
  Activity
} from "lucide-react";
import Button from "./components/Button";
import StatCard from "./components/StatCard";
import VisionCard from "./components/VisionCard";
import SectionHeading from "./components/SectionHeading";

export default function Home() {
  const heartIcon = <Heart className="w-6 h-6 text-violet-600" />;
  const peopleIcon = <Users className="w-6 h-6 text-violet-600" />;
  const shieldIcon = <Shield className="w-6 h-6 text-violet-600" />;

  const slides = [
    { src: "/images/doctor_presentation_premium.png", alt: "Doctor explaining medical diagnostics" },
    { src: "/images/doctor_andrew_premium.png", alt: "Chief Specialist Dr. John Doe" },
    { src: "/images/elderly_patient.png", alt: "Patient receiving expert cardiovascular care" },
    { src: "/images/clinic_interior.png", alt: "Modern high-end clinical lobby interior" },
  ];

  const doctorsList = [
    {
      name: "Dr. John Doe",
      role: "Chief Cardiologist & Director",
      image: "/images/doctor_andrew_premium.png",
      linkedin: "#",
      instagram: "#",
      facebook: "#"
    },
    {
      name: "Dr. Martin Cole",
      role: "Senior Neurologist",
      image: "/images/doctor_martin.png",
      linkedin: "#",
      instagram: "#",
      facebook: "#"
    },
    {
      name: "Dr. David Miller",
      role: "Pediatric Specialist",
      image: "/images/doctor_andrew.png",
      linkedin: "#",
      instagram: "#",
      facebook: "#"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Consult",
      price: "$49",
      period: "per visit",
      description: "Ideal for patients looking for quick checkups or initial diagnostic guidance.",
      features: [
        "15-Minute Specialist Consultation",
        "Basic Vital Signs & Health Logging",
        "Electronic Prescription Refills",
        "Secure Patient Portal Access",
        "Next-Day Lab Testing Availability"
      ],
      cta: "Schedule Consult",
      popular: false,
    },
    {
      name: "Premium Wellness Plan",
      price: "$99",
      period: "per month",
      description: "Our most popular package for active health monitoring and 24/7 telehealth access.",
      features: [
        "Unlimited Virtual Telehealth Visits",
        "Bi-Annual Comprehensive Diagnostic Exams",
        "Priority Booking for Clinic Checkups",
        "Dedicated Clinical Nurse Coordinator",
        "ECG & Cardiovascular Health Review",
        "10% Discount on In-Clinic Lab Testing"
      ],
      cta: "Become a Member",
      popular: true,
    },
    {
      name: "Elite Family Care",
      price: "$199",
      period: "per month",
      description: "All-inclusive, premium clinical coverage designed for comprehensive family protection.",
      features: [
        "Full Clinical Cover for Up to 4 Members",
        "Direct Specialist Hotlines & Chat Support",
        "Quarterly At-Home Nurse Diagnostic Visits",
        "Free In-Clinic Laboratory & Biomarker Tests",
        "Priority VIP Clinic Private Suites",
        "Direct Coverage Coordination Support"
      ],
      cta: "Select Elite Cover",
      popular: false,
    }
  ];

  const testimonialsHome = [
    {
      name: "Robert Vance",
      role: "Cardiac Patient",
      stars: 5,
      quote: "Dr. John Doe and his cardiology surgical team were absolutely outstanding. The diagnostic precision, advanced treatment, and follow-up consultation saved my life.",
      initial: "R"
    },
    {
      name: "Sarah Jenkins",
      role: "Telehealth User",
      stars: 5,
      quote: "The virtual consult portal is incredible. I was connected with Dr. Martin Cole in under 15 minutes, and he immediately refilled my vascular script with zero friction.",
      initial: "S"
    },
    {
      name: "Michael Chen",
      role: "Parent of 8yo",
      stars: 5,
      quote: "The pediatric team created a warm, friendly atmosphere that made my young kids feel completely safe during their routine clinic diagnostics and checkups.",
      initial: "M"
    }
  ];

  const homeFaqs = [
    {
      q: "How do I book a telehealth session with a specialist?",
      a: "Booking is simple. Visit our Contact page, select your preferred clinical specialist (such as Cardiology or Neurology), select a convenient date/time, and you will receive a secure video consultation link instantly."
    },
    {
      q: "Are diagnostic testing fees included in membership plans?",
      a: "Yes! Our Premium Wellness and Elite Family packages include regular diagnostic lab work, biomarker checks, and ECG screenings. Individual/Starter consults are charged separately per test."
    },
    {
      q: "How secure is my private medical portal diagnostic data?",
      a: "We prioritize patient privacy above all. All patient communications, diagnostic reports, and medical histories are encrypted end-to-end, hosted on fully HIPAA-compliant secure servers, and accessible only by authorized clinicians."
    },
    {
      q: "Can I choose my primary medical doctor for recurring clinical care?",
      a: "Absolutely. You can select your preferred cardiologist, neurologist, or pediatrician for recurring clinical checkups, ensuring consistency and a long-term care relationship with your physician."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  // BMI Calculator State
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  
  // FAQ Accordion State
  const [activeFaqHome, setActiveFaqHome] = useState(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const calculateBmi = (e) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const bmi = (w / (h * h)).toFixed(1);
      setBmiResult(bmi);
      if (bmi < 18.5) {
        setBmiCategory("Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setBmiCategory("Healthy Weight");
      } else if (bmi >= 25 && bmi < 30) {
        setBmiCategory("Overweight");
      } else {
        setBmiCategory("Obese");
      }
    }
  };

  const getSlideProps = (index) => {
    let diff = index - activeIndex;
    const len = slides.length;
    if (diff < -1) diff += len;
    if (diff > 2) diff -= len;

    let leftStyle = "";
    let widthStyle = "";
    let opacityClass = "opacity-100";
    let pointerClass = "";
    let isCenter = false;

    if (diff === 0) {
      leftStyle = "17%";
      widthStyle = "66%";
      isCenter = true;
    } else if (diff === -1) {
      leftStyle = "0%";
      widthStyle = "14%";
    } else if (diff === 1) {
      leftStyle = "86%";
      widthStyle = "14%";
    } else {
      leftStyle = diff < 0 ? "-20%" : "120%";
      widthStyle = "14%";
      opacityClass = "opacity-0 pointer-events-none";
      pointerClass = "pointer-events-none";
    }

    return { leftStyle, widthStyle, opacityClass, pointerClass, isCenter };
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-white text-slate-800">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* Pink-peach gradient background details */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-0 left-0 right-0 h-[55%]" style={{ background: 'linear-gradient(to bottom, transparent 0%, #fdf0ee 40%, #fce4df 100%)' }} />
          <div className="absolute bottom-0 right-0 w-[55%] h-[50%]" style={{ background: 'radial-gradient(ellipse at right bottom, #fcd5c8 0%, transparent 65%)' }} />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-12 flex flex-col items-center text-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-0 mb-8"
          >
            <div className="w-16 sm:w-24 h-px bg-slate-200" />
            <div className="w-2 h-2 rounded-full bg-violet-400 mx-1" />
            <div className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-white uppercase tracking-widest bg-gradient-to-r from-violet-500 to-purple-500 px-3.5 py-1.5 rounded-full mx-0.5 shadow-sm">
              <span className="text-[7px]">✦</span>
              Premium Health Template
              <span className="text-[7px]">✦</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-violet-400 mx-1" />
            <div className="w-16 sm:w-24 h-px bg-slate-200" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[#0d0d1a] leading-[1.1] tracking-[-0.025em] max-w-5xl"
            style={{
              fontFamily: 'var(--font-satoshi), sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.2vw, 3.6rem)',
            }}
          >
            Empowering Your Health<br />With Compassionate, Specialist<br />Clinical Care
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#9090a0] text-sm sm:text-base leading-relaxed max-w-lg mt-6 font-medium"
          >
            Connecting patients with board-certified clinical specialists. We combine diagnostic accuracy with advanced therapy to ensure healthy outcomes.
          </motion.p>

          {/* CTA Action */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white text-sm font-medium transition-all hover:opacity-95 hover:shadow-xl group"
              style={{ background: 'linear-gradient(135deg, #9b87f5 0%, #7c5fe6 100%)', boxShadow: '0 8px 30px rgba(124,95,230,0.35)' }}
            >
              Book Consultation
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Premium Slider */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 pb-16 md:pt-8 md:pb-20"
        >
          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[380px] overflow-visible">
            {slides.map((slide, index) => {
              const { leftStyle, widthStyle, opacityClass, pointerClass, isCenter } = getSlideProps(index);
              return (
                <div
                  key={index}
                  className={`absolute top-0 transition-all duration-700 ease-in-out ${opacityClass} ${pointerClass}`}
                  style={{ left: leftStyle, width: widthStyle }}
                >
                  <div className="w-full overflow-hidden rounded-[32px] border-[5px] md:border-[7px] border-white shadow-xl bg-white relative">
                    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[380px]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center"
                        sizes={isCenter ? "70vw" : "15vw"}
                        priority={isCenter}
                      />
                    </div>

                    {/* Glass badges */}
                    {isCenter && (
                      <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col gap-2 md:gap-3 items-end transition-opacity duration-300 z-20">
                        <div className="px-4 py-1.5 md:px-6 md:py-2 rounded-full text-white/95 text-[10px] md:text-sm font-normal tracking-wide border border-white/25 bg-white/15 backdrop-blur-md">
                          <span className="font-semibold">100%</span> Certified Medical Staff
                        </div>
                        <div className="px-4 py-1.5 md:px-6 md:py-2 rounded-full text-white/95 text-[10px] md:text-sm font-normal tracking-wide border border-white/25 bg-white/15 backdrop-blur-md">
                          <span className="font-semibold">24/7</span> Telehealth Portal Support
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Manual trigger button */}
                  {isCenter && (
                    <div
                      onClick={nextSlide}
                      className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-7 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-xl z-20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 border border-slate-100"
                    >
                      <Pointer className="w-5 h-5 text-slate-800 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

      </section>

      {/* 2. TRUSTED PROVIDERS SECTION */}
      <section className="relative bg-[#f4f4f8] py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">

            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 justify-center py-6 lg:py-10"
            >
              <h2 className="text-4xl sm:text-5xl font-medium text-slate-900 leading-tight tracking-tighter">
                Your Trusted<br />Healthcare<br />Providers
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm">
                We bridge clinical expertise with modern digital solutions to offer diagnostic rigour, transparent scheduling, and reliable medical treatments.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-medium transition-all hover:opacity-90 hover:shadow-xl group"
                  style={{ background: 'linear-gradient(135deg, #9b87f5 0%, #7c5fe6 100%)', boxShadow: '0 8px 30px rgba(124,95,230,0.35)' }}
                >
                  Make a Schedule
                  <span className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Center: Purple phone mockup card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] overflow-hidden" 
              style={{ background: 'linear-gradient(145deg, #b39af7 0%, #8b6fe8 50%, #7c5fe6 100%)' }}
            >
              <div className="px-7 pt-7 pb-4">
                <h3 className="text-white text-xl font-bold leading-snug mb-2">
                  Very fast and accurate service with us
                </h3>
                <p className="text-violet-200 text-xs sm:text-sm leading-relaxed">
                  Connect with our professional doctors who are ready to help you manage your health.
                </p>
              </div>

              {/* Phone mockup */}
              <div className="mx-5 mb-0 rounded-t-3xl bg-white overflow-hidden shadow-2xl animate-float" style={{ minHeight: '220px' }}>
                <div className="flex items-center justify-between px-5 py-2.5 bg-white border-b border-slate-50">
                  <span className="text-[11px] font-semibold text-slate-700">9:41</span>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Wifi className="w-3.5 h-3.5" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2">
                  <p className="text-sm font-bold text-slate-800">Hi, Robert</p>
                  <div className="flex items-center gap-1 mb-4 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] text-slate-400">Vancouver, BC</span>
                    <ChevronRight className="w-2.5 h-2.5 text-slate-400 transform rotate-90" />
                  </div>

                  <div className="rounded-2xl p-4 text-white" style={{ background: 'linear-gradient(135deg, #9b87f5 0%, #7c5fe6 100%)' }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold">Appointment</span>
                      <ChevronRight className="w-4 h-4 text-white/80" />
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-white/90 text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>7 October 2026</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/90 text-[11px]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>09:00 AM - 09:30 AM</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <Send className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Analysis visual card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] p-7 shadow-sm border border-slate-100 flex flex-col gap-6"
            >
              <div>
                <h3 className="text-slate-900 text-lg font-bold leading-snug mb-2">
                  Analyze your physical performance <span className="text-violet-600">from</span> anywhere
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Body mass index (BMI), vital diagnostics, and custom physiological monitoring metrics.
                </p>
              </div>

              {/* Chart mockup */}
              <div className="flex items-end justify-between gap-3 px-2">
                {[
                  { name: 'Alex', color: '#4ade80', height: '90%', initials: 'AL' },
                  { name: 'Martin', color: '#93c5fd', height: '65%', initials: 'MC' },
                  { name: 'Jenny', color: '#f9a8d4', height: '50%', initials: 'JN' },
                  { name: 'John', color: '#fcd34d', height: '80%', initials: 'JD' },
                ].map((person) => (
                  <div key={person.name} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-9 h-9 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: person.color }}
                    >
                      {person.initials}
                    </div>
                    <div className="w-full rounded-full overflow-hidden bg-slate-50" style={{ height: '100px' }}>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: person.height }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full rounded-full"
                        style={{ background: person.color, marginTop: `calc(100% - ${person.height})` }}
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 font-semibold">{person.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              { number: '100%', label: 'Clinical Specialists Certified', code: '001' },
              { number: '25M+', label: 'Happy clinical consultations', code: '002' },
              { number: '99.4%', label: 'Diagnostic accuracy score', code: '003' },
            ].map((stat) => (
              <div key={stat.code} className="bg-white rounded-3xl px-8 py-7 shadow-sm border border-slate-100 flex flex-col gap-3 hover:border-violet-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                    <span className="text-slate-400 font-light text-2xl mr-1">•</span>{stat.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-violet-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span className="text-sm text-slate-600 font-medium">{stat.label}</span>
                  </div>
                  <span className="text-xs text-slate-300 font-bold tracking-widest">{stat.code}</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3. MAIN GOAL SECTION */}
      <section className="relative py-16 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] bg-white border border-slate-100 shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

              {/* Left text block */}
              <div className="flex flex-col justify-center gap-7 px-8 py-12 lg:px-14 lg:py-16">
                <h2 className="text-4xl sm:text-5xl leading-tight text-slate-900 font-bold tracking-tight">
                  Providing Authorized &<br />Effective Healthcare
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
                  Our core objective is to offer highly transparent, accessible medical care to our patients. We empower families to schedule visits easily, consult top specialists, and maintain digital diagnostic portals.
                </p>

                {/* 2-column checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Certified Male Specialists",
                    "End-to-End HIPAA Encryption",
                    "Advanced Cardiovascular Surgery",
                    "Interactive Diagnostic Reviews",
                    "24/7 Virtual Patient Support",
                    "Transparent Pricing Packages",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-violet-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image block */}
              <div className="relative hidden lg:block min-h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50" />
                <Image
                  src="/images/doctor_presentation_premium.png"
                  alt="Dr. John Doe explaining clinical values"
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. EXPERT SPECIALIST SECTION */}
      <section className="relative bg-slate-50/50 py-24 border-t border-b border-slate-100/80 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Biography & Bio details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full w-fit">
                Chief Specialist
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mt-6">
                Meet Dr. John Doe, MD
              </h2>
              <p className="text-violet-600 font-semibold text-base sm:text-lg mt-2 tracking-tight">
                Chief Medical Director & Senior Cardiologist
              </p>
              
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-6">
                Dr. John Doe is a globally recognized pioneer in cardiovascular medicine with over 15 years of clinical and surgical expertise. Renowned for his patient-first approach, he specializes in advanced cardiac diagnostics, cardiovascular intervention therapies, and holistic preventative wellness plans.
              </p>

              <blockquote className="relative border-l-4 border-violet-500 pl-6 my-6 italic text-slate-700 text-sm sm:text-base font-medium leading-relaxed bg-slate-50 py-4 pr-6 rounded-r-2xl">
                "My clinical philosophy is centered on blending cutting-edge scientific innovation with deep, compassionate patient relationships. Every patient deserves our fully focused attention."
              </blockquote>

              <div className="flex flex-wrap gap-6 mt-2 items-center">
                <Link
                  href="/specialist"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs sm:text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg group"
                  style={{ background: 'linear-gradient(135deg, #9b87f5 0%, #7c5fe6 100%)', boxShadow: '0 8px 30px rgba(124,95,230,0.3)' }}
                >
                  <span>View Full Biography</span>
                  <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm font-bold text-slate-700 hover:text-violet-600 transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Premium single doctor portrait card */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[380px] rounded-[36px] bg-white border border-slate-100 shadow-[0_12px_45px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(109,40,217,0.1)] transition-all duration-300 p-5 group"
              >
                <div className="relative w-full aspect-[4/4.8] rounded-[28px] overflow-hidden bg-gradient-to-b from-[#eedfff] to-[#faf5ff]">
                  <Image
                    src="/images/doctor_andrew_premium.png"
                    alt="Dr. John Doe"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                  />
                </div>

                <div className="mt-6 px-3 pb-2 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      Dr. John Doe
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                      Chief Cardiologist
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-[#0c0d16] hover:bg-[#0077b5] text-white flex items-center justify-center transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-[#0c0d16] hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-600 text-white flex items-center justify-center transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-[#0c0d16] hover:bg-[#1877f2] text-white flex items-center justify-center transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. NEW: INTERACTIVE BMI CALCULATOR SECTION */}
      <section className="relative py-24 z-10 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <SectionHeading
            tag="Health Tools"
            title="Interactive BMI Diagnostic Calculator"
            subtitle="Measure your Body Mass Index instantly to check diagnostic physical classifications."
            className="mb-16"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-slate-50/50 rounded-[32px] p-6 sm:p-10 border border-slate-100 shadow-sm"
          >
            {/* Input form */}
            <div className="md:col-span-7 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Calculate Your Index</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Provide height and weight measurements to see a real-time BMI score evaluation. This index helps determine structural wellness targets.
              </p>
              
              <form onSubmit={calculateBmi} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Height (cm)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="180"
                      className="px-5 py-3.5 rounded-full bg-white border border-slate-100 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-violet-500 transition-all text-sm font-semibold shadow-inner"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Weight (kg)</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="75"
                      className="px-5 py-3.5 rounded-full bg-white border border-slate-100 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-violet-500 transition-all text-sm font-semibold shadow-inner"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-3.5 px-8 rounded-full bg-slate-900 text-white font-bold text-sm transition-all hover:bg-violet-600 shadow-md hover:shadow-violet-100 self-start"
                >
                  Calculate Now
                </button>
              </form>
            </div>

            {/* Results display */}
            <div className="md:col-span-5 rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex flex-col justify-center items-center text-center">
              {bmiResult ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3 items-center w-full"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-500 bg-violet-50 px-3 py-1 rounded-full">
                    Your Diagnosis
                  </span>
                  <div className="text-5xl font-extrabold text-violet-600 tracking-tight mt-2">{bmiResult}</div>
                  <div className="text-lg font-bold text-slate-800 uppercase tracking-wide">{bmiCategory}</div>
                  
                  {/* Visual classification bar */}
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden mt-4 relative">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        bmiCategory === "Healthy Weight" ? "bg-emerald-500" :
                        bmiCategory === "Underweight" ? "bg-sky-400" :
                        bmiCategory === "Overweight" ? "bg-amber-400" : "bg-rose-500"
                      }`}
                      style={{ 
                        width: `${Math.min(100, Math.max(10, (parseFloat(bmiResult) / 40) * 100))}%` 
                      }}
                    />
                  </div>
                  <p className="text-slate-400 text-[11px] font-semibold mt-2">
                    Classifications: Underweight &lt; 18.5, Normal 18.5-24.9, Overweight 25-29.9, Obese &ge; 30.
                  </p>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-3 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-500">
                    <Activity className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-bold text-slate-800">Awaiting Calculations</h4>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
                    Submit your vital dimensions to calculate your Body Mass Index.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. NEW: PREMIUM PRICING & CONSULTATION PACKAGES */}
      <section className="relative bg-[#f8f9fc]/50 py-24 border-b border-slate-100/80 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <SectionHeading
            tag="Consult Packages"
            title="Premium Consultation & Care Plans"
            subtitle="Transparent clinical plans designed to secure affordable diagnostic care and clinical specialists for everyone."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-[36px] p-8 border flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-xl ${
                  plan.popular 
                    ? "bg-white border-violet-300 ring-2 ring-violet-100" 
                    : "bg-white border-slate-100 hover:border-violet-200"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <span className="absolute -top-3.5 left-8 px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-violet-500 to-indigo-600 shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-violet-600 transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-8 border-b border-slate-100 pb-6">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{plan.price}</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{plan.period}</span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <Check className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-md shadow-violet-100 hover:opacity-95"
                      : "bg-slate-50 hover:bg-violet-50 border border-slate-100 hover:border-violet-100 text-slate-700 hover:text-violet-600"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. KEY VISION SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 z-10">
        <SectionHeading
          tag="Key Vision"
          title="Here are some key vision"
          subtitle="We focus on medical innovation, empathetic therapy, diagnostic rigor, and digital connectivity to drive health outcomes."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <VisionCard
            number="01"
            title="Path to Wellness"
            description="Personalized routes for therapy, nutrition, and exercise routines designed by specialists."
            icon={heartIcon}
          />
          <VisionCard
            number="02"
            title="Mental Health Services"
            description="Empathetic consultation, psychiatry, and counseling for stress, anxiety, and depression."
            icon={peopleIcon}
          />
          <VisionCard
            number="03"
            title="Diagnostic Services"
            description="Rigorous lab tests, imaging diagnostics, and screening checks utilizing modern clinical tech."
            icon={shieldIcon}
          />
          <VisionCard
            number="04"
            title="Beyond Medicine"
            description="Education programs, lifestyle courses, and preventative medical measures for holistic safety."
            icon={heartIcon}
          />
          <VisionCard
            number="05"
            title="Pediatric Care"
            description="Warm, friendly health checks, immunizations, and developmental reviews for young children."
            icon={peopleIcon}
          />
          <VisionCard
            number="06"
            title="Telehealth Services"
            description="Secure video conferencing, virtual checks, and text consultations with doctors from anywhere."
            icon={shieldIcon}
          />
          <VisionCard
            number="07"
            title="Future of Care"
            description="Integrating AI diagnostic cues, telemetry devices, and predictive tracking for active wellness."
            icon={heartIcon}
          />
          <VisionCard
            number="08"
            title="Holistic Health"
            description="Integrating functional clinical techniques, herbal remedies, and general body-mind therapies."
            icon={peopleIcon}
          />
        </div>
      </section>

      {/* 8. NEW: PATIENT TESTIMONIALS SECTION */}
      <section className="relative bg-slate-50/50 py-24 border-t border-b border-slate-100 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <SectionHeading
            tag="Patient Reviews"
            title="Stories of Clinical Recovery & Support"
            subtitle="Read reviews and testimonials from patients who received specialist treatment at our clinics."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonialsHome.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-violet-100 transition-all duration-300 relative group"
              >
                <div className="flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm sm:text-[15px] italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center font-bold text-violet-600 text-sm flex-shrink-0 shadow-sm border border-violet-100/50">
                    {t.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. NEW: FAQ ACCORDION SECTION */}
      <section className="relative py-24 z-10 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <SectionHeading
            tag="General Inquiries"
            title="Frequently Asked Inquiries"
            subtitle="Find rapid answers to appointment scheduling, security, and telemedicine coordination."
            className="mb-16"
          />

          <div className="flex flex-col gap-4">
            {homeFaqs.map((faq, idx) => {
              const isOpen = activeFaqHome === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:border-violet-200 transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaqHome(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-slate-900 text-sm sm:text-base hover:text-violet-600 transition-colors"
                  >
                    <span>{faq.q}</span>
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
                          {faq.a}
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

      {/* 10. CTA BANNER */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[32px] bg-[#7261fd] py-20 px-6 sm:px-16 text-center text-white overflow-hidden shadow-xl shadow-indigo-100/30 group flex items-center justify-center"
        >
          {/* Background decoration image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta_spheres.png"
              alt="Spherical layout details"
              fill
              className="object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-700"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-violet-600/5 z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl text-white">
              Bring your customer services the next level of excellence.
            </h2>
            
            <div>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-900 text-sm font-bold pl-6 pr-2 py-2 rounded-full shadow-lg transition-all group w-fit">
                <span>Make a Schedule</span>
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
