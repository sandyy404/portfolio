import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User } from 'lucide-react';
import { AI_KNOWLEDGE_BASE, DEFAULT_BOT_REPLY } from '../data/aiBotData';
import type { BotResponse } from '../data/aiBotData';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  suggestedActions?: { label: string; action: string }[];
}

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadResume: () => void;
}

export const AIChatbot: React.FC<AIChatbotProps> = ({
  isOpen,
  onClose,
  onDownloadResume,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'bot',
      text: "Hello! I am Sandeep's AI Portfolio Assistant. How can I help you explore his backend engineering projects, Spring Boot skills, or education at Galgotias University?",
      suggestedActions: [
        { label: "View Sandeep's Tech Stack", action: "scroll_skills" },
        { label: "Check Featured Projects", action: "scroll_projects" },
        { label: "Download Resume", action: "download_resume" }
      ]
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let matchedResponse: BotResponse | null = null;

      for (const entry of AI_KNOWLEDGE_BASE) {
        if (entry.keywords.some((kw) => lowerQuery.includes(kw))) {
          matchedResponse = entry;
          break;
        }
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: matchedResponse ? matchedResponse.reply : DEFAULT_BOT_REPLY,
        suggestedActions: matchedResponse?.suggestedActions || [
          { label: "Check Projects", action: "scroll_projects" },
          { label: "Contact Form", action: "scroll_contact" }
        ]
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: string) => {
    if (action === 'download_resume') {
      onDownloadResume();
    } else if (action.startsWith('scroll_')) {
      const sectionId = action.replace('scroll_', '');
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#070C18] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px]"
        >
          <div className="p-4 bg-gradient-to-r from-blue-950/80 via-slate-900 to-cyan-950/80 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-glow-sm">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#070C18]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Sandeep AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                </h3>
                <span className="text-[10px] text-cyan-400 font-mono">
                  Online • Knowledge Agent
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-cyan-400 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className="max-w-[80%]">
                  <div
                    className={`p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-none'
                        : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none whitespace-pre-line'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {msg.suggestedActions.map((act) => (
                        <button
                          key={act.label}
                          onClick={() => handleActionClick(act.action)}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 transition-colors"
                        >
                          {act.label} →
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 text-cyan-400">
                  <Bot className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                  <span>Sandeep AI is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-slate-950/90 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about Java, Spring Boot, projects..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim()}
                className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
