"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Layers, 
  Store, 
  Users, 
  Truck, 
  Sparkles, 
  Smile, 
  HeartHandshake, 
  ArrowRight,
  HelpCircle
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductsSection from "@/components/sections/ProductsSection";

export default function Home() {
  
  const stats = [
    { number: "10+", label: "Years of Trust" },
    { number: "2000+", label: "Happy Homeowners" },
    { number: "300+", label: "Completed Projects" },
    { number: "1000+", label: "Products Available" },
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="text-gold-wood" size={24} />,
      title: "Premium Quality",
      desc: "Handpicked architectural glass and grade-A plywood conforming to international standards."
    },
    {
      icon: <Layers className="text-gold-wood" size={24} />,
      title: "Wide Product Collection",
      desc: "Thousands of designs in decorative glass, mirrors, luxury veneers, and premium hardware under one roof."
    },
    {
      icon: <Store className="text-gold-wood" size={24} />,
      title: "Trusted Local Business",
      desc: "A decade of reputation in building trust and delivering premium materials to local developers."
    },
    {
      icon: <Users className="text-gold-wood" size={24} />,
      title: "Experienced Team",
      desc: "Our architectural experts help you select materials that balance structural strength and pure aesthetics."
    },
    {
      icon: <Truck className="text-gold-wood" size={24} />,
      title: "Reliable Service",
      desc: "Prompt logistics, safe transport packaging, and site delivery support for all large orders."
    },
    {
      icon: <Sparkles className="text-gold-wood" size={24} />,
      title: "Modern Interior Solutions",
      desc: "Curated collections in line with the latest global luxury design trends."
    },
    {
      icon: <Smile className="text-gold-wood" size={24} />,
      title: "Customer Satisfaction",
      desc: "A stellar 4.9-star track record of customer satisfaction, with dedicated post-sales support."
    },
    {
      icon: <HeartHandshake className="text-gold-wood" size={24} />,
      title: "Professional Support",
      desc: "Direct consultation for architects, builders, and interior designers, from planning to installation."
    },
    {
      icon: <HelpCircle className="text-gold-wood" size={24} />,
      title: "Material Guidance",
      desc: "Detailed technical specifications, load analysis, and durability audits for all hardware products."
    }
  ];

  const steps = [
    { num: "01", name: "Personal Consultation", desc: "Speak with our materials specialists to share your design blueprints and project requirements." },
    { num: "02", name: "Premium Selection", desc: "Explore customized options in decorative glass styles, wood grades, laminates, and premium hardware." },
    { num: "03", name: "Expert Material Guidance", desc: "Get engineering and design recommendations including thickness, transparency levels, and compatibility." },
    { num: "04", name: "Safe Delivery & Support", desc: "Safe transport with professional crating systems to ensure materials arrive flawless at your job site." }
  ];

  const reviews = [
    {
      name: "Ar. Rajesh Raghavan",
      role: "Lead Architect, Aura Design Studio",
      review: "For high-end residential projects, we need customized glass partitions and high-grade laminates. Nesam has consistently delivered flawless materials. Their service and material guidance is unparalleled.",
      rating: 5
    },
    {
      name: "Preethi Krishnan",
      role: "Homeowner, Chennai",
      review: "We designed our luxury kitchen using Nesam's laminates and hardware accessories. The quality is amazing. It looks incredibly premium and expensive, and the hardware handles feel heavy and durable.",
      rating: 5
    },
    {
      name: "Suresh Kumar",
      role: "Managing Director, SK Builders",
      review: "Nesam is our trusted partner for toughened glass facades and architectural hardware. They provide precise specifications, fast deliveries, and competitive quotes for commercial requirements.",
      rating: 5
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Dark Luxury Ambient Background */}
        <div className="absolute inset-0 z-0 bg-charcoal overflow-hidden">
          {/* Subtle Ambient Glow Effects */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold-wood/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-gold-wood/10 blur-[150px] pointer-events-none" />
          <div className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-gold-wood/15 blur-[100px] pointer-events-none" />
          
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.12)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
          
          {/* Soft Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 flex flex-col space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-4"
            >
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold-wood uppercase font-sans">
                PREMIUM BUILDING MATERIALS
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Premium Glass, <br />
                Plywood & <br />
                <span className="text-gold-wood font-normal italic">Hardware Solutions</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 font-sans text-base md:text-lg max-w-xl leading-relaxed"
            >
              Providing premium-quality glass, plywood, doors, laminates, locks, and architectural hardware for residential and commercial projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
            >
              <Link
                href="/products"
                className="group px-8 py-4 bg-charcoal text-white hover:bg-gold-wood rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-gold-wood/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Products</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/70 backdrop-blur-md text-charcoal hover:bg-white border border-charcoal/10 hover:border-gold-wood rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Quality badges below buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-6 text-white/85 text-xs font-semibold uppercase tracking-wider font-sans"
            >
              <span className="flex items-center"><span className="text-gold-wood mr-2">✔</span>Premium Quality</span>
              <span className="flex items-center"><span className="text-gold-wood mr-2">✔</span>Trusted Service</span>
              <span className="flex items-center"><span className="text-gold-wood mr-2">✔</span>Wide Product Range</span>
              <span className="flex items-center"><span className="text-gold-wood mr-2">✔</span>Expert Guidance</span>
            </motion.div>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-gold-wood" />
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-6 md:px-12 w-full mb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <GlassCard key={i} hoverEffect={true} delay={i * 0.1} className="py-8 px-6 text-center">
              <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal block mb-2">
                {stat.number}
              </span>
              <span className="text-[11px] md:text-xs font-semibold tracking-widest text-gold-wood uppercase font-sans">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" className="py-24 bg-sand/30 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Split layout: Text details */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-gold-wood uppercase font-sans">
                Crafting Excellence
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                Luxury Materials For Inspiring Spaces
              </h2>
              <div className="h-0.5 bg-gold-wood/40 w-16" />
              
              <p className="text-charcoal/80 font-sans text-base leading-relaxed mt-4">
                Since our inception, Nesam Glass, Plywoods & Hardware has served as a premier showroom supplying first-rate building materials to architects, interior designers, builders, and discerning homeowners. We curatethe finest, highest-grade design essentials.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 font-sans">
                <div className="flex flex-col space-y-2">
                  <h4 className="font-serif text-lg font-bold text-charcoal flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-wood" />
                    <span>Our Mission</span>
                  </h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    To supply flawless, high-durability products that elevate structural soundness and visual style.
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h4 className="font-serif text-lg font-bold text-charcoal flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-wood" />
                    <span>Our Vision</span>
                  </h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    To become the signature choice showroom for luxury interior design materials in our region.
                  </p>
                </div>
              </div>

              <div className="p-4 border-l-2 border-gold-wood bg-gold-light/20 rounded-r-xl mt-6">
                <p className="text-xs md:text-sm italic font-medium text-gold-dark leading-relaxed">
                  &ldquo;Trusted by regional developers, architects, and over 5,000+ satisfied homeowners.&rdquo;
                </p>
              </div>
            </div>

            {/* Split layout: Luxury image */}
            <div className="lg:col-span-6 relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-gold-wood/10">
              <Image
                src="/images/about-us-hero.png"
                alt="Nesam Glass showroom luxury split display"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
              <div className="absolute bottom-6 left-6 right-6">
                <GlassCard dark={true} hoverEffect={false} className="py-6 px-6 bg-charcoal/80 border-white/10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gold-wood flex items-center justify-center text-white text-lg font-bold shrink-0">
                      10
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white">Premium Service</h4>
                      <p className="text-white/60 text-xs mt-0.5">Delivering architectural components for luxury spaces.</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES SHOWCASE */}
      <ProductsSection />

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-sand/30 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            title="The Standards of Nesam Showroom"
            subtitle="Why Choose Us"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {benefits.map((benefit, i) => (
              <GlassCard key={i} hoverEffect={true} delay={i * 0.05} className="flex flex-col space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center text-gold-dark shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR TIMELINE PROCESS */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeading
          title="From Blueprint to Safe Delivery"
          subtitle="Our Process"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative font-sans">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col space-y-4 group">
              {/* Connecting line for desktop */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-[1px] bg-gold-wood/20 -z-10" />
              )}
              
              <div className="flex items-center space-x-4">
                <span className="font-serif text-4xl font-normal text-gold-wood/40 tracking-wider">
                  {step.num}
                </span>
                <span className="w-8 h-[1px] bg-gold-wood/20 lg:hidden" />
              </div>
              
              <h3 className="font-serif text-lg font-bold text-charcoal pt-2 group-hover:text-gold-dark transition-colors">
                {step.name}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS */}
      <section className="py-24 bg-sand/30 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            title="What Architects & Homeowners Say"
            subtitle="Customer Reviews"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, i) => (
              <GlassCard key={i} hoverEffect={true} delay={i * 0.1} className="flex flex-col justify-between space-y-6 h-full">
                {/* Testimonial Core */}
                <div className="flex flex-col space-y-4">
                  {/* Google style rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <span key={idx} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-charcoal/80 text-sm leading-relaxed italic font-sans">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                {/* Profile bio */}
                <div className="flex items-center space-x-3 border-t border-charcoal/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gold-wood/20 flex items-center justify-center text-gold-dark font-serif font-bold text-sm shrink-0">
                    {rev.name.replace("Ar. ", "").charAt(0)}
                  </div>
                  <div className="font-sans">
                    <h4 className="text-sm font-bold text-charcoal leading-none">
                      {rev.name}
                    </h4>
                    <span className="text-[11px] text-charcoal/50 font-medium mt-1 block">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Trust Link */}
          <div className="text-center mt-12 font-sans">
            <p className="text-xs text-charcoal/50 flex items-center justify-center space-x-1">
              <span>Verified 5.0 Rating based on Google Maps reviews.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 8. PREMIUM CTA SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <GlassCard dark={true} hoverEffect={false} className="relative overflow-hidden text-center py-16 px-8 md:px-16 border-gold-wood/20 bg-charcoal">
          {/* Subtle gold grid overlay in background */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.15)_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
            <span className="text-xs font-semibold tracking-[0.3em] text-gold-wood uppercase font-sans">
              Schedule A Showroom Visit
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Select Premium Materials for Your Project?
            </h2>
            <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed max-w-xl">
              Partner with Nesam. Request a material consultation with our specialists, browse design mockups, and get a customized proposal for your building.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 w-full justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-gold-wood text-white hover:bg-gold-dark rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-gold-wood/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Request Material Call
              </Link>
              <Link
                href="/products"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              >
                Browse Catalog Showcase
              </Link>
            </div>
          </div>
        </GlassCard>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
