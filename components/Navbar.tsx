"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const initTimeout = setTimeout(() => {
      setTime(new Date());
    }, 0);
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(initTimeout);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getGmtOffset = (date: Date) => {
    const offsetMinutes = -date.getTimezoneOffset();
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const hours = Math.floor(Math.abs(offsetMinutes) / 60);
    return `(GMT${sign}${hours})`;
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-start justify-between px-6 py-8 md:px-12 bg-transparent text-white w-full">
      {/* Left side: Massive Wordmark */}
      <div className="relative z-40 pointer-events-none flex items-start">
        <h1 className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.8] font-black text-[#D3D3D3] tracking-tighter uppercase m-0 p-0 drop-shadow-lg">
          AYYOOB
        </h1>
        <span className="text-[clamp(0.875rem,2vw,1.5rem)] ml-1 md:ml-2 mt-1 md:mt-2 font-bold text-[#D3D3D3] drop-shadow-md">
          KA
        </span>
      </div>

      {/* Right side */}
      <div className="flex flex-row items-center gap-4 md:gap-6">
        {/* Availability indicator */}
        <div className="hidden sm:flex flex-col items-end">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="font-semibold text-sm">Available for project</span>
          </div>
          <span className="text-xs text-[#8A8A8A]">OPEN TO WORK</span>
        </div>

        {/* Clock */}
        <div className="hidden md:flex flex-col items-end min-w-[70px] text-right">
          <span className="text-sm font-semibold tabular-nums w-[70px]">
            {time ? formatTime(time) : "..."}
          </span>
          <span className="text-xs text-[#8A8A8A]">
            {time ? getGmtOffset(time) : "..."}
          </span>
        </div>

        {/* Let's talk button */}
        <button className="hidden sm:inline-flex items-center justify-center border border-white/20 rounded-full px-5 py-2 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
          LET&apos;S TALK
        </button>

        {/* Menu button */}
        <button className="flex items-center justify-center w-10 h-10 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
