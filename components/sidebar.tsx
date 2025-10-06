"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, ChevronLeft, ChevronRight, Play, Lock } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(true);

  const lessons = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Lesson ${i + 1}`,
    difficulty: i < 5 ? 'Beginner' : i < 10 ? 'Intermediate' : 'Advanced',
    isLocked: false,
    isCompleted: false,
  }));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-28 ${isOpen ? 'left-72' : 'left-4'} z-50 p-2 bg-slate-800/90 backdrop-blur-sm border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-all duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isOpen ? (
          <ChevronLeft className="h-5 w-5 text-amber-400" />
        ) : (
          <ChevronRight className="h-5 w-5 text-amber-400" />
        )}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-72 bg-slate-900/95 backdrop-blur-md border-r border-slate-700 z-40 overflow-hidden ${className}`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b border-slate-700">
                <h2 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Navigation
                </h2>
              </div>

              {/* Navigation Buttons */}
              <div className="p-4 space-y-2">
                <Link
                  href="/"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 transition-all duration-200 group"
                >
                  <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Home</span>
                </Link>
                
                <Link
                  href="#lessons"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/50 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 transition-all duration-200 group"
                >
                  <BookOpen className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">All Lessons</span>
                </Link>
              </div>

              {/* Lessons List */}
              <div className="flex-1 overflow-y-auto p-4">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Lessons
                </h3>
                <div className="space-y-1">
                  {lessons.map((lesson, index) => (
                    <motion.div
                      key={lesson.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                    >
                      <Link
                        href={`/lesson/${lesson.id}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/70 text-slate-300 hover:text-amber-300 transition-all duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {lesson.isCompleted ? (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Play className="h-3 w-3 text-white" />
                              </div>
                            ) : lesson.isLocked ? (
                              <Lock className="h-4 w-4 text-slate-500" />
                            ) : (
                              <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-amber-500/30">
                                <span className="text-xs font-bold">{lesson.id}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              {lesson.title}
                            </p>
                            <p className={`text-xs ${getDifficultyColor(lesson.difficulty)}`}>
                              {lesson.difficulty}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar