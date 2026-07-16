"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Default phone number from Navbar
  const message = "Hello! I am interested in your premium glass, plywood, and hardware solutions. Please guide me.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center transition-shadow cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} className="fill-white text-[#25D366]" />
    </motion.a>
  );
}
