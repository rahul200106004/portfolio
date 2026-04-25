import React, { useEffect, useState } from 'react';
import { ArrowDown, Mail, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { personalInfo } from '../../data/mock';

const terminalLines = [
  { key: 'const', text: 'const ', highlight: 'rahul', rest: ' = {' },
  { key: 'role', text: '  role: ', value: '"AI Engineer",' },
  { key: 'focus', text: '  focus: ', value: '"GenAI & RAG Pipelines",' },
  { key: 'stack', text: '  stack: ', value: '["LangChain", "Azure", "FastAPI"],' },
  { key: 'motto', text: '  motto: ', value: '"Curiosity is my OS"' },
  { key: 'close', text: '};', value: '' },
];

const HeroSection = () => {
  const [terminalVisible, setTerminalVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Stagger hero text then terminal
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);
    const termTimer = setTimeout(() => setTerminalVisible(true), 500);
    return () => {
      clearTimeout(heroTimer);
      clearTimeout(termTimer);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-zinc-950">
        {/* Radial gradient accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.03),transparent_30%)]" />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating glow orbs */}
      <div className="glow-orb glow-orb-teal w-72 h-72 top-1/4 left-1/4 animate-glow-pulse" />
      <div className="glow-orb glow-orb-cyan w-96 h-96 bottom-1/4 right-1/4 animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="glow-orb glow-orb-purple w-64 h-64 top-1/3 right-1/3 animate-glow-pulse" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge
                  variant="outline"
                  className="border-teal-500/30 text-teal-400 bg-teal-500/5 px-3 py-1 animate-fade-in-up"
                  style={{ animationDelay: '200ms', animationFillMode: 'both' }}
                >
                  <Briefcase className="w-3 h-3 mr-1.5" />
                  {personalInfo.totalExperience} Experience
                </Badge>
                <Badge
                  variant="outline"
                  className="border-zinc-700 text-zinc-400 bg-zinc-800/30 px-3 py-1 animate-fade-in-up"
                  style={{ animationDelay: '300ms', animationFillMode: 'both' }}
                >
                  <MapPin className="w-3 h-3 mr-1.5" />
                  {personalInfo.location}
                </Badge>
              </div>

              <p
                className="text-teal-500 font-mono text-sm tracking-wider uppercase animate-fade-in-up"
                style={{ animationDelay: '400ms', animationFillMode: 'both' }}
              >
                Hello, I'm
              </p>

              <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.9]">
                <span
                  className="text-zinc-50 inline-block animate-fade-in-left"
                  style={{ animationDelay: '500ms', animationFillMode: 'both' }}
                >
                  {personalInfo.firstName}
                </span>
                <br />
                <span
                  className="gradient-text-animated inline-block animate-fade-in-left"
                  style={{ animationDelay: '650ms', animationFillMode: 'both' }}
                >
                  {personalInfo.lastName}
                </span>
              </h1>
            </div>

            <p
              className="text-xl sm:text-2xl text-zinc-500 font-light leading-relaxed max-w-xl italic border-l-2 border-teal-500/30 pl-4 animate-fade-in-up"
              style={{ animationDelay: '800ms', animationFillMode: 'both' }}
            >
              "{personalInfo.tagline}"
            </p>

            <p
              className="text-zinc-400 leading-relaxed max-w-lg animate-fade-in-up"
              style={{ animationDelay: '950ms', animationFillMode: 'both' }}
            >
              {personalInfo.summary}
            </p>

            <div
              className="flex flex-wrap gap-4 pt-2 animate-fade-in-up"
              style={{ animationDelay: '1100ms', animationFillMode: 'both' }}
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-500 text-white px-8 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 group"
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 px-8 transition-all duration-300 hover:border-zinc-600 group"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-0.5 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right - Terminal */}
          <div
            className={`hidden lg:block transition-all duration-700 ${
              terminalVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Terminal glow */}
              <div className="absolute -inset-4 bg-teal-500/5 rounded-3xl blur-xl" />

              <div className="relative glass rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/60 hover:bg-red-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60 hover:bg-amber-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60 hover:bg-green-500 transition-colors" />
                  <span className="ml-2 text-xs text-zinc-600 font-mono">about.js</span>
                </div>
                <div className="p-6 font-mono text-sm leading-loose">
                  {terminalLines.map((line, idx) => (
                    <div
                      key={line.key}
                      className="transition-all duration-500"
                      style={{
                        transitionDelay: `${(idx + 1) * 150}ms`,
                        opacity: terminalVisible ? 1 : 0,
                        transform: terminalVisible ? 'translateX(0)' : 'translateX(-10px)',
                      }}
                    >
                      <span className="text-zinc-500">{line.text}</span>
                      {line.highlight && (
                        <span className="text-teal-400">{line.highlight}</span>
                      )}
                      {line.rest && <span className="text-zinc-500">{line.rest}</span>}
                      {line.value && <span className="text-amber-400">{line.value}</span>}
                    </div>
                  ))}
                  <div className="mt-2 flex items-center">
                    <span className="text-teal-500">{'>'}</span>
                    <span className="w-2 h-5 bg-teal-500 ml-1 animate-pulse rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-zinc-600 font-mono tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-zinc-600" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
