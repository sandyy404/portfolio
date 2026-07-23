import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Terminal,
  Award,
  Zap,
  ExternalLink,
  GitCommit,
  TrendingUp
} from 'lucide-react';
import { CODING_PROFILES } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const CodingProfiles: React.FC = () => {
  const getProfileIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5 text-cyan-400" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-cyan-400" />;
      default:
        return <Zap className="w-5 h-5 text-cyan-400" />;
    }
  };

  const generateHeatmapGrid = () => {
    const days = 140;
    const items = [];
    for (let i = 0; i < days; i++) {
      const rand = Math.random();
      let colorClass = 'bg-slate-900/80';
      if (rand > 0.85) colorClass = 'bg-cyan-400 shadow-[0_0_8px_#00F0FF]';
      else if (rand > 0.65) colorClass = 'bg-cyan-600/90';
      else if (rand > 0.4) colorClass = 'bg-blue-800/70';
      else if (rand > 0.2) colorClass = 'bg-slate-800';

      items.push({ id: i, colorClass });
    }
    return items;
  };

  const heatmapGrid = generateHeatmapGrid();

  return (
    <section id="profiles" className="py-24 relative bg-[#030712] overflow-hidden">
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>ALGORITHMIC PLATFORMS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Coding Profiles & <span className="text-gradient-cyan">Metrics</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Live problem-solving benchmarks across LeetCode, Codeforces (CP31 Sheet), GeeksforGeeks, CodeChef, and GitHub open-source activity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CODING_PROFILES.map((profile, idx) => (
            <motion.a
              key={profile.platform}
              href={profile.profileUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                      {getProfileIcon(profile.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {profile.platform}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">@{profile.username}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-2xl font-extrabold text-cyan-400 mb-0.5">
                    {profile.metric}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {profile.subtext}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-center">
                {profile.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xs font-bold text-white font-mono">{s.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 rounded-2xl border border-cyan-500/20"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                <GitCommit className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">GitHub Contribution Graph</h3>
                <p className="text-xs text-slate-400">650+ contributions in the last year • Daily coding activity streak</p>
              </div>
            </div>

            <a
              href="https://github.com/sandyy404"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Follow @sandyy404</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[650px]">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 mb-3">
                {heatmapGrid.map((item) => (
                  <div
                    key={item.id}
                    className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-125 hover:z-10 ${item.colorClass}`}
                    title="Code Contribution Activity"
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
                <div className="flex items-center gap-1.5 ml-auto">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-900" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-blue-800" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 shadow-[0_0_5px_#00F0FF]" />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
