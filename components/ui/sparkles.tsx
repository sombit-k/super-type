"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const particles = Array.from({ length: particleDensity || 100 });

  return (
    <div className={cn("absolute inset-0", className)}>
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          style={{
            width: Math.random() * (maxSize || 3) + (minSize || 1),
            height: Math.random() * (maxSize || 3) + (minSize || 1),
            backgroundColor: particleColor || "#fbbf24",
            borderRadius: "50%",
            boxShadow: `0 0 6px ${particleColor || "#fbbf24"}`,
          }}
        />
      ))}
    </div>
  );
};