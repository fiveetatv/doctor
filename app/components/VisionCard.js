import { motion } from "framer-motion";

export default function VisionCard({ number, title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-45px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col bg-slate-50/50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-violet-200 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-violet-100/10 group-hover:bg-violet-100/30 transition-colors duration-300 blur-2xl" />

      {/* Top row: Number and Icon */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold tracking-widest text-violet-500 bg-violet-50 group-hover:bg-violet-100 px-3 py-1.5 rounded-full transition-colors">
          {number}
        </span>
        {icon && (
          <div className="text-slate-400 group-hover:text-violet-600 transition-colors">
            {icon}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-violet-600 transition-colors mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

