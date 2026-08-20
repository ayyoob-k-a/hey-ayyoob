"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Splash({ onComplete }: { onComplete: () => void }) {
  const fullText = "AYYOOB KA";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeVideo, setFadeVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setTimeout(() => setPrefersReducedMotion(mediaQuery.matches), 0);
    
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        index++;
        setCurrentIndex(index);
      } else {
        clearInterval(typingInterval);
        
        // Wait 2 full seconds after typing finishes
        setTimeout(() => {
          setFadeVideo(true); // Fade video out
          
          // Complete splash slightly after video starts fading to trigger layout animation
          setTimeout(() => {
            onComplete();
          }, 300); 
        }, 2000); 
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]"
    >
      {/* Background Video */}
      <motion.div
        animate={{ 
          opacity: fadeVideo ? 0 : 1, 
          scale: fadeVideo ? 1.4 : 1,
          filter: fadeVideo ? "blur(24px)" : "blur(0px)"
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full origin-center"
      >
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/splash-eyes-close.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Centered Shared Layout Text */}
      <motion.div
        layoutId="brand-name"
        className="relative z-10 flex items-start"
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.8] font-black text-[#D3D3D3] tracking-tighter uppercase m-0 p-0">
          {"AYYOOB".slice(0, currentIndex)}
        </h1>
        <span className="text-[clamp(0.875rem,2vw,1.5rem)] ml-1 md:ml-2 mt-1 md:mt-2 font-bold text-[#D3D3D3]">
          {currentIndex > 7 ? "KA".slice(0, currentIndex - 7) : ""}
        </span>
      </motion.div>
    </motion.div>
  );
}
