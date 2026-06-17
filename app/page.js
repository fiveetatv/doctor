"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Shield
} from "lucide-react";
import Button from "./components/Button";
import StatCard from "./components/StatCard";
import VisionCard from "./components/VisionCard";
import SectionHeading from "./components/SectionHeading";

export default function Home() {
  const heartIcon = <Heart className="w-6 h-6 text-violet-600" />;
  const peopleIcon = <Users className="w-6 h-6 text-violet-600" />;
  const shieldIcon = <Shield className="w-6 h-6 text-violet-600" />;

  const goalIcons = [
    <Clock key="1" className="w-5 h-5 text-violet-600" />,
    <ShieldCheck key="2" className="w-5 h-5 text-violet-600" />,
    <Stethoscope key="3" className="w-5 h-5 text-violet-600" />,
    <Users key="4" className="w-5 h-5 text-violet-600" />,
    <ClipboardList key="5" className="w-5 h-5 text-violet-600" />,
    <Lock key="6" className="w-5 h-5 text-violet-600" />,
  ];

  const slides = [
    { src: "/images/hero_doctor_patient.png", alt: "Doctor checking child" },
    { src: "/images/goal_doctor.png", alt: "Doctor clinic values" },
    { src: "/images/elderly_patient.png", alt: "Patient receiving care" },
    { src: "/images/right_portrait.png", alt: "Healthcare professional" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, []);

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
    <div className="relative w-full overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white">

        {/* Pink-peach gradient that covers middle/bottom of hero */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-0 left-0 right-0 h-[55%]" style={{ background: 'linear-gradient(to bottom, transparent 0%, #fdf0ee 40%, #fce4df 100%)' }} />
          <div className="absolute bottom-0 right-0 w-[55%] h-[50%]" style={{ background: 'radial-gradient(ellipse at right bottom, #fcd5c8 0%, transparent 65%)' }} />
        </div>

        {/* Text block */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-12 flex flex-col items-center text-center">

          {/* About Us badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-0 mb-10"
          >
            <div className="w-16 sm:w-24 h-px bg-slate-200" />
            <div className="w-2 h-2 rounded-full bg-violet-400 mx-1" />
            <div className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-white uppercase tracking-widest bg-gradient-to-r from-violet-500 to-purple-500 px-3.5 py-1.5 rounded-full mx-0.5 shadow-sm">
              <span className="text-[7px]">✦</span>
              About Us
              <span className="text-[7px]">✦</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-violet-400 mx-1" />
            <div className="w-16 sm:w-24 h-px bg-slate-200" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[#0d0d1a] leading-[1.1] tracking-[-0.025em] max-w-4xl"
            style={{
              fontFamily: 'var(--font-satoshi), sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
            }}
          >
            Discover Our Mission and<br />Values in Patient-Centered<br />Healthcare
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#9090a0] text-sm sm:text-[15px] leading-relaxed max-w-md mt-5"
          >
            we are dedicated to providing exceptional healthcare through a compassionate,
            patient-centered approach.
          </motion.p>

          {/* Contact us button */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white text-sm font-medium transition-all hover:opacity-90 hover:shadow-xl group"
              style={{ background: 'linear-gradient(135deg, #9b87f5 0%, #7c5fe6 100%)', boxShadow: '0 8px 30px rgba(124,95,230,0.35)' }}
            >
              Contact us
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Image Strip Slider */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-16 md:pt-10 md:pb-20"
        >
          <div className="relative w-full h-[185px] md:h-[295px] lg:h-[355px] overflow-visible">
            {slides.map((slide, index) => {
              const { leftStyle, widthStyle, opacityClass, pointerClass, isCenter } = getSlideProps(index);
              return (
                <div
                  key={index}
                  className={`absolute top-0 transition-all duration-700 ease-in-out ${opacityClass} ${pointerClass}`}
                  style={{ left: leftStyle, width: widthStyle }}
                >
                  <div className="w-full overflow-hidden rounded-3xl border-[5px] md:border-[7px] border-white shadow-lg bg-white relative">
                    <div className="relative w-full h-[185px] md:h-[295px] lg:h-[355px]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center"
                        sizes={isCenter ? "70vw" : "15vw"}
                        priority={isCenter}
                      />
                    </div>

                    {/* Glassmorphic badge overlays */}
                    {isCenter && (
                      <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col gap-2 md:gap-3 items-end transition-opacity duration-300">
                        <div className="px-4 py-1.5 md:px-6 md:py-2 rounded-full text-white/95 text-[10px] md:text-sm font-normal tracking-wide border border-white/25 bg-white/15 backdrop-blur-md">
                          <span className="font-semibold">100%</span> Fast Response
                        </div>
                        <div className="px-4 py-1.5 md:px-6 md:py-2 rounded-full text-white/95 text-[10px] md:text-sm font-normal tracking-wide border border-white/25 bg-white/15 backdrop-blur-md">
                          <span className="font-semibold">90%</span> Satisfying treatment
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Drag hand trigger */}
                  {isCenter && (
                    <div
                      onClick={nextSlide}
                      className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-7 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-xl z-20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 border border-slate-100"
                    >
                      <Pointer className="w-5 h-5 text-slate-800" />
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

          {/* Top 3-column row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">

            {/* LEFT: Heading + desc + button */}
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
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Public does not participate in payment for order flow as a source of revenue. Instead, we route all orders directly.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-white text-sm font-medium transition-all hover:opacity-90 hover:shadow-xl group"
                  style={{ background: 'linear-gradient(135deg, #9b87f5 0%, #7c5fe6 100%)', boxShadow: '0 8px 30px rgba(124,95,230,0.35)' }}
                >
                  Make a schedule
                  <span className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* CENTER: Purple card with phone mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden" 
              style={{ background: 'linear-gradient(145deg, #b39af7 0%, #8b6fe8 50%, #7c5fe6 100%)' }}
            >
              <div className="px-7 pt-7 pb-4">
                <h3 className="text-white text-xl font-bold leading-snug mb-2">
                  Very fast and accurate service with us
                </h3>
                <p className="text-violet-200 text-xs leading-relaxed">
                  Connect with our professional doctors who are ready to help you manage your health.
                </p>
              </div>

              {/* Phone mockup */}
              <div className="mx-5 mb-0 rounded-t-3xl bg-white overflow-hidden shadow-2xl animate-float" style={{ minHeight: '220px' }}>
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 py-2.5 bg-white border-b border-slate-50">
                  <span className="text-[11px] font-semibold text-slate-700">9:41</span>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Wifi className="w-3.5 h-3.5" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* App content */}
                <div className="px-5 pb-4 pt-2">
                  <p className="text-base font-bold text-slate-800">Hi, Madhu</p>
                  <div className="flex items-center gap-1 mb-4 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] text-slate-400">Jakarta, Indonesia</span>
                    <ChevronRight className="w-2.5 h-2.5 text-slate-400 transform rotate-90" />
                  </div>

                  {/* Appointment card */}
                  <div className="rounded-2xl p-4 text-white" style={{ background: 'linear-gradient(135deg, #9b87f5 0%, #7c5fe6 100%)' }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold">Appointment</span>
                      <ChevronRight className="w-4 h-4 text-white/80" />
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-white/90 text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>7 October 2021</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/90 text-[11px]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>08:00 AM - 10:00 AM</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <Send className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: White card with bar chart */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 flex flex-col gap-6"
            >
              <div>
                <h3 className="text-slate-900 text-lg font-bold leading-snug mb-2">
                  Analysis your physical performance <span className="text-violet-600">from</span> anywhere
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Body mass index (BMI), skinfold measurements, or bioelectrical impedance analysis.
                </p>
              </div>

              {/* Bar chart with avatar circles */}
              <div className="flex items-end justify-between gap-3 px-2">
                {[
                  { name: 'Alex', color: '#4ade80', height: '90%', initials: 'AL' },
                  { name: 'Hamilton', color: '#93c5fd', height: '60%', initials: 'HM' },
                  { name: 'Jenny', color: '#f9a8d4', height: '50%', initials: 'JN' },
                  { name: 'Methio', color: '#fde68a', height: '70%', initials: 'MT' },
                ].map((person) => (
                  <div key={person.name} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-9 h-9 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: person.color }}
                    >
                      {person.initials}
                    </div>
                    <div className="w-full rounded-full overflow-hidden bg-slate-100" style={{ height: '100px' }}>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: person.height }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full rounded-full"
                        style={{ background: person.color, marginTop: `calc(100% - ${person.height})` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{person.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom 3 stat cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              { number: '100%', label: 'Our Doctors Certified', code: '001' },
              { number: '25M+', label: 'Happy global users', code: '002' },
              { number: '99%', label: 'Satisfying treatment', code: '003' },
            ].map((stat) => (
              <div key={stat.code} className="bg-white rounded-3xl px-8 py-7 shadow-sm border border-slate-100 flex flex-col gap-3 hover:border-violet-100 transition-colors duration-300">
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
            className="relative rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

              {/* LEFT: Text content */}
              <div className="flex flex-col justify-center gap-7 px-10 py-14 lg:px-14 lg:py-16">
                <h2
                  className="text-4xl sm:text-5xl leading-tight text-slate-900 font-bold tracking-tight"
                >
                  Let&apos;s know about our<br />main goal
                </h2>
                <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm">
                  We aim to offer clear and comprehensive information about our services, conditions treated, and treatment options. This ensures that patients can make informed decisions about their healthcare.
                </p>

                {/* 2-column checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Providing Accessible Information",
                    "Building Trust",
                    "Enhancing Patient Engagement",
                    "Community Involvement",
                    "Promoting Health Education",
                    "Security and Privacy",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Doctor image */}
              <div className="relative hidden lg:block min-h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50" />
                <Image
                  src="/images/goal_doctor.png"
                  alt="Doctor presenting healthcare information"
                  fill
                  className="object-cover object-top"
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
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Meet our expert doctors
            </h2>
            <p className="text-slate-500 text-sm mt-3 font-normal">
              We aim to share information about our team
            </p>
          </div>

          {/* Centered Premium Template Card */}
          <div className="flex justify-center items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[450px] rounded-[36px] bg-white border border-slate-100 shadow-[0_12px_45px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 p-5 group"
            >
              
              <div className="relative w-full aspect-[4/4.8] rounded-[28px] overflow-hidden bg-gradient-to-b from-[#eedfff] to-[#faf5ff]">
                <Image
                  src="/images/doctor_kudak.png"
                  alt="Kullok Dash"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>

              <div className="mt-6 px-3 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                    Kullok Dash
                  </h3>
                  <p className="text-sm font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                    Strategic & finance
                  </p>
                </div>

                {/* Social Buttons */}
                <div className="flex items-center gap-2.5">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#0c0d16] hover:bg-[#0077b5] text-white flex items-center justify-center transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#0c0d16] hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-600 text-white flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#0c0d16] hover:bg-[#1877f2] text-white flex items-center justify-center transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. KEY VISION SECTION */}
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

      {/* 6. CTA BANNER */}
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
