import React, { useState, useEffect } from 'react';

const GithubIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ArrowUpRight = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 7h10v10"></path>
    <path d="M7 17 17 7"></path>
  </svg>
);

const PROJECTS = [
  {
    title: "RadixKV",
    tagline: "Prefix-aware KV cache orchestrator for LLMs.",
    description: "A high-performance concurrent Radix Tree and O(1) Min-Heap eviction engine designed to eliminate redundant token processing in agentic AI.",
    stack: ["Go", "LLMs", "Concurrency", "Algorithms"],
    link: "https://github.com/SushanthKS06/RadixKV"
  },
  {
    title: "EvoThinker",
    tagline: "Agentic Tree Search Research Agent.",
    description: "An open-source research agent inspired by Sakana AI’s AI Scientist v2, utilizing advanced tree search methodologies for autonomous reasoning.",
    stack: ["Python", "Agents", "LLMs", "Research"],
    link: "https://github.com/SushanthKS06/EvoThinker"
  },
  {
    title: "Bhasha-Stream",
    tagline: "Ultra-Low Latency Indic Voice Agent.",
    description: "A highly optimized, code-switching voice agent built for Indian languages, focusing on extreme microsecond latency and natural conversational flow.",
    stack: ["WebRTC", "Speech-to-Text", "NLP", "Low Latency"],
    link: "https://github.com/SushanthKS06/Bhasha-Stream"
  },
  {
    title: "QuMail",
    tagline: "Quantum Secured Email Client Application.",
    description: "A next-generation email application implementing post-quantum cryptographic protocols to ensure future-proof communication security.",
    stack: ["Cryptography", "Security", "Network Protocols", "Python"],
    link: "https://github.com/SushanthKS06/QuMail"
  }
];

const EXPERIENCE = [
  {
    role: "AI Engineer Contractor",
    company: "CodeWisp",
    period: "Recent",
    details: "Owned core AI architecture and latency optimization. Designed and shipped intelligent systems from the ground up, maintaining a strict zero-to-one founder's mindset."
  },
  {
    role: "Data Analyst Intern",
    company: "Elevate Labs",
    period: "Past",
    details: "Conducted quantitative research and data modeling, building the foundational analytical skills that currently drive my AI engineering methodologies."
  }
];

const Nav = () => (
  <nav className="w-full flex justify-between items-center py-8 px-6 md:px-12 max-w-6xl mx-auto z-50 relative">
    <div className="font-bold tracking-tighter text-xl cursor-default hover:text-neutral-300 transition-colors">
      SKS<span className="text-neutral-500">.</span>
    </div>
    <div className="flex items-center gap-6">
      <a href="https://github.com/SushanthKS06" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
        <GithubIcon className="w-5 h-5" />
      </a>
      <a href="https://www.linkedin.com/in/sushanth-k-s-a10933235/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
        <LinkedinIcon className="w-5 h-5" />
      </a>
      <a href="#contact" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        Get in touch
      </a>
    </div>
  </nav>
);

const Terminal = () => {
  const [text, setText] = useState('');
  const fullText = "> ssh admin@sks-infrastructure\n> Authenticating...\n> Access Granted.\n> Loading AI models... [OK]\n> Initializing founder_mindset.sh... [OK]";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 p-4 bg-neutral-950/80 border border-neutral-800/50 rounded-lg font-mono text-xs text-green-500/80 w-full max-w-lg text-left h-32 overflow-hidden relative shadow-[0_0_30px_rgba(0,255,0,0.05)] backdrop-blur-sm group hover:border-green-500/30 transition-colors cursor-crosshair">
      <div className="flex gap-1.5 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
      </div>
      <span className="whitespace-pre-line leading-relaxed">{text}</span>
      <span className="animate-pulse">_</span>
    </div>
  );
};

