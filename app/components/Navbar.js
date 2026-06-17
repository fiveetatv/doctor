"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Specialist", href: "/specialist" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-violet-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#5b64f6] flex items-center justify-center text-white font-extrabold text-base shadow-sm group-hover:scale-105 transition-transform duration-300">
              D
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Doctor
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-slate-900 flex items-center gap-1 py-1 ${
                    isActive ? "text-slate-950 font-bold" : "text-slate-600"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-900 transition-colors" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-bold text-slate-800 hover:text-slate-950 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 pl-6 pr-1.5 py-1.5 rounded-full bg-slate-950 text-white hover:bg-slate-850 transition-all duration-300 text-sm font-bold group"
            >
              <span>Contact Us</span>
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-950 transform group-hover:translate-x-0.5 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium py-2 border-b border-slate-50 transition-colors hover:text-violet-600 ${
                      isActive ? "text-violet-600 font-semibold" : "text-slate-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-center py-2.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-center py-2.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-violet-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

