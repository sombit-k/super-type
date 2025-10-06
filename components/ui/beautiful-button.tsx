"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BeautifulButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  [key: string]: any;
}

export const BeautifulButton: React.FC<BeautifulButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...otherProps
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-xl hover:shadow-amber-500/25 hover:from-amber-400 hover:to-orange-500 transform hover:scale-105 active:scale-95",
    secondary: "bg-gradient-to-r from-slate-800 to-slate-700 text-white border border-slate-600 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transform hover:scale-105 active:scale-95",
    outline: "bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 active:scale-95"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      {...otherProps}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transform -skew-x-12 transition-opacity duration-700" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
    </motion.button>
  );
};