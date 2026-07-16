"use client";

import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";

export default function NotFound() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-[80vh] flex flex-col items-center justify-center pt-28 pb-16 font-sans">
        <div className="max-w-md w-full px-6 text-center">
          <GlassCard hoverEffect={true} className="border border-gold-wood/20 p-10 bg-white shadow-xl flex flex-col items-center">
            
            {/* Error Marker */}
            <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center text-gold-dark mb-6">
              <HelpCircle size={32} />
            </div>

            <span className="text-[11px] font-bold tracking-[0.25em] text-gold-wood uppercase block mb-1">
              Error Code 404
            </span>
            <h1 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Page Not Found
            </h1>
            <p className="text-charcoal/70 text-sm leading-relaxed mb-8">
              We couldn&apos;t locate the showroom section or product you requested. It may have been relocated or updated.
            </p>

            <Link
              href="/"
              className="px-8 py-3.5 bg-charcoal text-white hover:bg-gold-wood rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center space-x-2 justify-center w-full"
            >
              <ArrowLeft size={14} />
              <span>Return Home</span>
            </Link>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </>
  );
}
