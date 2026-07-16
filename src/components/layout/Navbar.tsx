"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isDarkHero = pathname === "/" && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-nav py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col group select-none">
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-widest transition-colors duration-300 ${
            isDarkHero ? "text-white" : "text-charcoal"
          } group-hover:text-gold-wood`}>
            NESAM
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-gold-wood uppercase font-semibold font-sans mt-0.5">
            Glass, Plywoods & Hardware
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  isActive 
                    ? "text-gold-wood" 
                    : (isDarkHero ? "text-white/80 hover:text-white" : "text-charcoal/80 hover:text-charcoal")
                }`}
              >
                {link.name}
                {/* Underline Slide Animation */}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] bg-gold-wood transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+919876543210"
            className={`flex items-center space-x-2 text-sm font-sans tracking-wider uppercase transition-colors duration-300 ${
              isDarkHero ? "text-white" : "text-charcoal"
            } hover:text-gold-wood`}
          >
            <Phone size={16} className="text-gold-wood" />
            <span className="font-semibold">+91 98765 43210</span>
          </a>
          <Link
            href="/contact"
            className={`px-6 py-2.5 rounded-full border transition-all duration-300 text-xs font-semibold uppercase tracking-widest shadow-sm hover:shadow-md ${
              isDarkHero 
                ? "border-white/40 text-white hover:bg-white hover:text-charcoal" 
                : "border-gold-wood text-gold-wood hover:bg-gold-wood hover:text-white"
            }`}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors focus:outline-none ${
            isDarkHero ? "text-white" : "text-charcoal"
          } hover:text-gold-wood`}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[76px] z-40 bg-warm-white/95 backdrop-blur-md transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-2xl font-semibold tracking-wide border-b border-charcoal/5 pb-4 transition-colors ${
                  isActive ? "text-gold-wood" : "text-charcoal/70"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="pt-6 flex flex-col space-y-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-3 text-lg text-charcoal"
            >
              <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center">
                <Phone size={18} className="text-gold-dark" />
              </div>
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-lg text-charcoal"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <MessageSquare size={18} className="text-emerald-600" />
              </div>
              <span className="font-medium">WhatsApp Support</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-charcoal text-white rounded-xl uppercase tracking-widest text-sm font-semibold hover:bg-gold-wood transition-colors mt-4"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
