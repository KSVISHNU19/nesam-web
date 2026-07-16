"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProductsSection() {
  const categories = [
    {
      title: "Architectural & Decorative Glass",
      subtitle: "Luxury Aesthetics",
      desc: "Custom toughened glass, premium mirrors, luxury partition systems, and stained glass meticulously curated for elite architectures.",
      image: "/images/glass-category.png",
      link: "/products/glass",
      tag: "Trending",
      details: ["Toughened Facades", "Smart Glass Partitions", "LED & Tinted Mirrors", "Decorative Frosted Glass"]
    },
    {
      title: "Premium Plywoods & Veneers",
      subtitle: "Structural Grandeur",
      desc: "Waterproof marine plywoods, luxury wood veneers, and high-pressure decorative laminates built to withstand time with pure elegance.",
      image: "/images/plywood-category.png",
      link: "/products/plywood",
      tag: "Best-Seller",
      details: ["IS:710 Marine Plywood", "Natural & Reconstituted Veneers", "Acrylic & Metallic Laminates", "Designer Flush Doors"]
    },
    {
      title: "Architectural Hardware & Locks",
      subtitle: "Precision Engineering",
      desc: "High-security digital locks, designer cabinet handles, hydraulic concealed hinges, and sliding door fittings of absolute craftsmanship.",
      image: "/images/hardware-category.png",
      link: "/products/door-hardware",
      tag: "Exclusive",
      details: ["Smart Biometric Locks", "Premium Pull Handles", "Soft-Close Cabinet Systems", "Profile Sliding Rails"]
    }
  ];

  return (
    <section id="products" className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full font-sans">
      <SectionHeading
        title="Explore Our Masterpiece Collections"
        subtitle="Signature Showroom Display"
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <GlassCard
            key={i}
            hoverEffect={true}
            delay={i * 0.15}
            className="flex flex-col h-full overflow-hidden border border-gold-wood/10 bg-white/40 backdrop-blur-md"
          >
            {/* Image Container with Zoom effect */}
            <div className="relative h-64 w-full overflow-hidden image-zoom-container group">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/20 transition-opacity duration-300 group-hover:bg-charcoal/40" />
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 flex items-center space-x-1.5 bg-charcoal/80 backdrop-blur-md text-gold-wood text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full border border-gold-wood/20">
                <Sparkles size={10} />
                <span>{cat.tag}</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-gold-wood uppercase tracking-widest">
                  {cat.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal leading-tight">
                  {cat.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed font-light">
                  {cat.desc}
                </p>
              </div>

              {/* Bullet details */}
              <ul className="grid grid-cols-2 gap-x-2 gap-y-2 border-t border-charcoal/5 pt-4 text-xs font-medium text-charcoal/80">
                {cat.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-wood" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                <Link
                  href={cat.link}
                  className="flex items-center space-x-1 text-xs font-semibold text-gold-wood hover:text-gold-dark uppercase tracking-wider transition-colors group/link"
                >
                  <span>Quick View</span>
                  <Eye size={14} className="transition-transform group-hover/link:scale-110" />
                </Link>
                <Link
                  href={cat.link}
                  className="group/btn p-3 bg-charcoal hover:bg-gold-wood text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-gold-wood/20 hover:-translate-y-0.5"
                  aria-label={`View all ${cat.title}`}
                >
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
