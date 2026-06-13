'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Smartphone, Globe, Users } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  metric?: string;
}

interface AchievementCard {
  icon: React.ReactNode;
  title: string;
  category: string;
  achievements: Achievement[];
  tags: string[];
  accentColor: string;
  categoryColor: string;
  bulletColor: string;
  tagColor: string;
}

const achievementCards: AchievementCard[] = [
  {
    icon: <Smartphone size={32} />,
    title: 'Android Development',
    category: 'MOBILE EXCELLENCE',
    achievements: [
      {
        title: 'UI Rendering',
        description: 'Optimasi 30% lebih cepat',
      },
      {
        title: 'Sistem Pembayaran',
        description: 'Google Play Billing integration',
      },
      {
        title: 'Crash Rate',
        description: 'Turun ke <0.5%',
      },
    ],
    tags: ['Jetpack Compose', 'Coroutines'],
    accentColor: 'from-orange-500/20 to-orange-600/20',
    categoryColor: 'text-orange-500',
    bulletColor: 'bg-orange-500',
    tagColor: 'text-orange-500',
  },
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    category: 'FRONTEND PREMIUM',
    achievements: [
      {
        title: 'PageSpeed Score',
        description: '95-100% optimal',
      },
      {
        title: 'First Paint',
        description: 'FCP dibawah 1 detik',
      },
      {
        title: 'Animasi',
        description: 'GSAP ScrollTrigger level',
      },
    ],
    tags: ['React', 'Vite', 'GSAP'],
    accentColor: 'from-cyan-500/20 to-blue-600/20',
    categoryColor: 'text-cyan-500',
    bulletColor: 'bg-cyan-500',
    tagColor: 'text-cyan-500',
  },
  {
    icon: <Users size={32} />,
    title: 'Collaboration',
    category: 'TEAM LEADERSHIP',
    achievements: [
      {
        title: 'Build Optimization',
        description: 'AGP migration 25% faster',
      },
      {
        title: 'Security First',
        description: '100% static deployment',
      },
      {
        title: 'Team Impact',
        description: 'Mentoring & knowledge share',
      },
    ],
    tags: ['Leadership', 'Architecture'],
    accentColor: 'from-purple-500/20 to-pink-600/20',
    categoryColor: 'text-purple-500',
    bulletColor: 'bg-purple-500',
    tagColor: 'text-purple-500',
  },
];

export function KeyAchievements() {
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
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Key Achievements
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-500/0 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Portfolio karya terbaik dengan hasil terukur dan dampak signifikan di setiap kategori
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievementCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className={`bg-gradient-to-b ${card.accentColor} border border-slate-800 rounded-xl p-8 backdrop-blur hover:border-slate-700 transition-colors`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={card.categoryColor}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
                  <p className={`text-xs font-bold tracking-widest ${card.categoryColor}`}>
                    {card.category}
                  </p>
                </div>
              </div>

              {/* Achievements List */}
              <div className="space-y-4 mb-6">
                {card.achievements.map((achievement, achIndex) => (
                  <motion.div
                    key={achIndex}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.15 + achIndex * 0.05,
                    }}
                    className="flex gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${card.bulletColor}`}></div>
                    <div>
                      <p className="font-semibold text-white">{achievement.title}</p>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                {card.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 text-xs font-medium rounded-full bg-slate-800/50 border border-slate-700 ${card.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
