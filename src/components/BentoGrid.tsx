'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Palette, Database } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'Full-stack SaaS platform with real-time collaboration',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    size: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    title: 'Design System',
    description: 'Comprehensive component library',
    tech: ['React', 'Storybook', 'Tailwind'],
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    title: 'Performance Tools',
    description: 'Web vitals monitoring dashboard',
    tech: ['Next.js', 'Charts', 'Analytics'],
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    title: 'Data Pipeline',
    description: 'Distributed data processing system',
    tech: ['Node.js', 'Redis', 'AWS'],
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    size: 'col-span-2 row-span-1',
  },
];

export function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="container-wide">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-text mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            A selection of my recent work showcasing full-stack development, design, and innovation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                className={`${project.size} group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} p-6 cursor-pointer`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      className="mb-4 inline-block"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
