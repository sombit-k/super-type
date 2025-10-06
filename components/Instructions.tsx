"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Target, Clock, CheckCircle2, Keyboard, Lightbulb } from 'lucide-react';
import { BeautifulButton } from './ui/beautiful-button';

const Instructions = ({ id }: { id: string }) => {
    return (
        <div className="h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl h-full overflow-hidden"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-slate-700 p-6">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg">
                            <Lightbulb className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                            Lesson Instructions
                        </h2>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 h-full flex flex-col">
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        
                        {/* General Instructions */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-slate-800/30 rounded-lg p-6 border border-slate-600/50"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Keyboard className="h-5 w-5 text-amber-400" />
                                <h3 className="text-lg font-semibold text-white">General Instructions</h3>
                            </div>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                                    <span>Place your fingers on the correct home row position</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                                    <span>Click the Start button below to begin this exercise</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                                    <span>Timer starts automatically when you type the first letter</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle2 className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                                    <span>Complete the exercise within 60 seconds with minimal mistakes</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Tips & Goals */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-slate-800/30 rounded-lg p-6 border border-slate-600/50"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Target className="h-5 w-5 text-amber-400" />
                                <h3 className="text-lg font-semibold text-white">Tips & Goals</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                                    <Clock className="h-5 w-5 text-amber-400" />
                                    <div>
                                        <p className="text-sm font-medium text-amber-300">Time Goal</p>
                                        <p className="text-xs text-slate-400">Complete within 60 seconds</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                    <Target className="h-5 w-5 text-green-400" />
                                    <div>
                                        <p className="text-sm font-medium text-green-300">Accuracy Goal</p>
                                        <p className="text-xs text-slate-400">Minimize typing errors</p>
                                    </div>
                                </div>
                                <div className="text-sm text-slate-400 bg-slate-700/30 p-3 rounded-lg">
                                    <p className="font-medium text-slate-300 mb-1">Pro Tip:</p>
                                    Focus on accuracy first, speed will come naturally with practice!
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Start Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 flex justify-center"
                    >
                        <Link href={`/practice/${id}`}>
                            <BeautifulButton variant="primary" size="lg" className="px-8">
                                <Play className="h-5 w-5 mr-2" />
                                Start This Exercise
                            </BeautifulButton>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Instructions