'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Smartphone, Globe, CheckSquare } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  role: string;
  period: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: {
    icon: string;
    label: string;
    value: string;
  }[];
  icon: React.ReactNode;
  color: {
    gradient: string;
    accent: string;
    accentLight: string;
    text: string;
    badge: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'PayLite',
    subtitle: 'Mobile Wallet & Digital Top-up',
    tagline: 'Native Android digital wallet with subscription capabilities.',
    role: 'Android Developer',
    period: 'May 2023 - Sep 2023',
    challenge:
      'Mengelola pemrosesan transaksi top-up secara asynchronous agar UI tidak freeze, menangani image-loading bukti transfer berukuran besar, serta mengintegrasikan sistem langganan digital premium dengan aman.',
    solution:
      'Membangun aplikasi Android native menggunakan Jetpack Compose untuk UI modern yang smooth. Menggunakan Kotlin Coroutines & Flow untuk manajemen state transaksi secara real-time, dan mengintegrasikan Google Play Billing Library untuk fitur premium/langganan. Tampilan UI dioptimalkan dengan Edge-to-Edge display.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Koin DI', 'Play Billing', 'Coil'],
    metrics: [
      { icon: '📱', label: 'Seamless UI', value: 'Edge-to-Edge transparent status bar' },
      { icon: '📉', label: 'Memory Optimization', value: '30% reduction saat loading gambar' },
      { icon: '🔒', label: 'State Management', value: 'Sinkronisasi instan tanpa race-condition' },
    ],
    icon: <Smartphone size={32} />,
    color: {
      gradient: 'from-blue-500/20 to-cyan-500/20',
      accent: 'from-blue-500 to-cyan-500',
      accentLight: 'from-blue-400 to-cyan-400',
      text: 'text-blue-500',
      badge: 'bg-blue-500/10 border-blue-500/30',
    },
  },
  {
    id: 2,
    title: 'Kopi Tuku',
    subtitle: 'O2O Ordering Platform',
    tagline: 'Blazing-fast web ordering system for local coffee brand.',
    role: 'Frontend Web Developer',
    period: 'Oct 2023 - Dec 2023',
    challenge:
      'Website legacy sangat lambat saat memuat menu gambar kopi yang estetik, menyebabkan calon pembeli malas bertransaksi lewat web.',
    solution:
      'Merombak total storefront menjadi web modern berbasis Next.js 14 App Router dan Tailwind CSS. Memanfaatkan fitur otomatisasi optimasi gambar dari Next.js untuk kompresi otomatis ke format WebP, serta menyusun layout web yang bersih dengan tipografi minimalis.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Google Fonts'],
    metrics: [
      { icon: '🚀', label: 'Performance', value: '99% Lighthouse Score' },
      { icon: '⚡', label: 'Load Time', value: 'Menu gambar dalam <1.5 detik' },
      { icon: '🎯', label: 'UX', value: 'Animasi smooth meningkatkan conversion' },
    ],
    icon: <Globe size={32} />,
    color: {
      gradient: 'from-amber-500/20 to-orange-500/20',
      accent: 'from-amber-500 to-orange-500',
      accentLight: 'from-amber-400 to-orange-400',
      text: 'text-amber-500',
      badge: 'bg-amber-500/10 border-amber-500/30',
    },
  },
  {
    id: 3,
    title: 'Taskify',
    subtitle: 'Collaborative Kanban Board',
    tagline: 'Task management workspace with real-time web dashboard & mobile companion.',
    role: 'Full-Stack Web & Android Developer',
    period: 'Jan 2024 - Mar 2024',
    challenge:
      'Sinkronisasi status tugas agar langsung berubah di web dan handphone tim secara instan tanpa perlu melakukan refresh manual.',
    solution:
      'Membuat dua ekosistem yang terhubung. Sisi Web dibangun dengan Next.js menampilkan papan Kanban interaktif berbasis Drag and Drop. Sisi Mobile Android digunakan Room Database sebagai penyimpanan lokal (offline-first) yang otomatis tersinkronisasi ke server pusat via API.',
    techStack: ['Next.js', 'Kotlin', 'Room DB', 'REST API', 'Tailwind CSS', 'ViewModel'],
    metrics: [
      { icon: '🔄', label: 'Real-time Sync', value: 'Perubahan dalam <500ms' },
      { icon: '📦', label: 'Offline Mode', value: 'Tetap berfungsi tanpa koneksi' },
      { icon: '🎨', label: 'Drag & Drop', value: 'UI interaktif yang smooth' },
    ],
    icon: <CheckSquare size={32} />,
    color: {
      gradient: 'from-purple-500/20 to-pink-500/20',
      accent: 'from-purple-500 to-pink-500',
      accentLight: 'from-purple-400 to-pink-400',
      text: 'text-purple-500',
      badge: 'bg-purple-500/10 border-purple-500/30',
    },
  },
];

