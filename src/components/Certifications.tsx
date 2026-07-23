import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Terminal, ShieldCheck, Cpu, Server, ExternalLink, CheckCircle2, X } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import type { CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-300" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      default:
        return <Award className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative bg-[#070C18]/90 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Industry & Tech <span className="text-gradient-cyan">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Professional certificates in Python Programming, Microsoft Technical Fundamentals, Cisco Networking & Cybersecurity, Artificial Intelligence, and Spring Boot Microservices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card p-6 rounded-2xl cursor-pointer hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-cyan-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-400 mb-4">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 text-[11px]">ID: {cert.credentialId}</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-[#030712]/80 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-md bg-[#070C18] border border-cyan-500/40 rounded-2xl p-6 shadow-2xl z-10 text-center"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="w-16 h-16 rounded-full bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center mx-auto mb-4 text-cyan-400 shadow-glow-sm">
                  {getCertIcon(selectedCert.icon)}
                </div>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                </span>

                <h3 className="text-xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-xs text-slate-300 mb-4">{selectedCert.issuer}</p>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2 mb-6 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Issued Date:</span>
                    <span className="text-slate-200">{selectedCert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Credential ID:</span>
                    <span className="text-cyan-400">{selectedCert.credentialId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Holder:</span>
                    <span className="text-slate-200">Sandeep Kumar Pandey</span>
                  </div>
                </div>

                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-glow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Certificate on Platform</span>
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
