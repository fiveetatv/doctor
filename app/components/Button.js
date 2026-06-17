import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyle =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer text-sm py-3 px-6";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md hover:shadow-violet-200 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-slate-200 focus:ring-2 focus:ring-slate-800 focus:ring-offset-2",
    outline:
      "border border-slate-300 hover:border-violet-600 text-slate-700 hover:text-violet-600 hover:bg-violet-50/50 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2",
    light:
      "bg-violet-50 hover:bg-violet-100 text-violet-700 focus:ring-2 focus:ring-violet-300 focus:ring-offset-2",
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}
