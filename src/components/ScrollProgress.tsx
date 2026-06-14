'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hitung scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      
      setProgress(scrollProgress);
      setIsScrollActive(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 z-50 origin-left"
      style={{
        scaleX: progress / 100,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrollActive ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
