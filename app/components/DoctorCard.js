import Image from "next/image";

export default function DoctorCard({ image, name, role, socialLinks = {} }) {
  return (
    <div className="flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 overflow-hidden group">
      {/* Image Container with Custom Background Gradient */}
      <div className="relative aspect-[4/5] bg-gradient-to-br from-slate-50 to-violet-50/50 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Soft radial overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Body */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-violet-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm font-semibold text-slate-400 mt-1 uppercase tracking-wider">
            {role}
          </p>
        </div>

        {/* Social Icons / Actions */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
          <a
            href={socialLinks.linkedin || "#"}
            className="w-9 h-9 rounded-full bg-slate-50 hover:bg-violet-600 text-slate-500 hover:text-white flex items-center justify-center transition-all duration-300"
            aria-label={`${name}'s LinkedIn`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href={socialLinks.phone || "tel:#"}
            className="w-9 h-9 rounded-full bg-slate-50 hover:bg-violet-600 text-slate-500 hover:text-white flex items-center justify-center transition-all duration-300"
            aria-label={`Call ${name}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a
            href={socialLinks.email || "mailto:#"}
            className="w-9 h-9 rounded-full bg-slate-50 hover:bg-violet-600 text-slate-500 hover:text-white flex items-center justify-center transition-all duration-300"
            aria-label={`Email ${name}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
