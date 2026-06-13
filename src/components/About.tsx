'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="container-wide max-w-6xl">
        {/* Title with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 will-change-transform"
        >
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">Professional </span>
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-500/0"></div>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left column - Bio */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              I'm <span className="text-orange-500 font-semibold">Andika</span>, born in Garut on April 05th, 1999. I'm a passionate full-stack software engineer dedicated to building high-performance, scalable applications. My journey into technology began with a curiosity about how systems work, which evolved into a commitment to creating seamless digital experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              My expertise spans infrastructure design, business system implementation, policy & procedures development, and comprehensive IT solutions. With skills in performance optimization, security, virtualization, and disaster recovery, I focus on delivering enterprise-grade solutions. When I'm not coding, you'll find me playing futsal, traveling, or gaming.
            </p>
          </motion.div>

          {/* Right column - Quick Facts */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-b from-gray-900/50 to-gray-950/50 border border-gray-800 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xs font-bold tracking-widest text-orange-500 mb-6">QUICK FACTS</h3>
              
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wide mb-1">AGE</p>
                  <p className="text-lg text-white font-semibold">27 years old</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wide mb-1">LOCATION</p>
                  <p className="text-lg text-white font-semibold">Tangerang Selatan, Indonesia</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wide mb-1">EMAIL</p>
                  <p className="text-lg text-orange-500 font-semibold">andikabrata10@gmail.com</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wide mb-1">PHONE</p>
                  <p className="text-lg text-white font-semibold">+62 812 2486 9896</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats at bottom */}
        <motion.div
          className="mt-8 grid grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10+</p>
            <p className="text-gray-400 text-sm md:text-base">Projects Completed</p>
          </div>
          
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">22</p>
            <p className="text-gray-400 text-sm md:text-base">Age</p>
          </div>
          
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">∞</p>
            <p className="text-gray-400 text-sm md:text-base">Passion Level</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
