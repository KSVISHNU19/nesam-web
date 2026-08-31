"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { categoriesData } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productCategories = categoriesData.slice(0, 6).map((cat) => ({
    name: cat.name,
    href: `/products/${cat.slug}`,
  }));

  const quickLinks = [
    { name: "Home Showcase", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "Projects Gallery", href: "/projects" },
    { name: "Contact Showroom", href: "/contact" },
  ];

  return (
    <footer className="bg-charcoal text-white pt-20 pb-8 border-t border-gold-wood/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Description */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-1 border border-gold-wood/30 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/nesam-logo.png"
                alt="Nesam Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-white group-hover:text-gold-wood transition-colors">
                NESAM
              </span>
              <span className="text-[9px] tracking-[0.2em] text-gold-wood uppercase font-semibold mt-0.5">
                Glass, Plywoods & Hardware
              </span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed font-sans max-w-sm">
            A premium digital showroom displaying luxury architectural glass, designer plywoods, exclusive laminates, and high-end hardware. Crafted for modern interior spaces, residences, and commercial designs.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-gold-wood hover:border-gold-wood transition-all duration-300"
              aria-label="WhatsApp Support"
            >
              <MessageSquare size={18} />
            </a>
            <a
              href="tel:+919876543210"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-gold-wood hover:border-gold-wood transition-all duration-300"
              aria-label="Call Office"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-serif text-lg font-semibold tracking-wider text-gold-wood uppercase">
            Quick Links
          </h3>
          <ul className="space-y-3 font-sans text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <span className="hover:translate-x-1 transition-transform duration-200">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-serif text-lg font-semibold tracking-wider text-gold-wood uppercase">
            Categories
          </h3>
          <ul className="space-y-3 font-sans text-sm">
            {productCategories.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="text-white/60 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <span className="hover:translate-x-1 transition-transform duration-200">
                    {cat.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info & Map Embed */}
        <div className="flex flex-col space-y-6">
          <h3 className="font-serif text-lg font-semibold tracking-wider text-gold-wood uppercase">
            Our Showroom
          </h3>
          <ul className="space-y-3 font-sans text-sm text-white/70">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold-wood shrink-0 mt-0.5" />
              <span>
                124, Premium Architectural Lane, Sector-4,<br />
                Near Design Center, Chennai, Tamil Nadu - 600001
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold-wood shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold-wood shrink-0" />
              <a href="mailto:info@nesammaterials.com" className="hover:text-white transition-colors">
                info@nesammaterials.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Clock size={18} className="text-gold-wood shrink-0" />
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 transition-opacity duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8530349605335!2d80.20786967584126!3d13.044941913295982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ef22e8ec5d%3A0xe54ef92c19ba6b1!2sT-Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nesam Showroom Google Map Location"
          ></iframe>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-white/40 space-y-4 md:space-y-0">
        <div>
          &copy; {currentYear} Nesam Glass, Plywoods & Hardware. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Showroom
          </Link>
        </div>
      </div>
    </footer>
  );
}
