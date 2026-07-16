"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Layers, Users, HeartHandshake, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollToTop from "@/components/common/ScrollToTop";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [projectType, setProjectType] = useState("Residential");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you provide installation?",
      a: "Yes! Nesam offers professional on-site installation services for glass partitions, balustrades, shower cubicles, hydraulic doors, and premium locks. Our skilled technical team ensures precision fitting and compliance with safety load standards."
    },
    {
      q: "Do you supply commercial projects?",
      a: "Absolutely. We are a trusted bulk material supplier for hotels, commercial towers, retail showrooms, corporate offices, and apartments. Contact us directly to receive customized quantity estimates and contract quotes."
    },
    {
      q: "Can I request a quotation?",
      a: "Yes. Simply share your blueprint drawings or material requirements list through our contact form, email, or WhatsApp, and our material estimators will provide a detailed itemized quotation within 24–48 hours."
    },
    {
      q: "Do you provide home delivery?",
      a: "Yes, we arrange safe transport logistics. For large, heavy materials like toughened glass sheets and structural plywood blockboards, we use specialized wooden crating and foam protection to deliver materials damage-free directly to your site."
    },
    {
      q: "Can I visit the showroom?",
      a: "We welcome visits! Our flagship digital showroom is located on Karungal Road, Colachel. Visiting our experience showroom allows you to browse wood finishes, feel physical drawer slides, operate smart biometric locks, and review decorative glass mockups."
    }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="text-gold-wood" size={24} />,
      title: "Premium Products",
      desc: "Handpicked architectural glass and grade-A plywood conforming to strict global ISO and IS specifications."
    },
    {
      icon: <Sparkles className="text-gold-wood" size={24} />,
      title: "Expert Guidance",
      desc: "Our structural experts guide you on thickness ratings, load factors, and mechanical specs to ensure durability."
    },
    {
      icon: <Users className="text-gold-wood" size={24} />,
      title: "Trusted Quality",
      desc: "A solid reputation built on delivering premium building blocks to developers, builders, and elite home projects."
    },
    {
      icon: <Layers className="text-gold-wood" size={24} />,
      title: "Wide Product Range",
      desc: "From smart biometric locks to soft-close tandem drawer boxes, discover everything for premium interiors under one roof."
    },
    {
      icon: <HeartHandshake className="text-gold-wood" size={24} />,
      title: "Professional Support",
      desc: "Dedicated account support for architects and designers from estimation to project delivery and installation."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1500);
  };

  const handleDirectionsClick = () => {
    window.open("https://maps.google.com/?q=Karungal+Road+Colachel+Tamil+Nadu+629251", "_blank");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 font-sans bg-sand/20">
        
        {/* 1. HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-gold-wood uppercase font-sans mb-3">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
              Contact NESAM
            </h1>
            <p className="text-charcoal/70 max-w-2xl text-sm md:text-base leading-relaxed">
              Visit our showroom or contact our team for premium glass, plywood, doors, hardware, and interior solutions.
            </p>
          </div>
        </div>

        {/* 2. CONTACT DETAILS CARDS GRID */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          
          {/* Card: Address */}
          <GlassCard className="p-6 flex flex-col justify-between h-full border-gold-wood/10 bg-white/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center text-gold-dark">
                <MapPin size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal">Showroom Address</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                Nesam Glass, Plywoods & Hardware<br />
                Karungal Road, Colachel,<br />
                Tamil Nadu - 629251
              </p>
            </div>
            <button
              onClick={handleDirectionsClick}
              className="mt-6 w-full py-2 bg-charcoal hover:bg-gold-wood text-white text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors duration-300"
            >
              Get Directions
            </button>
          </GlassCard>

          {/* Card: Call */}
          <GlassCard className="p-6 flex flex-col justify-between h-full border-gold-wood/10 bg-white/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center text-gold-dark">
                <Phone size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal">Phone Enquiry</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                Reach our showroom desk directly for product availability, quotations, and quick orders.
              </p>
              <p className="text-sm font-bold text-charcoal">+91 98765 43210</p>
            </div>
            <a
              href="tel:+919876543210"
              className="mt-6 w-full py-2 border border-gold-wood hover:bg-gold-wood hover:text-white text-gold-wood text-[10px] font-bold uppercase tracking-wider rounded-lg text-center transition-colors duration-300 block"
            >
              Call Now
            </a>
          </GlassCard>

          {/* Card: Email */}
          <GlassCard className="p-6 flex flex-col justify-between h-full border-gold-wood/10 bg-white/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center text-gold-dark">
                <Mail size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal">Email Desk</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                Email us details of architectural plans, item listings, or bulk specifications.
              </p>
              <p className="text-xs font-semibold text-charcoal truncate">info@nesamhardware.com</p>
            </div>
            <a
              href="mailto:info@nesamhardware.com"
              className="mt-6 w-full py-2 border border-gold-wood hover:bg-gold-wood hover:text-white text-gold-wood text-[10px] font-bold uppercase tracking-wider rounded-lg text-center transition-colors duration-300 block"
            >
              Send Email
            </a>
          </GlassCard>

          {/* Card: Business Hours */}
          <GlassCard className="p-6 flex flex-col justify-between h-full border-gold-wood/10 bg-white/40">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center text-gold-dark">
                <Clock size={20} />
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal">Showroom Hours</h3>
              <div className="space-y-1 text-xs text-charcoal/70">
                <div className="flex justify-between">
                  <span className="font-semibold">Mon - Sat:</span>
                  <span>9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday:</span>
                  <span className="text-gold-dark">Closed</span>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg text-center transition-colors duration-300 block"
            >
              WhatsApp Us
            </a>
          </GlassCard>

        </div>

        {/* 3. CONTACT FORM & MAP SPLIT */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-charcoal text-white rounded-3xl p-8 md:p-12 border border-gold-wood/25 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-[10px] font-bold text-gold-wood uppercase tracking-[0.25em] block mb-3">Enquiry Form</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">Send Us An Enquiry</h2>
                <p className="text-white/60 text-xs md:text-sm mt-2 leading-relaxed">
                  Have a customized structural project? Share details and request a consultation call with our specialists.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-gold-wood/10 border border-gold-wood/20 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-gold-wood rounded-full flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gold-wood">Enquiry Submitted!</h3>
                  <p className="text-xs text-white/70 leading-relaxed max-w-sm mx-auto">
                    Thank you. Your message has been routed to our showroom managers. We will review your materials needs and contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-wood text-xs transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-wood text-xs transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-wood text-xs transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Project Type</label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal border border-white/10 text-white focus:outline-none focus:border-gold-wood text-xs transition-colors"
                      >
                        <option value="Residential">Residential Villa / Apartment</option>
                        <option value="Commercial">Commercial Facade / Storefront</option>
                        <option value="Office">Office Cabins & Partitions</option>
                        <option value="Interior">Furniture / Carpentry</option>
                        <option value="Other">Other Building Project</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-wood text-xs transition-colors"
                      placeholder="Quotation request for Marine Plywood..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Your Message</label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-gold-wood text-xs transition-colors resize-none"
                      placeholder="Detail your dimensions, thickness ratings, hardware models or query here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gold-wood text-white hover:bg-gold-dark disabled:bg-gold-wood/50 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-5 space-y-6 h-full flex flex-col justify-between">
            <div className="relative h-[380px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-gold-wood/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1970223788506!2d77.2917719!3d8.1829631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fa6ec24823eb%3A0xb35a092c23ba7b1d!2sKarungal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nesam Showroom Colachel Google Map"
              ></iframe>
            </div>

            {/* Map Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDirectionsClick}
                className="flex-1 py-3 bg-charcoal hover:bg-gold-wood text-white text-xs font-semibold uppercase tracking-wider rounded-xl text-center transition-colors duration-300 shadow-sm"
              >
                Directions
              </button>
              <button
                onClick={() => window.open("https://maps.google.com/?q=Karungal+Road+Colachel+Tamil+Nadu+629251", "_blank")}
                className="flex-1 py-3 border border-gold-wood hover:bg-gold-wood/10 text-gold-dark text-xs font-semibold uppercase tracking-wider rounded-xl text-center transition-colors duration-300"
              >
                Open Google Maps
              </button>
            </div>
          </div>

        </div>

        {/* 4. FAQ ACCORDION SECTION */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mb-24">
          <SectionHeading
            title="Frequently Answered Inquiries"
            subtitle="Showroom FAQ"
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gold-wood/10 overflow-hidden bg-white/40 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className="font-serif text-sm md:text-base font-bold text-charcoal">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-gold-wood transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-charcoal/5" : "max-h-0 pointer-events-none"
                    } overflow-hidden`}
                  >
                    <p className="p-6 text-xs md:text-sm text-charcoal/70 leading-relaxed font-light bg-sand/10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. WHY CHOOSE NESAM */}
        <div className="py-20 bg-sand/30 border-y border-charcoal/5 mb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeading
              title="Architectural Material Standards"
              subtitle="Why Choose NESAM"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {benefits.map((b, idx) => (
                <GlassCard key={idx} hoverEffect={true} className="flex flex-col space-y-4 bg-white/40 p-6">
                  <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center text-gold-dark shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-charcoal mb-2">{b.title}</h4>
                    <p className="text-[11px] text-charcoal/60 leading-relaxed font-light">{b.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* 6. PREMIUM FOOTER CTA */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <GlassCard dark={true} className="relative overflow-hidden py-16 px-8 md:px-16 border-gold-wood/20 bg-charcoal text-center">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.12)_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-semibold tracking-[0.3em] text-gold-wood uppercase block">Showroom Visit</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                Need Premium Building Materials? <br />
                <span className="text-gold-wood font-normal italic">Visit Our Showroom Today</span>
              </h2>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
                Discuss specs with our materials engineers, touch samples of veneers, and pick the perfect lock and glass combinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="tel:+919876543210"
                  className="px-6 py-3 bg-gold-wood hover:bg-gold-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  WhatsApp Support
                </a>
                <button
                  onClick={handleDirectionsClick}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </GlassCard>
        </div>

      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
