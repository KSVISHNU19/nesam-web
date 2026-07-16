"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
  dark?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = false,
  delay = 0,
  dark = false,
}: GlassCardProps) {
  const cardClass = dark ? "glass-card-dark" : "glass-card";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.3 } } : undefined}
      className={`rounded-2xl transition-all duration-300 ${cardClass} ${
        hoverEffect ? "reflection-sweep shadow-luxury hover:shadow-luxury-hover" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
