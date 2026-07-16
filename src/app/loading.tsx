export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-warm-white font-sans">
      <div className="relative flex flex-col items-center space-y-6">
        {/* Sleek Golden Spinner Ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gold-wood/10" />
          <div className="absolute inset-0 rounded-full border-4 border-t-gold-wood border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
        
        {/* Brand Text */}
        <div className="flex flex-col items-center">
          <span className="font-serif text-2xl font-bold tracking-widest text-charcoal">
            NESAM
          </span>
          <span className="text-[8px] tracking-[0.3em] text-gold-wood uppercase font-semibold mt-1">
            Loading Showroom
          </span>
        </div>
      </div>
    </div>
  );
}
