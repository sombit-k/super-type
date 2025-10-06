"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}

export const HoverBorderGradient: React.FC<HoverBorderGradientProps> = ({
  children,
  containerClassName,
  className,
  as: Tag = 'div',
  ...otherProps
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tag
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent p-[2px] focus:outline-none group',
        containerClassName
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...otherProps}
    >
      {/* Subtle gradient border that appears on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content container */}
      <div
        className={cn(
          'relative z-20 flex items-center justify-center rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white transition-all duration-300 group-hover:from-slate-800 group-hover:to-slate-700 group-hover:shadow-lg group-hover:shadow-amber-500/25',
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
};