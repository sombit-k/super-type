"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BeautifulButton } from './ui/beautiful-button';
import { Play, Lock, CheckCircle } from 'lucide-react';

const LessonsSection = () => {
  const lessons = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Lesson ${i + 1}`,
    description: `Master typing skills with lesson ${i + 1}`,
    difficulty: i < 5 ? 'Beginner' : i < 10 ? 'Intermediate' : 'Advanced',
    isLocked: false, // All lessons are available
    isCompleted: false
  }));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <section id="lessons" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
            Choose Your Lesson
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Progress through our carefully crafted lessons designed to take you from beginner to typing master.
          </p>
        </motion.div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full hover:border-amber-400/50 transition-all duration-300">
                {/* Lesson Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {lesson.id}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{lesson.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(lesson.difficulty)}`}>
                        {lesson.difficulty}
                      </span>
                    </div>
                  </div>
                  {lesson.isCompleted && (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  )}
                </div>

                {/* Lesson Description */}
                <p className="text-slate-400 mb-6">{lesson.description}</p>

                {/* Action Button */}
                <div className="mt-auto">
                  {lesson.isLocked ? (
                    <button
                      disabled
                      className="w-full flex items-center justify-center space-x-2 bg-slate-800 text-slate-500 py-3 rounded-lg cursor-not-allowed"
                    >
                      <Lock className="h-4 w-4" />
                      <span>Locked</span>
                    </button>
                  ) : (
                    <Link href={`/lesson/${lesson.id}`} className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-400 py-3 rounded-lg hover:from-amber-500/20 hover:to-orange-500/20 hover:border-amber-400 transition-all duration-300 group"
                      >
                        <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-semibold">Start Lesson</span>
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practice Mode CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for a Challenge?
            </h3>
            <p className="text-slate-300 mb-6">
              Test your skills with our advanced practice mode and track your progress.
            </p>
            <Link href="/practice">
              <BeautifulButton size="lg" variant="primary">
                <span>Start Practice Mode</span>
                <Play className="h-5 w-5" />
              </BeautifulButton>
            </Link>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default LessonsSection;