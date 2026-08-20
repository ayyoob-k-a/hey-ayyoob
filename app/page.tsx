"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Splash from "@/components/Splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  // Fallback in case component renders on server or splash logic completes immediately
  useEffect(() => {
    // Splash logic always plays now for testing/presentation
  }, []);

  return (
    <main>
      <AnimatePresence>
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <Hero key="hero" />
        )}
      </AnimatePresence>
    </main>
  );
}
