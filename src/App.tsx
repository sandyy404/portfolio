import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { Achievements } from './components/Achievements';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';
import { CommandPalette } from './components/CommandPalette';
import { CustomCursor } from './components/CustomCursor';
import { ToastNotification } from './components/ToastNotification';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [resumeDownloadCount, setResumeDownloadCount] = useState(42);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleDownloadResume = () => {
    setResumeDownloadCount((prev) => prev + 1);
    showToast('Downloading Sandeep Kumar Pandey Software Resume...');

    const dummyResumeContent = `===========================================================
SANDEEP KUMAR PANDEY - SOFTWARE ENGINEER RESUME
===========================================================
B.Tech Computer Science Engineering | Galgotias University
Email: sandeoppandey404@gmail.com
GitHub: https://github.com/sandyy404
LinkedIn: https://linkedin.com/in/sandeep-pandey

SUMMARY:
Aspiring Software Engineer passionate about Backend Engineering,
Java, Spring Boot, Artificial Intelligence, and System Design.
500+ Competitive Programming problems solved.

CORE SKILLS:
• Languages: Java (Core, OOP, Collections), Python, JavaScript, SQL
• Backend: Spring Boot, Spring MVC, Spring JDBC, REST APIs, Maven
• Databases: MySQL
• Tools: Git, GitHub, Postman, IntelliJ IDEA, VS Code
• Concepts: Data Structures, Algorithms, Microservices, System Design

PROJECTS:
1. Volunteer Management System (Spring Boot, MySQL, REST API)
2. Employee Payroll System (Java, OOP, Collections)
3. Online Shopping Cart (Java Swing, MySQL)
4. Student Record Management System (Core Java)

===========================================================
`;

    const blob = new Blob([dummyResumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sandeep_Kumar_Pandey_Software_Engineer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <CustomCursor />

      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenAIChat={() => setAiChatOpen(true)}
        onDownloadResume={handleDownloadResume}
      />

      <main>
        <Hero
          onDownloadResume={handleDownloadResume}
          onOpenAIChat={() => setAiChatOpen(true)}
        />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Certifications />

        <CodingProfiles />

        <Achievements />

        <Blog />

        <Contact onShowToast={showToast} />
      </main>

      <Footer resumeDownloadsCount={resumeDownloadCount} />

      <AIChatbot
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
        onDownloadResume={handleDownloadResume}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenAIChat={() => setAiChatOpen(true)}
        onDownloadResume={handleDownloadResume}
        onShowToast={showToast}
      />

      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
