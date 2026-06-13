'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { SequenceScroll } from '@/components/SequenceScroll';
import { About } from '@/components/About';
import { Resume } from '@/components/Resume';
import { TechStack } from '@/components/TechStack';
import { KeyAchievements } from '@/components/KeyAchievements';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Contact } from '@/components/Contact';
import { CTA } from '@/components/CTA';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero with Sequence Scroll */}
      <div className="relative z-10 min-h-screen">
        <SequenceScroll />

        {/* Sections wrapper */}
        <div className="relative z-10 bg-black">
          {/* About Section */}
          <section id="about" className="relative py-20 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              />
            </div>
            <About />
          </section>

          {/* Resume Section */}
          <section id="resume" className="relative py-12 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-0 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                transition={{ duration: 9, repeat: Infinity }}
              />
            </div>
            <Resume />
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="relative py-16 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-32 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"
                animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                transition={{ duration: 11, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              />
            </div>
            <TechStack />
          </section>

          {/* Key Achievements Section */}
          <section id="achievements" className="relative py-16 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
            </div>
            <KeyAchievements />
          </section>

          {/* Featured Projects Section */}
          <section id="projects" className="relative py-16 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-20 right-0 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl"
                animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
                transition={{ duration: 13, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 11, repeat: Infinity, delay: 1 }}
              />
            </div>
            <FeaturedProjects />
          </section>

          {/* Contact Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-0 left-1/2 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl"
                animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/8 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -60, 0] }}
                transition={{ duration: 12, repeat: Infinity, delay: 2 }}
              />
            </div>
            <Contact />
          </section>

          {/* CTA Section */}
          <section id="contact" className="relative py-16 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-black"
              />
              <motion.div
                className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
                animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
                transition={{ duration: 14, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
                transition={{ duration: 13, repeat: Infinity, delay: 1 }}
              />
            </div>
            <CTA />
          </section>
        </div>
      </div>
    </main>
  );
}
