import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroCanvas3D } from './HeroCanvas3D';

interface HeroProps {
  onDownloadResume: () => void;
  onOpenAIChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume, onOpenAIChat }) => {
  const typingWords = [
    'Backend Engineer',
    'Java & Spring Boot Developer',
    'AI & System Design Enthusiast',
    'Algorithmic Problem Solver (500+ Solved)',
    'Computer Science Scholar @ Galgotias'
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const currentWord = typingWords[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    };

    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <HeroCanvas3D />

      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 shadow-glow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>B.Tech CSE @ Galgotias University</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">Open to Opportunities</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Building Scalable <br />
              <span className="text-gradient-cyan drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                Software & Intelligent Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium mb-3">
              Backend Developer | Java | Spring Boot | AI Enthusiast | Problem Solver
            </p>

            <div className="h-8 flex items-center font-mono text-sm sm:text-base text-cyan-400 mb-8 bg-slate-950/70 border border-slate-800/80 px-4 py-2 rounded-lg max-w-xl w-full shadow-inner">
              <Terminal className="w-4 h-4 text-blue-500 mr-2.5 shrink-0" />
              <span className="text-slate-400 mr-2">$</span>
              <span>{currentText}</span>
              <span className="w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onDownloadResume}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-100 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all hover:border-slate-700"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">Core Stack:</span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">Java 17+</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">Spring Boot</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">MySQL</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono">REST APIs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-50 animate-pulse-glow" />

              <div className="relative rounded-2xl bg-gradient-to-b from-[#0F172A]/90 to-[#0A0F1D]/90 border border-cyan-500/30 p-6 shadow-2xl backdrop-blur-xl">
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    Sandeep_Pandey.java
                  </span>
                </div>

                <div className="relative mx-auto w-44 h-44 mb-6 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 p-[3px] animate-spin-slow shadow-[0_0_25px_#00F0FF]" />
                  <div className="absolute inset-[3px] rounded-full bg-[#070C18] flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center relative p-4 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] mb-2 shadow-glow-sm">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-2xl">
                          SKP
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-white">Sandeep Pandey</span>
                      <span className="text-[10px] text-cyan-400 font-mono">B.Tech CSE Student</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-slate-400 font-medium">{PERSONAL_INFO.university}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-left hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs mb-1">
                      <Code2 className="w-3.5 h-3.5" />
                      <span className="font-mono">CP Solved</span>
                    </div>
                    <p className="text-lg font-bold text-white">500+ <span className="text-xs font-normal text-slate-400">problems</span></p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-left hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 text-blue-400 text-xs mb-1">
                      <Database className="w-3.5 h-3.5" />
                      <span className="font-mono">Backend</span>
                    </div>
                    <p className="text-lg font-bold text-white">Spring Boot <span className="text-xs font-normal text-slate-400">& MySQL</span></p>
                  </div>
                </div>

                <button
                  onClick={onOpenAIChat}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-cyan-900/40 border border-cyan-500/30 hover:border-cyan-400/60 text-xs font-medium text-cyan-300 transition-all group"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                  <span>Ask Sandeep's AI Agent about projects</span>
                </button>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
