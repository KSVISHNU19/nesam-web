"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Filter, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";
import GlassCard from "@/components/ui/GlassCard";
import { categoriesData, productsData } from "@/data/products";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.code?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 font-sans bg-sand/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold-wood uppercase font-sans mb-3">
              Elite Collections
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
              Our Premium Catalog
            </h1>
            <p className="text-charcoal/70 max-w-2xl text-sm md:text-base leading-relaxed">
              Explore our comprehensive range of luxury glass, seasoned plywood, decorative laminates, security locks, and fine architectural hardware.
            </p>
          </div>

          {/* Interactive Search & Filter Controls */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-gold-wood/10 shadow-sm">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <span className="absolute inset-y-0 left-4 flex items-center text-charcoal/40">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search products or codes (e.g., NES-1025)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-charcoal/10 bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-wood text-sm text-charcoal transition-all duration-300 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-charcoal/40 hover:text-charcoal"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === null
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-gold-wood/50"
                }`}
              >
                All Categories
              </button>
              {categoriesData.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    selectedCategory === cat.slug
                      ? "bg-gold-wood text-white border-gold-wood"
                      : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-gold-wood/50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Catalog State Render */}
          {searchQuery !== "" || selectedCategory !== null ? (
            /* ACTIVE FILTER/SEARCH RESULTS VIEW */
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal/50 flex items-center gap-2">
                  <Filter size={14} className="text-gold-wood" />
                  Found {filteredProducts.length} Premium Products
                </span>
                {(searchQuery !== "" || selectedCategory !== null) && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                    className="text-xs font-semibold text-gold-wood hover:text-gold-dark hover:underline flex items-center gap-1"
                  >
                    Reset Filters
                  </button>
                )}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product, idx) => {
                    const catInfo = categoriesData.find((c) => c.slug === product.category);
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
                            className={`block relative w-full h-[400px] md:h-[440px] rounded-2xl overflow-hidden ${
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
                        className="flex flex-col h-full overflow-hidden border border-gold-wood/10 bg-white/40"
                      >
                        {/* Product Image */}
                        <div className="relative h-56 w-full overflow-hidden image-zoom-container group">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 250px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-300 group-hover:bg-charcoal/30" />
                          <span className="absolute top-4 left-4 bg-charcoal/80 text-gold-wood text-[10px] uppercase font-bold tracking-wider px-2.5 py-1.25 rounded-md border border-gold-wood/20">
                            {product.code}
                          </span>
                        </div>

                        {/* Product Content */}
                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div className="space-y-2 mb-6">
                            <span className="text-[10px] font-bold text-gold-wood uppercase tracking-widest block">
                              {catInfo?.name || product.category}
                            </span>
                            <h3 className="font-serif text-lg font-bold text-charcoal line-clamp-1">
                              {product.name}
                            </h3>
                            <p className="text-xs text-charcoal/70 leading-relaxed line-clamp-2">
                              {product.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                            <span className="text-[10px] text-charcoal/40 font-semibold tracking-wider">
                              NESAM SIGNATURE
                            </span>
                            <Link
                              href={`/products/${product.category}/${product.slug}`}
                              className="group/btn px-4 py-2 bg-charcoal hover:bg-gold-wood text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-all duration-300 flex items-center gap-1.5"
                            >
                              <span>Details</span>
                              <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </GlassCard>
                    );
                  })}
                </div>
              ) : (
                /* No Results Fallback */
                <div className="text-center py-20 bg-white/30 rounded-2xl border border-charcoal/5">
                  <p className="text-charcoal/50 text-sm font-sans mb-4">No premium products match your filter search query.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                    className="px-6 py-2.5 bg-charcoal hover:bg-gold-wood text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Clear Search Filters
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* DEFAULT CATEGORIES LIST GRID VIEW */
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Browse by Category
                </h2>
                <span className="text-xs font-semibold text-gold-wood uppercase tracking-widest">
                  {categoriesData.length} Exclusive Sectors
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoriesData.map((cat, idx) => {
                  // Count total products in this category
                  const catProductsCount = productsData.filter((p) => p.category === cat.slug).length;
                  
                  // Get a preview image from the category image or first product
                  const previewProd = productsData.find((p) => p.category === cat.slug);
                  const previewImg = cat.image || (previewProd ? previewProd.images[0] : "");

                  return (
                    <GlassCard
                      key={cat.slug}
                      hoverEffect={true}
                      delay={idx * 0.05}
                      className="flex flex-col h-full overflow-hidden border border-gold-wood/10 bg-white/40"
                    >
                      {/* Image Preview Banner */}
                      <div className="relative h-48 w-full overflow-hidden image-zoom-container group">
                        {previewImg && (
                          <Image
                            src={previewImg}
                            alt={cat.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                            className="object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-charcoal/30 transition-opacity duration-300 group-hover:bg-charcoal/50" />
                        
                        {/* Title Floating Over Image */}
                        <div className="absolute bottom-4 left-6 right-6">
                          <span className="text-[10px] font-bold text-gold-wood uppercase tracking-widest block mb-1">
                            Showcase Collection
                          </span>
                          <h3 className="font-serif text-xl font-bold text-white leading-tight">
                            {cat.name}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div className="space-y-2 mb-6">
                          <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                            {cat.description}
                          </p>
                          <span className="inline-block text-[10px] font-semibold text-charcoal/40 bg-charcoal/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {catProductsCount} Products Listed
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                          <Link
                            href={`/products/${cat.slug}`}
                            className="text-xs font-semibold text-gold-wood hover:text-gold-dark uppercase tracking-wider flex items-center gap-1.5 group/link"
                          >
                            <span>Explore Category</span>
                            <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
