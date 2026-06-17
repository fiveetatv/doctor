import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description, href = "/services" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_-12px_rgba(109,40,217,0.08)] hover:-translate-y-1 hover:border-violet-100 transition-all duration-300 group"
    >
      {/* Icon Enclosure */}
      {icon && (
        <div className="w-14 h-14 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      )}

      {/* Heading */}
      <h3 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-violet-600 transition-colors mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

    </motion.div>
  );
}