export function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="container-wide max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: '-100px' }}
          className="mb-24"
        >
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              [02] / Selected Work
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Real-World Apps,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Engineered to Scale.
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-500/0 mb-8"></div>

          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            A collection of familiar web platforms and native Android applications built using
            modern architectural patterns, focusing on smooth performance and clean developer
            experience.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="space-y-12">
          {/* Timeline visualization */}
          <div className="relative mb-12">
            <div className="flex items-center justify-between md:justify-start md:gap-8 md:flex-row flex-col">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, margin: '-50px' }}
                  className="flex flex-col items-center md:flex-1"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color.accent} border-4 border-slate-900 flex items-center justify-center text-white font-bold text-sm mb-3 shadow-lg`}
                  >
                    {project.id}
                  </div>
                  <p className={`text-xs font-semibold ${project.color.text} text-center`}>
                    {project.period}
                  </p>
                  {index < projects.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-6 w-8 h-0.5 bg-gradient-to-r from-slate-600 to-slate-700"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects Cards */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: false, margin: '-100px' }}
              className="group"
            >
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${project.color.gradient} border border-slate-800 rounded-2xl p-8 md:p-10 backdrop-blur hover:border-slate-700 transition-all group-hover:shadow-2xl group-hover:shadow-slate-900/50 relative overflow-hidden`}
              >
                {/* Animated background glow */}
                <div
                  className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-3xl bg-gradient-to-r ${project.color.accent}`}
                ></div>

                <div className="relative z-10">
                  {/* Timeline badge - before header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 + index * 0.1 }}
                    viewport={{ once: false }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.color.accent} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {project.id}
                    </div>
                    <span className={`text-xs font-semibold ${project.color.text} uppercase tracking-wider`}>
                      {project.period}
                    </span>
                  </motion.div>

                  {/* Header - Side by Side */}
                  <div className="flex items-start justify-between gap-8 mb-10">
                    {/* Left side - Icon & Title */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`p-3 rounded-xl bg-slate-900/50 border ${project.color.badge}`}
                        >
                          <div className={project.color.text}>{project.icon}</div>
                        </div>
                        <div>
                          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-1">
                            Project {String(project.id).padStart(2, '0')}
                          </span>
                          <p className={`text-sm italic text-gray-400`}>{project.tagline}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className={`text-lg font-semibold ${project.color.text}`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Right side - Role Badge */}
                    <div className="hidden md:flex items-center">
                      <div className="px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-xl">
                        <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">
                          My Role
                        </p>
                        <p className="text-sm font-bold text-gray-200">{project.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Role Badge */}
                  <div className="md:hidden mb-6">
                    <div className="px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg">
                      <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">
                        My Role
                      </p>
                      <p className="text-sm font-bold text-gray-200">{project.role}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-10 mb-10 pb-10 border-b border-slate-700/50">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                      viewport={{ once: false }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-orange-500 mt-1">⚠️</div>
                        <h4 className="text-sm font-bold tracking-widest text-orange-500 uppercase">
                          Challenge
                        </h4>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-sm">{project.challenge}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: false }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-cyan-500 mt-1">✨</div>
                        <h4 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">
                          Solution
                        </h4>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-sm">{project.solution}</p>
                    </motion.div>
                  </div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.25 + index * 0.1 }}
                    viewport={{ once: false }}
                    className="mb-10"
                  >
                    <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                      🛠️ Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.25 + idx * 0.05 }}
                          viewport={{ once: false }}
                          className={`px-3 py-2 text-xs font-semibold rounded-full bg-slate-900/50 border ${project.color.badge} ${project.color.text} transition-all group-hover:bg-slate-800/70`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Impact Metrics - 3 Columns */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: false }}
                    className="grid md:grid-cols-3 gap-6"
                  >
                    {project.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4 }}
                        className="p-5 bg-gradient-to-br from-slate-900/50 to-slate-950/30 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 transition-all"
                      >
                        <div className="text-3xl mb-3">{metric.icon}</div>
                        <p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wider">
                          {metric.label}
                        </p>
                        <p className="text-sm font-bold text-gray-100 leading-snug">
                          {metric.value}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="mt-24 text-center"
        >
          <p className="text-gray-400 text-lg mb-8">
            Interested in a project like these? Let's talk!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
