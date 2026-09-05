"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Home, ArrowLeft, Filter, Eye } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { Product, Category } from "@/data/products";

interface CategoryClientProps {
  category: Category;
  products: Product[];
}

export default function CategoryClient({ category, products }: CategoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>("QUBA");

  // Get all unique finishes in this category for filtering
  const allFinishes = useMemo(() => {
    const finishesSet = new Set<string>();
    products.forEach((p) => {
      (p.finishes || []).forEach((f) => finishesSet.add(f));
    });
    return Array.from(finishesSet);
  }, [products]);

  // Filter products based on search query and selected finish/brand
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.code || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description || "").toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesFilter = true;
      if (category.slug === "door-locks") {
        if (selectedBrand === "QUBA") {
          matchesFilter = !product.brand || product.brand === "QUBA®";
        } else if (selectedBrand === "MOBaj") {
          matchesFilter = product.brand === "MOBaj®" || product.brand === "bonus-MOBaj®";
        }
      } else {
        matchesFilter = selectedFinish ? (product.finishes || []).includes(selectedFinish) : true;
      }
      
      return matchesSearch && matchesFilter;
    });
  }, [products, searchQuery, selectedFinish, selectedBrand, category.slug]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {/* 1. BREADCRUMBS */}
      <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-8 pt-4">
        <Link href="/" className="hover:text-gold-wood flex items-center gap-1.5 transition-colors">
          <Home size={12} />
          <span>Home</span>
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-gold-wood transition-colors">
          Products
        </Link>
        <span>/</span>
        <span className="text-gold-wood">{category.name}</span>
      </nav>

      {/* 2. CATEGORY HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-charcoal/5 pb-10">
        <div className="max-w-2xl space-y-4">
          <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold text-gold-wood hover:text-gold-dark uppercase tracking-widest transition-colors mb-2">
            <ArrowLeft size={14} />
            <span>Back to Categories</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal leading-tight">
            {category.name}
          </h1>
          <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
            {category.description}
          </p>
        </div>
        <div className="shrink-0 bg-gold-light/40 border border-gold-wood/20 rounded-2xl px-6 py-4 text-center">
          <span className="block font-serif text-3xl font-bold text-gold-dark">{products.length}</span>
          <span className="text-[10px] font-bold text-charcoal/60 uppercase tracking-wider">Premium Models</span>
        </div>
      </div>

      {/* 3. LOCAL SEARCH & FINISH FILTERS */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-12 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-gold-wood/10">
        
        {/* Search */}
        <div className="relative w-full lg:w-80">
          <span className="absolute inset-y-0 left-4 flex items-center text-charcoal/40">
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="Search in this category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-charcoal/10 bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-wood text-xs text-charcoal transition-all shadow-inner"
          />
        </div>

        {/* Finishes / Filter option area */}
        {category.slug === "door-locks" ? (
          <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            <span className="text-[10px] font-bold text-charcoal/50 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Filter size={12} className="text-gold-wood" />
              Brand:
            </span>
            <button
              onClick={() => setSelectedBrand(null)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all shrink-0 border ${
                selectedBrand === null
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-gold-wood/50"
              }`}
            >
              All Brands
            </button>
            <button
              onClick={() => setSelectedBrand("QUBA")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all shrink-0 border ${
                selectedBrand === "QUBA"
                  ? "bg-gold-wood text-white border-gold-wood"
                  : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-gold-wood/50"
              }`}
            >
              QUBA®
            </button>
            <button
              onClick={() => setSelectedBrand("MOBaj")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all shrink-0 border ${
                selectedBrand === "MOBaj"
                  ? "bg-gold-wood text-white border-gold-wood"
                  : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-gold-wood/50"
              }`}
            >
              MOBaj®
            </button>
          </div>
        ) : category.slug !== "door-hardware" && category.slug !== "modular-kitchen" && category.slug !== "furniture-hardware" && allFinishes.length > 0 ? (
          <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            <span className="text-[10px] font-bold text-charcoal/50 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Filter size={12} className="text-gold-wood" />
              Finish:
            </span>
            <button
              onClick={() => setSelectedFinish(null)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all shrink-0 border ${
                selectedFinish === null
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-gold-wood/50"
              }`}
            >
              All Finishes
            </button>
            {allFinishes.map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all shrink-0 border ${
                  selectedFinish === finish
                    ? "bg-gold-wood text-white border-gold-wood"
                    : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-gold-wood/50"
                }`}
              >
                {finish}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {/* 4. PRODUCTS LIST GRID */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, idx) => {
            if (product.isImageOnly) {
              const brandName = product.brand || (product.category === "door-locks" ? "QUBA®" : "HABLO®");
              const displayBrand = brandName === "bonus-MOBaj®" ? "MOBaj®" : brandName;
              return (
                <GlassCard
                  key={product.slug}
                  hoverEffect={true}
                  delay={(idx % 6) * 0.05}
                  className={`flex flex-col h-full overflow-hidden rounded-3xl border transition-all duration-300 ${
                    product.cardBg
                      ? "border-charcoal/40 " + product.cardBg
                      : "border-neutral-200/80 bg-white shadow-sm hover:shadow-xl"
                  } p-3 relative group`}
                >
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className={`block relative w-full h-[440px] md:h-[480px] rounded-2xl overflow-hidden ${
                      product.cardBg ? product.cardBg : "bg-white"
                    } flex items-center justify-center p-4`}
                  >
                    {/* Centered Overlay Header at Top */}
                    <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 max-w-[90%] z-10 flex flex-col items-center gap-1.5 pointer-events-none">
                      {/* Main Black Pill */}
                      <div className="bg-black/95 backdrop-blur-md border border-white/15 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md text-white font-sans text-[10px] sm:text-xs md:text-xs font-bold tracking-wider text-center uppercase flex items-center justify-center gap-1.5 sm:gap-2 truncate max-w-full">
                        <span className="text-gold-wood font-extrabold shrink-0">{displayBrand}</span>
                        <span className="text-white/40 shrink-0">•</span>
                        <span className="text-white font-bold truncate">{product.name}</span>
                      </div>

                      {/* Sub-badge Centered Below Black Pill */}
                      {product.name2 && (
                        <div className="bg-black/85 backdrop-blur-md border border-gold-wood/30 text-gold-wood px-3.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-sans font-semibold tracking-wide shadow-md text-center capitalize">
                          {product.name2}
                        </div>
                      )}
                    </div>

                    {/* Catalog Product Image */}
                    <Image
                      src={product.images[0]}
                      alt={`${displayBrand} ${product.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </Link>
                </GlassCard>
              );
            }

            return (
              <GlassCard
                key={product.slug}
                hoverEffect={true}
                delay={idx % 6 * 0.05}
                className="flex flex-col h-full overflow-hidden border border-gold-wood/10 bg-white/50"
              >
              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden image-zoom-container group">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-300 group-hover:bg-charcoal/30" />
                
                {/* Product Code Badge */}
                <div className="absolute top-4 left-4 bg-charcoal/85 backdrop-blur-md text-gold-wood text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-md border border-gold-wood/20">
                  {product.code}
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-gold-wood uppercase tracking-widest">
                    {category.name}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal leading-snug line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-light line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Technical highlights preview */}
                <div className="border-t border-charcoal/5 pt-4 space-y-3">
                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-charcoal/40 uppercase tracking-wider block">Key Features</span>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-medium text-charcoal/80">
                        {product.features.slice(0, 2).map((feat, fidx) => (
                          <span key={fidx} className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-gold-wood shrink-0" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Finishes */}
                  {product.finishes && product.finishes.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-charcoal/40 uppercase tracking-wider block">Available Finishes</span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.finishes.slice(0, 3).map((fin, fidx) => (
                          <span key={fidx} className="text-[10px] bg-charcoal/5 px-2 py-0.5 rounded text-charcoal/70 font-sans">
                            {fin}
                          </span>
                        ))}
                        {product.finishes.length > 3 && (
                          <span className="text-[9px] text-charcoal/40 pt-0.5">+{product.finishes.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Details Trigger Button */}
                <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="flex items-center space-x-1 text-xs font-semibold text-gold-wood hover:text-gold-dark uppercase tracking-wider transition-colors group/link"
                  >
                    <span>View Details</span>
                    <Eye size={14} className="transition-transform group-hover/link:scale-110" />
                  </Link>
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="group/btn p-3 bg-charcoal hover:bg-gold-wood text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-gold-wood/20 hover:-translate-y-0.5"
                    aria-label={`View details for ${product.name}`}
                  >
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          );
        })}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/30 rounded-2xl border border-charcoal/5">
          <p className="text-charcoal/50 text-sm font-sans mb-4">No products matching the selected criteria in this category.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedFinish(null);
            }}
            className="px-6 py-2.5 bg-charcoal hover:bg-gold-wood text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
