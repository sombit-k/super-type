"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Keyboard, LogOut, User } from 'lucide-react';
import { BeautifulButton } from './ui/beautiful-button';
import { useAuth } from '@/contexts/auth-context';
import LoginModal from './auth/login-modal';
import SignupModal from './auth/signup-modal';

const Header = () => {
  const { user, logout, login, isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleLogin = (userData: any, token: string) => {
    login(userData, token);
  };

  const handleSignup = (userData: any, token: string) => {
    login(userData, token);
  };
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg">
              <Keyboard className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              SuperType
            </h1>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="#features" className="text-slate-300 hover:text-amber-400 transition-colors">
                Features
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="#lessons" className="text-slate-300 hover:text-amber-400 transition-colors">
                Lessons
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">
                About
              </Link>
            </motion.div>
          </nav>

          {/* Auth/CTA Buttons */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              // Authenticated user buttons
              <>
                <div className="hidden sm:flex items-center space-x-2 text-slate-300">
                  <User className="h-4 w-4" />
                  <span className="text-sm">Hi, {user?.firstName || user?.username}</span>
                </div>
                <BeautifulButton 
                  variant="secondary" 
                  size="md"
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </BeautifulButton>
              </>
            ) : (
              // Guest user buttons
              <>
                <BeautifulButton 
                  variant="secondary" 
                  size="md"
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </BeautifulButton>
                <BeautifulButton 
                  variant="primary" 
                  size="md"
                  onClick={() => setShowSignupModal(true)}
                >
                  Sign Up
                </BeautifulButton>
              </>
            )}
            
            {/* Quick access buttons for authenticated users */}
            {isAuthenticated && (
              <>
                <div className="h-6 w-px bg-slate-600" />
                <Link href="#lessons">
                  <BeautifulButton variant="outline" size="md">
                    Start Typing
                  </BeautifulButton>
                </Link>
              </>
            )}
          </div>
          
        </div>
      </div>

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={handleSwitchToSignup}
        onLogin={handleLogin}
      />
      
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={handleSwitchToLogin}
        onSignup={handleSignup}
      />
      
    </motion.header>
  );
};

export default Header;