'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Smartphone, Globe } from 'lucide-react';

interface TechCategory {
  label: string;
  technologies: string[];
}

interface TechStack {
  icon: React.ReactNode;
  title: string;
  description: string;
  categories: TechCategory[];
}

const techStacks: TechStack[] = [
  {
    icon: <Smartphone size={32} className="text-orange-500" />,
    title: 'Mobile Development (Android)',
    description: 'Fondasi utama keahlian mobile dengan stack modern Android terkini',
    categories: [
      {
        label: 'CORE LANGUAGE',
        technologies: ['Kotlin'],
      },
      {
        label: 'ARCHITECTURE',
        technologies: ['MVVM', 'Clean Architecture'],
      },
      {
        label: 'DEPENDENCY INJECTION',
        technologies: ['Koin', 'Hilt'],
      },
      {
        label: 'UI FRAMEWORK',
        technologies: ['Jetpack Compose', 'XML Layouts'],
      },
      {
        label: 'ASYNC & LIFECYCLE',
        technologies: ['Kotlin Coroutines', 'StateFlow', 'SharedFlow', 'LiveData'],
      },
      {
        label: 'DATABASE & NETWORK',
        technologies: ['Room Database', 'Retrofit', 'Google Play Billing'],
      },
    ],
  },
  {
    icon: <Globe size={32} className="text-orange-500" />,
    title: 'Web Development (Frontend)',
    description: 'Antarmuka web interaktif berperforma tinggi dengan modern stack',
    categories: [
      {
        label: 'CORE ECOSYSTEM',
        technologies: ['JavaScript ES6+', 'TypeScript'],
      },
      {
        label: 'FRAMEWORK',
        technologies: ['React.js', 'Next.js'],
      },
      {
        label: 'STYLING & UI',
        technologies: ['Tailwind CSS', 'Material UI (MUI)'],
      },
      {
        label: 'ANIMATION',
        technologies: ['GSAP', 'Framer Motion'],
      },
      {
        label: 'BUILD TOOLS',
        technologies: ['Vite', 'Webpack'],
      },
    ],
  },
];

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container-wide max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Technology Stack
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-500/0"></div>
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="space-y-8">
          {techStacks.map((stack, stackIndex) => (
            <motion.div
              key={stackIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 + stackIndex * 0.15 }}
              className="bg-gradient-to-b from-slate-900/40 to-slate-950/40 border border-slate-800 rounded-xl p-8 backdrop-blur"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="mt-2">{stack.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{stack.title}</h3>
                  <p className="text-gray-400 text-sm">{stack.description}</p>
                </div>
              </div>

              {/* Categories Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {stack.categories.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + stackIndex * 0.15 + catIndex * 0.05,
                    }}
                  >
                    <h4 className="text-xs font-bold tracking-widest text-orange-500 mb-4">
                      {category.label}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-sm font-medium text-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-400 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
