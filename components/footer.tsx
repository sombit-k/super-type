"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Keyboard, Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg">
                <Keyboard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                SuperType
              </h3>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Master the art of typing with our interactive lessons and real-time feedback. 
              Improve your speed, accuracy, and confidence with every keystroke.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5 text-slate-400 hover:text-amber-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5 text-slate-400 hover:text-amber-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 text-slate-400 hover:text-amber-400" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Lessons', 'Practice', 'Progress', 'Settings'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Contact Us', 'Bug Reports', 'Feature Requests'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for typing enthusiasts
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            © 2025 SuperType. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;