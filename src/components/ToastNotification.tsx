import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-950 border border-cyan-500/40 text-xs text-white shadow-2xl backdrop-blur-xl"
      >
        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="p-1 rounded text-slate-400 hover:text-white"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
