"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGraphql,
  SiGit,
  SiFigma,
} from "react-icons/si";

const techItems = [
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Firebase", icon: SiFirebase },
  { name: "GetX", icon: null },
  { name: "Bloc", icon: null },
  { name: "Riverpod", icon: null },
  { name: "REST API", icon: null },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Hive", icon: null },
  { name: "CI/CD", icon: null },
];

const duplicatedItems = [...techItems, ...techItems];

export default function TechMarquee() {
  return (
    <div
      className="w-full overflow-hidden flex items-center"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max items-center gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs whitespace-nowrap"
            >
              {Icon && <Icon className="text-sm opacity-80" />}
              <span className="font-medium text-white/90">{item.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
