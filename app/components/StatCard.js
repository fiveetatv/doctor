export default function StatCard({ number, label, icon }) {
  return (
    <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">{number}</h3>
        <p className="text-sm font-medium text-slate-500 mt-1">{label}</p>
      </div>
    </div>
  );
}
