"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Keyboard, 
  BarChart3, 
  Target, 
  Clock, 
  Trophy, 
  Brain,
  Zap,
  Users
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Keyboard className="h-8 w-8" />,
      title: "Interactive Lessons",
      description: "Step-by-step typing lessons designed to build muscle memory and improve your technique progressively.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Track your words per minute, accuracy, and improvement over time with detailed performance metrics.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Accuracy Focus",
      description: "Advanced error detection and correction guidance to help you type with precision and confidence.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timed Challenges",
      description: "Put your skills to the test with various timed typing challenges and competitive leaderboards.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Adaptive Learning",
      description: "Personalized difficulty adjustment based on your progress and areas that need improvement.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Speed Building",
      description: "Scientifically designed exercises to gradually increase your typing speed without sacrificing accuracy.",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">SuperType</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our comprehensive typing platform combines cutting-edge technology with proven learning methodologies 
            to deliver the most effective typing education experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="bg-slate-950/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 text-white shadow-lg`}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "50K+", label: "Active Learners", icon: <Users className="h-6 w-6" /> },
            { number: "1M+", label: "Lessons Completed", icon: <Trophy className="h-6 w-6" /> },
            { number: "95%", label: "Improvement Rate", icon: <Target className="h-6 w-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-xl p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;