import React from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import LessonsSection from '@/components/lessons-section';
import Footer from '@/components/footer';
import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Sidebar />
      <div className="transition-all duration-300">
        <HeroSection />
        <FeaturesSection />
        <LessonsSection />
        <Footer />
      </div>
    </div>
  );
}
