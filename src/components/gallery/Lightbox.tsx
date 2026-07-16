"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; title?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    // Prevent body scrolling when open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, handleNext, handlePrev, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-charcoal/80 to-transparent">
          <div className="text-white/80 text-sm font-sans tracking-widest uppercase">
            {currentImage.title || "Gallery Showcase"} 
            <span className="text-white/40 ml-3">
              ({currentIndex + 1} / {images.length})
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>
        </div>

        {/* Prev Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all focus:outline-none hover:scale-105 active:scale-95 z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Image Container */}
        <div
          className="relative max-w-5xl max-h-[75vh] w-11/12 h-5/6 flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all focus:outline-none hover:scale-105 active:scale-95 z-50"
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-0 inset-x-0 p-8 flex justify-center z-50 bg-gradient-to-t from-charcoal/80 to-transparent">
          <p className="text-white/70 text-sm font-sans tracking-wide text-center max-w-xl">
            {currentImage.alt}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
