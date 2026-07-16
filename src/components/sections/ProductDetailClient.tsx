"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Home, ChevronRight, CheckCircle, Shield, Award, Sparkles, HelpCircle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { Product, Category, getRelatedProducts, getPrevAndNextProduct } from "@/data/products";

interface ProductDetailClientProps {
  product: Product;
  category: Category;
}

export default function ProductDetailClient({ product, category }: ProductDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const relatedProducts = getRelatedProducts(product, 4);
  const { prev, next } = getPrevAndNextProduct(product);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 font-sans">
      
      {/* 1. BREADCRUMBS */}
      <nav className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-12 pt-4">
        <Link href="/" className="hover:text-gold-wood flex items-center gap-1 transition-colors">
          <Home size={12} />
          <span>Home</span>
        </Link>
        <ChevronRight size={10} className="text-charcoal/30" />
        <Link href="/products" className="hover:text-gold-wood transition-colors">
          Products
        </Link>
        <ChevronRight size={10} className="text-charcoal/30" />
        <Link href={`/products/${category.slug}`} className="hover:text-gold-wood transition-colors">
          {category.name}
        </Link>
        <ChevronRight size={10} className="text-charcoal/30" />
        <span className="text-gold-wood truncate max-w-[200px]">{product.name}</span>
      </nav>

      {/* Back Button */}
      <Link
        href={`/products/${category.slug}`}
        className="inline-flex items-center gap-2 text-xs font-bold text-gold-wood hover:text-gold-dark uppercase tracking-widest transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        <span>Back to {category.name}</span>
      </Link>

      {/* 2. PRODUCT MASTER DETAIL BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
        
        {/* Left Column: Interactive Image Gallery */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Showcase Image */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-gold-wood/10 shadow-lg bg-white">
            <Image
              src={product.images[activeImageIndex]}
              alt={`${product.name} Showcase`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover transition-all duration-500 ease-out"
            />
            {/* Float Code Badge */}
            <div className="absolute top-6 left-6 bg-charcoal/90 backdrop-blur-md text-gold-wood text-xs font-bold tracking-widest px-4 py-2 rounded-xl border border-gold-wood/25 shadow-md">
              CODE: {product.code}
            </div>
          </div>

          {/* Alternate Thumbnail Selector */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImageIndex === idx
                      ? "border-gold-wood ring-2 ring-gold-wood/20 scale-[0.98]"
                      : "border-charcoal/5 hover:border-gold-wood/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} detail view ${idx + 1}`}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                  {activeImageIndex !== idx && (
                    <div className="absolute inset-0 bg-white/10 hover:bg-transparent transition-colors duration-200" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Description & Specifications */}
        <div className="lg:col-span-6 space-y-8">
          {/* Title & Metadata */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-gold-wood bg-gold-light/50 border border-gold-wood/20 px-3 py-1 rounded-full uppercase tracking-widest">
                {category.name}
              </span>
              <span className="text-[10px] font-bold text-charcoal/50 bg-charcoal/5 px-3 py-1 rounded-full uppercase tracking-wider">
                Original Product
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-tight">
              {product.name}
            </h2>
            <div className="h-0.5 bg-gold-wood/30 w-20" />
          </div>

          {/* Short Description */}
          <p className="text-charcoal/80 text-sm md:text-base leading-relaxed font-light">
            {product.description}
          </p>

          {/* Available Finishes */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-charcoal/50 uppercase tracking-wider block">Available Finishes</span>
            <div className="flex flex-wrap gap-2">
              {product.finishes.map((finish, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white border border-charcoal/5 px-4 py-2 rounded-xl text-charcoal/80 font-semibold shadow-sm hover:border-gold-wood transition-colors duration-200"
                >
                  {finish}
                </span>
              ))}
            </div>
          </div>

          {/* Features & Applications tabs/lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-charcoal/5">
            {/* Features */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-charcoal flex items-center gap-2">
                <Sparkles size={18} className="text-gold-wood" />
                <span>Key Features</span>
              </h4>
              <ul className="space-y-3">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/70 leading-normal">
                    <CheckCircle size={14} className="text-gold-wood shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-charcoal flex items-center gap-2">
                <HelpCircle size={18} className="text-gold-wood" />
                <span>Applications</span>
              </h4>
              <ul className="space-y-3">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/70 leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-wood shrink-0 mt-2" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="space-y-4 pt-6 border-t border-charcoal/5">
            <h4 className="font-serif text-lg font-bold text-charcoal flex items-center gap-2">
              <Award size={18} className="text-gold-wood" />
              <span>Technical Specifications</span>
            </h4>
            <div className="rounded-2xl border border-charcoal/5 overflow-hidden shadow-sm bg-white/40">
              <table className="w-full text-left border-collapse text-xs">
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-charcoal/5 last:border-0 ${
                        idx % 2 === 0 ? "bg-white/20" : "bg-transparent"
                      }`}
                    >
                      <td className="px-6 py-3.5 font-bold text-charcoal/50 uppercase tracking-wider w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-3.5 font-semibold text-charcoal/80">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* 3. PREV & NEXT PRODUCT NAVIGATION ROW */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6 border-y border-charcoal/10 py-8 mb-24 bg-white/20 backdrop-blur-md px-6 md:px-10 rounded-3xl">
        <Link
          href={`/products/${prev.category}/${prev.slug}`}
          className="group flex flex-col items-start text-left sm:w-1/2 p-4 rounded-2xl hover:bg-white/40 transition-colors"
        >
          <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest flex items-center gap-1 mb-2">
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-0.5" />
            Previous Product
          </span>
          <span className="font-serif text-sm md:text-base font-bold text-charcoal group-hover:text-gold-wood transition-colors">
            {prev.name}
          </span>
        </Link>

        {/* Vertical divider */}
        <div className="hidden sm:block w-[1px] bg-charcoal/10 self-stretch" />

        <Link
          href={`/products/${next.category}/${next.slug}`}
          className="group flex flex-col items-end text-right sm:w-1/2 p-4 rounded-2xl hover:bg-white/40 transition-colors"
        >
          <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest flex items-center gap-1 mb-2">
            Next Product
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-serif text-sm md:text-base font-bold text-charcoal group-hover:text-gold-wood transition-colors">
            {next.name}
          </span>
        </Link>
      </div>

      {/* 4. RELATED PRODUCTS GRID */}
      {relatedProducts.length > 0 && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
              Related Showcase Products
            </h3>
            <span className="text-xs font-semibold text-gold-wood uppercase tracking-widest">
              Same Category
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <GlassCard
                key={p.slug}
                hoverEffect={true}
                className="flex flex-col h-full overflow-hidden border border-gold-wood/10 bg-white/40"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden image-zoom-container group">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-300 group-hover:bg-charcoal/20" />
                  <span className="absolute top-4 left-4 bg-charcoal/90 text-gold-wood text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded">
                    {p.code}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="space-y-1 mb-4">
                    <h4 className="font-serif text-sm font-bold text-charcoal line-clamp-1">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-charcoal/50 truncate">
                      {p.finishes.join(" • ")}
                    </p>
                  </div>
                  <Link
                    href={`/products/${p.category}/${p.slug}`}
                    className="text-xs font-bold text-gold-wood hover:text-gold-dark uppercase tracking-widest flex items-center gap-1 group/link"
                  >
                    <span>View details</span>
                    <ChevronRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
