import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Rocket, Brain, Server, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const values = [
    {
      icon: Server,
      title: 'Scalable Backend Systems',
      description: 'Engineered RESTful microservices and database schemas in Spring Boot, focused on throughput, ACID compliance, and API security.'
    },
    {
      icon: Code,
      title: 'Algorithmic Excellence',
      description: 'Dedicated competitive coder with 500+ solved problems across LeetCode, Codeforces, GeeksforGeeks, and CodeChef using optimized Java data structures.'
    },
    {
      icon: Brain,
      title: 'AI & Future Technology',
      description: 'Passionate about embedding artificial intelligence models, machine learning APIs, and modern automation into production backend services.'
    },
    {
      icon: Rocket,
      title: 'Startup & Product Mindset',
      description: 'Constantly building impactful solutions from scratch, embracing iterative design, clean architecture, and rapid prototyping.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030712]">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>GALGOTIAS UNIVERSITY B.TECH CSE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Engineering With <span className="text-gradient-cyan">Precision & Passion</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Get to know my journey, academic foundation, and core engineering philosophy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="glass-card p-8 rounded-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Hi, I'm Sandeep Kumar Pandey</span>
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-4">
                I am a Computer Science Engineering student at <strong className="text-white">Galgotias University</strong> with a deep passion for building scalable software, high-throughput backend services, and intelligent solutions.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                My technical foundation centers around <strong className="text-cyan-300">Java, Spring Boot, MySQL, REST APIs, and System Design</strong>. I take pride in crafting clean, maintainable codebases that adhere to object-oriented patterns, microservices principles, and efficient algorithms.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Focused on Backend Engineering & Distributed Systems</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Enthusiastic about Artificial Intelligence & Machine Learning</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Active Competitive Programmer (CP31 Sheet Solved)</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 group-hover:bg-blue-950/40 transition-all">
                    <IconComp className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#0B0F19] to-[#0F172A] border border-cyan-500/20 shadow-2xl"
        >
          {PERSONAL_INFO.stats.map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400 tracking-wide uppercase font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
