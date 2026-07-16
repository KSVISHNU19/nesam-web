"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignmentClass = 
    align === "left" 
      ? "text-left items-start" 
      : align === "right" 
      ? "text-right items-end" 
      : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col mb-16 max-w-3xl mx-auto w-full ${alignmentClass}`}
    >
      {subtitle && (
        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gold-wood uppercase font-sans mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
        {title}
      </h2>
      <div className="h-0.5 bg-gold-wood/40 w-16 mt-4" />
    </motion.div>
  );
}
