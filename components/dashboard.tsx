"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Trophy, 
  BarChart3, 
  Star,
  Zap,
  Award
} from 'lucide-react';

interface DashboardProps {
  lessonId?: string;
}

const Dashboard = ({ lessonId }: DashboardProps) => {
  // Mock data - in a real app, this would come from your backend
  const stats = {
    currentLesson: lessonId || '1',
    wpm: 45,
    accuracy: 92,
    lessonsCompleted: parseInt(lessonId || '1') - 1,
    totalLessons: 15,
    streak: 5,
    bestWpm: 58,
    timeSpent: '2h 15m'
  };

  const achievements = [
    { name: 'First Steps', description: 'Complete your first lesson', earned: true },
    { name: 'Speed Demon', description: 'Type 50+ WPM', earned: false },
    { name: 'Perfectionist', description: '100% accuracy', earned: false },
    { name: 'Dedicated', description: '7-day streak', earned: false }
  ];

  return (
    <div className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl h-full overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-slate-700 p-4">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg">
              <BarChart3 className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Dashboard
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto h-full">
          
          {/* Progress Overview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-800/30 rounded-lg p-4 border border-slate-600/50"
          >
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
              <Trophy className="h-4 w-4 text-amber-400 mr-2" />
              Progress
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Lessons Completed</span>
                  <span>{stats.lessonsCompleted}/{stats.totalLessons}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full"
                    style={{ width: `${(stats.lessonsCompleted / stats.totalLessons) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Current Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-slate-800/30 rounded-lg p-4 border border-slate-600/50"
          >
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
              Current Stats
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                <div className="text-xl font-bold text-amber-400">{stats.wpm}</div>
                <div className="text-xs text-slate-400">WPM</div>
              </div>
              <div className="text-center p-2 bg-slate-700/30 rounded-lg">
                <div className="text-xl font-bold text-green-400">{stats.accuracy}%</div>
                <div className="text-xs text-slate-400">Accuracy</div>
              </div>
            </div>
          </motion.div>

          {/* Personal Bests */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-slate-800/30 rounded-lg p-4 border border-slate-600/50"
          >
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
              <Zap className="h-4 w-4 text-yellow-400 mr-2" />
              Personal Bests
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Best WPM</span>
                <span className="text-sm font-bold text-yellow-400">{stats.bestWpm}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Streak</span>
                <span className="text-sm font-bold text-orange-400">{stats.streak} days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Time Spent</span>
                <span className="text-sm font-bold text-blue-400">{stats.timeSpent}</span>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-slate-800/30 rounded-lg p-4 border border-slate-600/50"
          >
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
              <Award className="h-4 w-4 text-purple-400 mr-2" />
              Achievements
            </h4>
            <div className="space-y-2">
              {achievements.slice(0, 3).map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Star 
                    className={`h-3 w-3 ${
                      achievement.earned 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-slate-500'
                    }`} 
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-medium truncate ${
                      achievement.earned ? 'text-white' : 'text-slate-400'
                    }`}>
                      {achievement.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg p-4 border border-amber-500/20"
          >
            <h4 className="text-sm font-semibold text-amber-300 mb-2">💡 Quick Tip</h4>
            <p className="text-xs text-slate-300">
              Keep your wrists straight and fingers curved. Focus on accuracy over speed!
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;