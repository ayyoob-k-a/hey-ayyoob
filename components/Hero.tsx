"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "../public/hero-image.png";
import Navbar from "./Navbar";
import TechMarquee from "./TechMarquee";

export default function Hero() {
  const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const headlineLines = ["Beyond", "Visuals.", "Built with", "Vision."];

  return (
    <section className="h-screen w-screen overflow-hidden relative bg-[#0A0A0A] text-white">
      {/* 1. BACKGROUND IMAGE (Z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: customEase }}
          className="absolute inset-0"
        >
          <Image
            src={heroImage}
            alt="Ayyoob - Senior Flutter Developer"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle dark overlay for text readability over the full image */}
          <div 
            className="absolute inset-0 bg-black/40" 
          />
        </motion.div>
      </div>

      {/* 2. NAVBAR (Z-50) */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>



      {/* 4. HEADLINE (Z-20) */}
      <div className="absolute right-[5vw] top-[50vh] -translate-y-1/2 z-20 pointer-events-auto">
        <h2 className="text-[clamp(3rem,6vw,6rem)] leading-[0.9] font-black flex flex-col items-end text-right text-[#E5E5E5]">
          {headlineLines.map((line, i) => (
            <div key={i} className="overflow-hidden py-1 md:py-2">
              <motion.span
                className="block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.1,
                  ease: customEase,
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h2>
      </div>

      {/* 5. INTRO PARAGRAPH (Z-20) */}
      <div className="absolute bottom-[16vh] md:bottom-[15vh] left-[5vw] w-[85vw] max-w-md z-20 pointer-events-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: customEase }}
          className="text-[clamp(1.125rem,2vw,1.5rem)] leading-tight font-medium text-[#8A8A8A]"
        >
          We build brands, websites, <br className="hidden md:block" />
          <span className="font-bold text-white">
            and digital experiences
          </span>{" "}
          with intention, clarity and care.
        </motion.p>
      </div>

      {/* 6. BOTTOM STRIP: DOMAIN + TECH MARQUEE (Z-20) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: customEase }}
        className="absolute bottom-[5vh] left-[5vw] right-[5vw] md:right-[30vw] flex flex-col md:flex-row md:items-center gap-3 md:gap-8 z-20 pointer-events-auto"
      >
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] md:text-xs uppercase tracking-wide text-gray-500 font-semibold">DOMAIN:</span>
          <span className="text-[10px] md:text-xs text-white/80 font-medium">Mobile App Development</span>
        </div>
        <div className="flex-1 overflow-hidden max-w-full">
          <TechMarquee />
        </div>
      </motion.div>

      {/* 7. START A PROJECT BUTTON (Z-50) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: customEase }}
        className="absolute bottom-[2vh] right-[5vw] md:bottom-[5vh] md:right-[5vw] z-50 pointer-events-auto"
      >
        <button className="group flex items-center justify-center gap-2 md:gap-3 px-5 py-2.5 md:px-7 md:py-3.5 rounded-full
          bg-gradient-to-br from-slate-700/30 to-blue-900/10
          backdrop-blur-xl
          border border-white/10 border-t-white/20 border-l-white/20
          shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]
          hover:from-slate-700/40 hover:to-blue-900/20 transition-all duration-300
          text-white/90 text-xs md:text-base font-semibold tracking-wide
        ">
          START A PROJECT
          <span className="flex items-center justify-center bg-white/90 text-slate-900 transition-transform group-hover:scale-110 rounded-full p-1.5 w-6 h-6 md:w-7 md:h-7 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 md:w-4 md:h-4">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </button>
      </motion.div>
    </section>
  );
}
