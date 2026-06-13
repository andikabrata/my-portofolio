'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { BookOpen, Briefcase, Code2 } from 'lucide-react';

interface EducationItem {
  period: string;
  school: string;
  location: string;
  major: string;
  gpa?: string;
}

interface ExperienceItem {
  period: string;
  position: string;
  company: string;
  description: string[];
}

interface Skill {
  name: string;
  percentage: number;
}

const education: EducationItem[] = [
  {
    period: '2013 - 2016',
    school: 'SMAN 11 Tangerang Selatan',
    location: 'South Tangerang, Banten',
    major: 'Natural Sciences Major (IPA)',
  },
  {
    period: '2016 - 2020',
    school: 'Universitas Komputer Indonesia',
    location: 'Bandung, West Java',
    major: 'Informatics Engineering',
    gpa: '3.53 / 4.00',
  },
];

const experience: ExperienceItem[] = [
  {
    period: 'May 2022 - Present',
    position: 'Android Developer',
    company: 'PT. MNC Digital Entertainment Tbk (RCTI)',
    description: [
      'Developing R+ application features.',
      'Maintain and bugfixed in the application.',
      'Carry out card assignment, and maintain the time of delivery.',
      'Provided dedicated support and timely issue resolution to product teams.',
      'Implementation third-party to support the features of application.',
      'Consistently used Android SDK to produce highly effective content.',
      'Using REST and GraphQL as API architectural style for data exchange.',
      'Delivered weekly progress report to executive staff.',
      'Tested applications prior to final review to verify issue resolution.',
    ],
  },
  {
    period: 'Oct 2020 - Feb 2022',
    position: 'Android Developer',
    company: 'PT Nata Connexindo Digital',
    description: [
      'Design and build 10+ smart selling tools apps, sales apps, cashier apps.',
      'Understand to service API for android backend.',
      'Devised documentation for each app including detailing operation aspects & features.',
      'Published 15+ Android apps from inception to production.',
    ],
  },
  {
    period: 'Intership',
    position: 'Web Developer',
    company: 'PT. Dharma Kreasi Nusantara',
    description: [
      'Developed user interfaces with modern JavaScript frameworks, HTML5 & CSS3.',
      'Connecting to database with API.',
      'Collaborated with project managers, testers, end-users, and distributors.',
      'Designed and implemented web components across new and existing designs.',
      'Troubleshot and debugged code ensuring compatibility with devices'
    ],
  }
];

const frameworkSkills: Skill[] = [
  { name: 'Android SDK', percentage: 85 },
  { name: 'Codeigniter', percentage: 80 },
  { name: 'Google Design Sprint', percentage: 75 },
  { name: 'Bootstrap', percentage: 82 },
  { name: 'React JS', percentage: 78 },
];

const codingSkills: Skill[] = [
  { name: 'Java', percentage: 88 },
  { name: 'Kotlin', percentage: 82 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'HTML5', percentage: 90 },
  { name: 'CSS3', percentage: 87 },
  { name: 'PHP', percentage: 80 },
  { name: 'SQL', percentage: 83 },
  { name: 'Python', percentage: 75 },
];

const toolsSkills: Skill[] = [
  { name: 'Android Studio', percentage: 92 },
  { name: 'IntelliJ IDEA', percentage: 85 },
  { name: 'GIT', percentage: 88 },
  { name: 'Sublime', percentage: 82 },
  { name: 'Visual Studio', percentage: 80 },
  { name: 'PyCharm', percentage: 85 },
  { name: 'Adobe XD', percentage: 75 },
  { name: 'Star UML', percentage: 72 },
  { name: 'Visual Studio Code', percentage: 90 },
];

export function Resume() {
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
    <section ref={ref} className="py-12 px-4">
      <div className="container-wide max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Resume
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-500/0"></div>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={24} className="text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="border-b-2 border-orange-500 pb-6 mb-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className={index !== education.length - 1 ? 'mb-6 pb-6 border-b border-gray-700' : 'mb-0'}
                >
                  <p className="text-xs font-bold text-orange-500 tracking-widest mb-2">
                    {item.period}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-1">{item.school}</h4>
                  <p className="text-sm text-orange-400 mb-2">{item.location}</p>
                  <p className="text-sm text-gray-400">{item.major}</p>
                  {item.gpa && (
                    <p className="text-sm text-gray-500 mt-2">GPA: {item.gpa}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={24} className="text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="border-b-2 border-orange-500 pb-6 mb-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                  className={index !== experience.length - 1 ? 'mb-6 pb-6 border-b border-gray-700' : 'mb-0'}
                >
                  <p className="text-xs font-bold text-orange-500 tracking-widest mb-2">
                    {item.period}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-1">{item.position}</h4>
                  <p className="text-sm text-gray-400 mb-3">{item.company}</p>
                  <ul className="space-y-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex gap-2">
                        <span className="text-orange-500 flex-shrink-0">✓</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={24} className="text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Skills</h3>
            </div>
            <div className="space-y-8">
              {/* Framework Skills */}
              <div>
                <h4 className="text-xs font-bold tracking-widest text-orange-500 mb-4">
                  FRAMEWORK SKILLS
                </h4>
                <div className="space-y-3">
                  {frameworkSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={0.35 + index * 0.05}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>

              {/* Coding Skills */}
              <div>
                <h4 className="text-xs font-bold tracking-widest text-orange-500 mb-4">
                  CODING SKILLS
                </h4>
                <div className="space-y-3">
                  {codingSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={0.45 + index * 0.05}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>

              {/* Tools Skills */}
              <div>
                <h4 className="text-xs font-bold tracking-widest text-orange-500 mb-4">
                  TOOLS SKILLS
                </h4>
                <div className="space-y-3">
                  {toolsSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={0.55 + index * 0.05}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  name,
  percentage,
  delay,
  inView,
}: {
  name: string;
  percentage: number;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm font-bold text-orange-500">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        />
      </div>
    </motion.div>
  );
}
