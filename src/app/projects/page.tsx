"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Layers, Sparkles, Filter, X, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";
import GlassCard from "@/components/ui/GlassCard";
import { projectsData, projectCategories } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on search query and category
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 font-sans bg-sand/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-8">
            <Link href="/" className="hover:text-gold-wood flex items-center gap-1 transition-colors">
              <Home size={12} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-gold-wood">Projects</span>
          </nav>

          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold-wood uppercase font-sans mb-3">
              Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
              Our Projects
            </h1>
            <p className="text-charcoal/70 max-w-3xl text-sm md:text-base leading-relaxed">
              Explore our completed residential, commercial, office, showroom, and interior projects showcasing premium glass, plywood, doors, hardware, wardrobes, modular kitchens, and architectural solutions.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col gap-6 p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-gold-wood/10 shadow-sm mb-12">
            
            {/* Category Pills (Row Scrollable on Mobile) */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-charcoal/50 uppercase tracking-widest flex items-center gap-1.5">
                <Filter size={12} className="text-gold-wood" />
                Filter by Category
              </span>
              <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar pb-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shrink-0 border ${
                    selectedCategory === null
                      ? "bg-charcoal text-white border-charcoal"
                      : "bg-white/60 text-charcoal/70 border-charcoal/10 hover:border-gold-wood/50"
                  }`}
                >
                  All Projects
                </button>
                {projectCategories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shrink-0 border ${
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

            {/* Bottom Row: Local Text Search & Count */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-charcoal/5">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search projects or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-charcoal/10 bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold-wood text-xs text-charcoal transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-3 flex items-center text-charcoal/40 hover:text-charcoal"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-wider">
                Showing {filteredProjects.length} of {projectsData.length} Projects
              </span>
            </div>

          </div>

          {/* Grid Layout of Projects */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project, idx) => {
                const catObj = projectCategories.find((c) => c.slug === project.category);
                return (
                  <GlassCard
                    key={project.slug}
                    hoverEffect={true}
                    delay={idx % 6 * 0.05}
                    className="flex flex-col h-full overflow-hidden border border-gold-wood/10 bg-white/50"
                  >
                    {/* Large Hero Image */}
                    <div className="relative h-64 w-full overflow-hidden image-zoom-container group">
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-300 group-hover:bg-charcoal/30" />
                      
                      {/* Floating Badge */}
                      <span className="absolute top-4 left-4 bg-charcoal/80 text-gold-wood text-[9px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-md border border-gold-wood/20">
                        {catObj?.name || project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-4 text-[10px] text-charcoal/50 font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="text-gold-wood" />
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} className="text-gold-wood" />
                            {project.year}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-charcoal leading-snug line-clamp-1">
                          {project.name}
                        </h3>
                        <p className="text-xs text-charcoal/70 leading-relaxed line-clamp-3 font-light">
                          {project.description}
                        </p>
                      </div>

                      {/* Products Used Badges */}
                      <div className="space-y-1.5 border-t border-charcoal/5 pt-4">
                        <span className="text-[9px] font-bold text-charcoal/40 uppercase tracking-wider block">Products Installed</span>
                        <div className="flex flex-wrap gap-1">
                          {project.productsUsed.map((prod, pidx) => (
                            <span key={pidx} className="text-[9px] bg-gold-light/40 border border-gold-wood/10 text-gold-dark px-2 py-0.5 rounded font-sans font-semibold">
                              {prod.split(" ")[0]} {/* Show code prefix */}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Details Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-charcoal/5">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-xs font-bold text-gold-wood hover:text-gold-dark uppercase tracking-widest flex items-center gap-1 group/link"
                        >
                          <span>View Project</span>
                          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/30 rounded-2xl border border-charcoal/5">
              <p className="text-charcoal/50 text-sm font-sans mb-4">No completed projects match your search or filter parameters.</p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 bg-charcoal hover:bg-gold-wood text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
              >
                Clear Search
              </button>
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
