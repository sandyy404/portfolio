import React, { useState, useEffect } from 'react';
import { Code, ArrowUp, Heart, Eye, Download, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  resumeDownloadsCount: number;
}

export const Footer: React.FC<FooterProps> = ({ resumeDownloadsCount }) => {
  const [visitorCount, setVisitorCount] = useState(1482);

  useEffect(() => {
    const stored = localStorage.getItem('sandeep_portfolio_visitors');
    let current = stored ? parseInt(stored, 10) : 1482;
    current += 1;
    localStorage.setItem('sandeep_portfolio_visitors', current.toString());
    setVisitorCount(current);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030712] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">
          
          <div className="md:col-span-5 space-y-3 text-left">
            <a href="#hero" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-glow-sm">
                <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                Sandeep<span className="text-cyan-400">.dev</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Designed & engineered by <strong className="text-slate-200">Sandeep Kumar Pandey</strong>. B.Tech CSE Student at Galgotias University specializing in Java, Spring Boot, and AI systems.
            </p>
          </div>

          <div className="md:col-span-4 flex items-center justify-start md:justify-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-sm"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-sm"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-sm"
              title="LeetCode"
            >
              <Code className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4">
            <div className="flex flex-col items-end gap-1 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                <Eye className="w-3 h-3 text-cyan-400" />
                <span>{visitorCount} Visitors</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                <Download className="w-3 h-3 text-blue-400" />
                <span>{resumeDownloadsCount} Resumes</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-sm hover:scale-110"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Sandeep Kumar Pandey. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>React, Three.js & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
