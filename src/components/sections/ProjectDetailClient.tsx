"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Home, ChevronRight, CheckCircle, ShieldCheck, MapPin, Calendar, Clock, Star, MessageSquare } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { Project, projectCategories, getPrevAndNextProject, getRelatedProjects } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState(`Hello, I am interested in building a project similar to "${project.name}" in ${project.location}. Please share material details.`);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { prev, next } = getPrevAndNextProject(project);
  const related = getRelatedProjects(project, 3);
  const catObj = projectCategories.find((c) => c.slug === project.category);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Simulate WhatsApp contact or simply confirm
      const encodedMsg = encodeURIComponent(
        `Hi Nesam! I am inquiring about the project: ${project.name} (${project.category}). My Name: ${inquiryName}. Message: ${inquiryMessage}`
      );
      window.open(`https://wa.me/919876543210?text=${encodedMsg}`, "_blank");
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 font-sans">
      
      {/* 1. BREADCRUMBS */}
      <nav className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-12 pt-4">
        <Link href="/" className="hover:text-gold-wood flex items-center gap-1 transition-colors">
          <Home size={12} />
          <span>Home</span>
        </Link>
        <ChevronRight size={10} className="text-charcoal/30" />
        <Link href="/projects" className="hover:text-gold-wood transition-colors">
          Projects
        </Link>
        <ChevronRight size={10} className="text-charcoal/30" />
        <span className="text-gold-wood truncate max-w-[200px]">{project.name}</span>
      </nav>

      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-bold text-gold-wood hover:text-gold-dark uppercase tracking-widest transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        <span>Back to Projects</span>
      </Link>

      {/* 2. PROJECT HERO BANNER DETAILS */}
      <div className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-gold-wood/10 shadow-lg mb-16 bg-charcoal">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <div className="absolute bottom-10 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
          <div className="space-y-3 text-white">
            <span className="text-[10px] font-bold text-gold-wood bg-gold-wood/10 border border-gold-wood/25 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block">
              {catObj?.name || project.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              {project.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/80 uppercase font-bold tracking-wider pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-gold-wood" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-gold-wood" />
                {project.year}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-gold-wood" />
                {project.timeline} Duration
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COLLABORATION SECTION: OVERVIEW, SCOPE, TIMELINE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
        
        {/* Left Column: Scope, Materials & Highlights */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
              Project Overview
            </h2>
            <div className="h-0.5 bg-gold-wood/40 w-16" />
            <p className="text-charcoal/80 text-sm md:text-base leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          {/* Highlights */}
          <div className="p-6 bg-gold-light/25 border border-gold-wood/15 rounded-2xl">
            <h3 className="font-serif text-lg font-bold text-gold-dark mb-4 flex items-center gap-2">
              <Star size={18} className="fill-gold-wood stroke-gold-wood" />
              <span>Project Highlights</span>
            </h3>
            <ul className="space-y-2 text-xs text-charcoal/80">
              {project.highlights.map((high, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-gold-wood shrink-0 mt-0.5" />
                  <span className="font-medium">{high}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scope of Work & Materials Used */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Scope */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-charcoal">Scope of Work</h3>
              <ul className="space-y-3">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-wood shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-charcoal">Key Materials Used</h3>
              <ul className="space-y-3">
                {project.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/70">
                    <ShieldCheck size={14} className="text-gold-wood shrink-0 mt-0.5" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Specifications & Summary Details */}
        <div className="lg:col-span-4 space-y-8">
          <GlassCard className="p-8 border border-gold-wood/10 bg-white/40 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-charcoal mb-6 border-b border-charcoal/5 pb-4">
              Project Specification
            </h3>
            <ul className="space-y-4 text-xs font-sans">
              <li className="flex justify-between items-center py-2 border-b border-charcoal/5">
                <span className="font-bold text-charcoal/40 uppercase tracking-wider">Location</span>
                <span className="font-semibold text-charcoal/80">{project.location}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-charcoal/5">
                <span className="font-bold text-charcoal/40 uppercase tracking-wider">Category</span>
                <span className="font-semibold text-charcoal/80 capitalize">{catObj?.name || project.category}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-charcoal/5">
                <span className="font-bold text-charcoal/40 uppercase tracking-wider">Year</span>
                <span className="font-semibold text-charcoal/80">{project.year}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-charcoal/5">
                <span className="font-bold text-charcoal/40 uppercase tracking-wider">Timeline</span>
                <span className="font-semibold text-charcoal/80">{project.timeline}</span>
              </li>
            </ul>
          </GlassCard>

          {/* Installed Products Grid */}
          <GlassCard className="p-8 border border-gold-wood/10 bg-white/40 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-charcoal mb-6 border-b border-charcoal/5 pb-4">
              Products Installed
            </h3>
            <div className="flex flex-col gap-3">
              {project.productsUsed.map((prod, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs p-3 bg-white/50 border border-charcoal/5 rounded-xl">
                  <span className="font-semibold text-charcoal/85">{prod}</span>
                  <span className="text-[10px] font-bold text-gold-wood bg-charcoal/5 px-2 py-0.5 rounded font-mono">
                    NES-SPEC
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>

      {/* 4. IMAGES COLLAGE GALLERY (8-12 Images) */}
      <div className="space-y-8 mb-24">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
            Project Image Gallery
          </h2>
          <span className="text-xs font-semibold text-gold-wood uppercase tracking-widest">
            {project.images.length} High-Res Frames
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {project.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="relative h-60 w-full rounded-2xl overflow-hidden border border-charcoal/5 hover:border-gold-wood/50 hover:scale-[1.01] shadow-sm transition-all duration-300 group"
            >
              <Image
                src={img}
                alt={`${project.name} Gallery Frame ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 250px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-6 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Lightbox View"
              fill
              sizes="100vw"
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full p-2.5 transition-colors focus:outline-none"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 5. CUSTOMER REVIEW PANEL */}
      <div className="mb-24">
        <GlassCard className="p-8 md:p-12 border-gold-wood/10 bg-white/40 relative overflow-hidden">
          <div className="absolute top-6 right-8 text-gold-wood/10 font-serif text-[120px] leading-none pointer-events-none select-none">
            “
          </div>
          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="flex items-center space-x-1">
              {[...Array(project.review.rating)].map((_, idx) => (
                <Star key={idx} size={18} className="fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <p className="font-serif text-lg md:text-xl italic text-charcoal/90 leading-relaxed">
              &ldquo;{project.review.comment}&rdquo;
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="w-12 h-12 rounded-full bg-gold-wood/25 flex items-center justify-center text-gold-dark font-serif font-bold text-sm">
                {project.review.name.replace("Er. ", "").replace("Dr. ", "").charAt(0)}
              </div>
              <div className="font-sans">
                <h4 className="text-sm font-bold text-charcoal leading-none">{project.review.name}</h4>
                <span className="text-[11px] text-charcoal/50 font-medium mt-1 block">{project.review.role}</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* 6. CONTEXTUAL INQUIRY FORM */}
      <div className="mb-24 bg-charcoal text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gold-wood/25">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        <div className="relative z-10 max-w-xl">
          <span className="text-[10px] font-bold text-gold-wood uppercase tracking-[0.25em] block mb-3">Enquiry</span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-4">
            Enquire About Similar Project
          </h3>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-8">
            Interested in materials or design layout used in the **{project.name}**? Get in touch with our team for consultations and estimates.
          </p>

          {formSubmitted ? (
            <div className="p-6 bg-gold-wood/10 border border-gold-wood/20 rounded-2xl text-center space-y-2">
              <h4 className="font-serif text-lg font-bold text-gold-wood">Enquiry Pending Launch!</h4>
              <p className="text-xs text-white/70">Connecting you to WhatsApp for direct chat...</p>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-wood text-xs transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-wood text-xs transition-colors"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Message"
                required
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-wood text-xs transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gold-wood text-white hover:bg-gold-dark rounded-xl text-xs font-bold uppercase tracking-widest shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Enquiry via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>

      {/* 7. PREV & NEXT NAVIGATION RIBBON */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6 border-y border-charcoal/10 py-8 mb-24 bg-white/20 backdrop-blur-md px-6 md:px-10 rounded-3xl">
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex flex-col items-start text-left sm:w-1/2 p-4 rounded-2xl hover:bg-white/40 transition-colors"
        >
          <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest flex items-center gap-1 mb-2">
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-0.5" />
            Previous Project
          </span>
          <span className="font-serif text-sm md:text-base font-bold text-charcoal group-hover:text-gold-wood transition-colors">
            {prev.name}
          </span>
        </Link>

        {/* Divider */}
        <div className="hidden sm:block w-[1px] bg-charcoal/10 self-stretch" />

        <Link
          href={`/projects/${next.slug}`}
          className="group flex flex-col items-end text-right sm:w-1/2 p-4 rounded-2xl hover:bg-white/40 transition-colors"
        >
          <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest flex items-center gap-1 mb-2">
            Next Project
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-serif text-sm md:text-base font-bold text-charcoal group-hover:text-gold-wood transition-colors">
            {next.name}
          </span>
        </Link>
      </div>

      {/* 8. RELATED PROJECTS SHOWCASE */}
      {related.length > 0 && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
              Related Showcase Projects
            </h3>
            <span className="text-xs font-semibold text-gold-wood uppercase tracking-widest">
              Aesthetic Portfolios
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {related.map((p) => {
              const rCat = projectCategories.find((c) => c.slug === p.category);
              return (
                <GlassCard
                  key={p.slug}
                  hoverEffect={true}
                  className="flex flex-col h-full overflow-hidden border border-gold-wood/10 bg-white/40"
                >
                  <div className="relative h-48 w-full overflow-hidden image-zoom-container group">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      sizes="250px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal/15 transition-opacity duration-300 group-hover:bg-charcoal/25" />
                    <span className="absolute top-4 left-4 bg-charcoal/90 text-gold-wood text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded">
                      {rCat?.name || p.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <h4 className="font-serif text-base font-bold text-charcoal line-clamp-1 mb-3">
                      {p.name}
                    </h4>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-xs font-bold text-gold-wood hover:text-gold-dark uppercase tracking-widest flex items-center gap-1 group/link"
                    >
                      <span>Explore</span>
                      <ChevronRight size={12} className="transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