const Hero = () => (
  <section className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-32 relative z-10">
    <div className="max-w-3xl animate-fade-in">
      <p className="font-mono text-neutral-400 text-sm mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
        Available for new opportunities
      </p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] hover:text-neutral-300 transition-colors cursor-default">
        Backend & AI/ML Engineer.
      </h1>
      <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-12 max-w-2xl">
        Building fast, dependable distributed systems and intelligent pipelines that scale. I operate with a strict founder's mindset—taking extreme ownership from architecture to execution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#systems" className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 text-center">
          View Systems
        </a>
        <a href="https://github.com/SushanthKS06" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 border border-neutral-800 text-white font-medium rounded-md hover:bg-neutral-900 transition-all hover:border-neutral-600 flex items-center justify-center gap-2">
          <GithubIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          GitHub Profile
        </a>
      </div>
      <Terminal />
    </div>
  </section>
);

const Systems = () => (
  <section id="systems" className="max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-neutral-900 relative z-10">
    <div className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight mb-4 hover:text-neutral-300 transition-colors cursor-default">Featured Systems</h2>
      <p className="text-neutral-400 max-w-xl">
        I don't build standard web apps. I build production-grade infrastructure, high-throughput pipelines, and distributed architectures.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PROJECTS.map((project, idx) => (
        <a 
          key={idx} 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block p-8 rounded-xl border border-neutral-900 bg-neutral-950/50 hover:bg-neutral-900 hover:border-neutral-600 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5"
        >
          <div className="absolute top-8 right-8 text-neutral-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300">
            <ArrowUpRight />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
          <p className="text-white/80 font-medium mb-4">{project.tagline}</p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.stack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-black border border-neutral-800 text-neutral-300 text-xs font-mono rounded-md group-hover:border-neutral-500 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </section>
);

const TrackRecord = () => (
  <section id="experience" className="max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-neutral-900 relative z-10">
    <div className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight mb-4 hover:text-neutral-300 transition-colors cursor-default">Track Record</h2>
      <p className="text-neutral-400 max-w-xl">
        History of execution, quantitative research, and extreme ownership.
      </p>
    </div>
    
    <div className="relative border-l border-neutral-800 ml-3 md:ml-6 space-y-12">
      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="relative pl-8 md:pl-12 group">
          {/* Timeline Dot */}
          <div className="absolute w-6 h-6 bg-black border-2 border-neutral-800 rounded-full -left-[13px] top-1 group-hover:border-green-500 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.5)] transition-all duration-300 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-green-500 transition-colors"></div>
          </div>
          
          <div className="bg-neutral-950/50 border border-neutral-900 p-6 rounded-xl hover:bg-neutral-900 hover:border-neutral-700 transition-colors duration-300 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h3 className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">{exp.role}</h3>
              <span className="text-xs font-mono text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <div className="text-sm text-neutral-400 font-bold tracking-wide uppercase mb-4">{exp.company}</div>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              {exp.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-neutral-900 relative z-10">
    <div className="bg-neutral-950/80 border border-neutral-800 p-8 md:p-12 rounded-2xl relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-left max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-mono text-xs text-blue-500 uppercase tracking-wider">Connection Ready</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Initialize Handshake.</h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Whether you need to scale distributed systems, optimize AI pipelines, or just want to talk deep tech—my inbox is open.
          </p>
        </div>
        
        <div className="shrink-0 w-full lg:w-auto">
          <div className="font-mono bg-black border border-neutral-800 p-4 rounded-lg flex flex-wrap items-center gap-4 shadow-inner group-hover:border-neutral-600 transition-colors">
            <span className="text-green-500 font-bold">~</span>
            <span className="text-neutral-300 whitespace-nowrap">./send_message.sh --target="Sushanth"</span>
            <a 
              href="mailto:contact@example.com" 
              className="ml-auto lg:ml-4 bg-white text-black px-6 py-2.5 rounded font-sans font-semibold text-sm hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 transform duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              Execute
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full border-t border-neutral-900 bg-black py-12 px-6 md:px-12 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-neutral-500 text-sm hover:text-neutral-400 transition-colors cursor-default">
        © {new Date().getFullYear()} Sushanth K S. All rights reserved.
      </div>
      <div className="flex items-center gap-6">
        <a href="https://github.com/SushanthKS06" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">GitHub</a>
        <a href="https://www.linkedin.com/in/sushanth-k-s-a10933235/" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function PortfolioApp() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative overflow-hidden">
      {/* Spotlight Hover Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />
      
      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html { scroll-behavior: smooth; }
      `}} />
      
      <Nav />
      <main>
        <Hero />
        <Systems />
        <TrackRecord />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}