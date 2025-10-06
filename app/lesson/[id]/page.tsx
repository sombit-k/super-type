"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import Sidebar from '@/components/sidebar';
import Dashboard from '@/components/dashboard';
import Instructions from '@/components/Instructions';
import { BeautifulButton } from '@/components/ui/beautiful-button';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function LessonPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundBeams />
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <BeautifulButton variant="secondary" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </BeautifulButton>
                </Link>
                <div className="h-6 w-px bg-slate-600" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Lesson {id}
                </h1>
              </div>
              {/* <Link href="/">
                <BeautifulButton variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </BeautifulButton>
              </Link> */}
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="pt-20 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-8rem)]">
              
              {/* Instructions Section - Takes up 3 columns */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <Instructions id={id} />
              </motion.div>

              {/* Dashboard Section - Takes up 1 column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-1"
              >
                <Dashboard lessonId={id} />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}