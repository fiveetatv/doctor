export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-3 max-w-3xl ${
        isCenter ? "mx-auto text-center items-center" : "text-left items-start"
      } ${className}`}
    >
      {tag && (
        <span className="text-xs font-bold uppercase tracking-widest text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed mt-2 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
