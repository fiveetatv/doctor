"use client";

import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e0f14] text-slate-400 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* TOP ROW: Let's Connect */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10">
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">
            Let's Connect with us
          </h2>
          <div className="flex items-center gap-4 flex-wrap">
            {/* Get Started Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-500 to-[#5b64f6] text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full shadow-lg hover:opacity-95 transition-all group"
            >
              <span>Get Started</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </Link>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 border border-white/20 hover:border-white/40 text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-white/5 transition-all group"
            >
              <span>Contact Us</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* MIDDLE SECTION: 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16">
          
          {/* Column 1: Logo & Newsletter (span 4) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-base shadow-md">
                D
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Doctor
              </span>
            </Link>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-white/90">
                Subscribe our newsletter for update
              </p>
              
              {/* Inline input + button */}
              <form 
                className="relative flex items-center w-full bg-white/5 border border-white/10 rounded-full p-1 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500 transition-all"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter you email address..."
                  className="w-full bg-transparent pl-4 pr-36 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-500 to-[#5b64f6] text-white text-xs font-semibold pl-4 pr-1.5 py-1.5 rounded-full hover:opacity-95 transition-all group"
                >
                  <span>Book a Demo</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform duration-300">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                </button>

              </form>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block md:col-span-1" />

          {/* Columns 2-5 (span 7) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 2: Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm">Company</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-violet-400 transition-colors">People platform</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Full-service</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Employee Benefits</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Hiring and onboarding</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Talent management</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Insights and reporting</Link></li>
              </ul>
            </div>

            {/* Column 3: Features */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm">Features</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Primary Care</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Telehealth</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Cardiology</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Mental Health Services</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Integrations</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Column 4: Solutions */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm">Solutions</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-violet-400 transition-colors">CareCrafters</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">HealthBridge</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">VitalLink</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Global Business</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Health Articles & Blogs</Link></li>
              </ul>
            </div>

            {/* Column 5: For Accountants */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm">For Accountants</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Become a partner</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Partner community</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Professional development</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">People Advisory</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Accountant blog</Link></li>
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Resources</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* BOTTOM SECTION: Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>Doctor© {new Date().getFullYear()}</span>
            <Link href="/" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">Accessibility</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">Licenses</Link>
            <Link href="/" className="hover:text-slate-300 transition-colors">Site map</Link>
          </div>
          
          <div className="flex items-center gap-2.5">
            <a href="#" className="w-8.5 h-8.5 rounded-full bg-white/5 hover:bg-violet-600 text-white flex items-center justify-center transition-all duration-300" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8.5 h-8.5 rounded-full bg-white/5 hover:bg-violet-600 text-white flex items-center justify-center transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8.5 h-8.5 rounded-full bg-white/5 hover:bg-violet-600 text-white flex items-center justify-center transition-all duration-300" aria-label="X">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-8.5 h-8.5 rounded-full bg-white/5 hover:bg-violet-600 text-white flex items-center justify-center transition-all duration-300" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
