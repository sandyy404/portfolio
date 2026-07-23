import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Download, Sparkles, Folder, User, Award, Code, Mail, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAIChat: () => void;
  onDownloadResume: () => void;
  onShowToast: (msg: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenAIChat,
  onDownloadResume,
  onShowToast,
}) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setSearch('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const commandItems = [
    {
      id: 'nav-hero',
      title: 'Go to Hero / Top',
      category: 'Navigation',
      icon: User,
      action: () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-about',
      title: 'Go to About Me & Galgotias Education',
      category: 'Navigation',
      icon: User,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-skills',
      title: 'Go to Skills & Tech Stack Matrix',
      category: 'Navigation',
      icon: Code,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-projects',
      title: 'Go to Featured Projects (Spring Boot / Java)',
      category: 'Navigation',
      icon: Folder,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-experience',
      title: 'Go to Experience & Milestone Timeline',
      category: 'Navigation',
      icon: Award,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-certifications',
      title: 'Go to Certifications',
      category: 'Navigation',
      icon: Award,
      action: () => {
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-profiles',
      title: 'Go to Coding Profiles & Statistics',
      category: 'Navigation',
      icon: Code,
      action: () => {
        document.getElementById('profiles')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact Section',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'act-resume',
      title: 'Download Software Engineering Resume',
      category: 'Actions',
      icon: Download,
      action: () => {
        onDownloadResume();
        onClose();
      }
    },
    {
      id: 'act-ai',
      title: 'Launch Sandeep AI Assistant Chatbot',
      category: 'Actions',
      icon: Sparkles,
      action: () => {
        onOpenAIChat();
        onClose();
      }
    },
    {
      id: 'act-email',
      title: 'Copy Sandeep Email to Clipboard',
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        onShowToast('Email copied to clipboard!');
        onClose();
      }
    }
  ];

  const filteredCommands = commandItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030712]/80 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-xl bg-[#070C18] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          <div className="p-4 border-b border-slate-800 flex items-center gap-3">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or section name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((cmd) => {
                const IconComp = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800 text-left text-xs transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/30">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {cmd.title}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500">{cmd.category}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-slate-500 font-mono">
                No matching commands found for "{search}"
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>Use ↑ ↓ to navigate</span>
            <span>ESC to exit</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
