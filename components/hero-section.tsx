"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SparklesCore } from './ui/sparkles';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { BeautifulButton } from './ui/beautiful-button';
import { Zap, Target, Trophy, Clock } from 'lucide-react';

const HeroSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Improve your typing speed with interactive exercises"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Focus",
      description: "Enhance accuracy with real-time feedback"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timed Challenges",
      description: "Test your skills with exciting typing challenges"
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1.4}
        particleDensity={120}
        className="w-full h-full"
        particleColor="#fbbf24"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <TextGenerateEffect 
            words="Master Your Typing Skills"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            Transform your typing from hunt-and-peck to professional proficiency with our 
            interactive lessons, real-time feedback, and engaging challenges.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="#lessons">
            <BeautifulButton size="lg" variant="primary">
              <span>Start Learning</span>
              <Zap className="h-5 w-5" />
            </BeautifulButton>
          </Link>
          
          <Link href="#features">
            <BeautifulButton size="lg" variant="outline">
              <span>View Features</span>
            </BeautifulButton>
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-amber-400/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50 pointer-events-none" />
    </div>
  );
};

export default HeroSection;