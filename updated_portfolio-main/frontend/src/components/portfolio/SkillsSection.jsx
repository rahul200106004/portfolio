import React from 'react';
import { Brain, Cloud, Code2, BarChart3, ShieldCheck, Cpu, Wrench } from 'lucide-react';
import { Badge } from '../ui/badge';
import { skillCategories, certifications } from '../../data/mock';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const iconMap = {
  brain: Brain,
  cloud: Cloud,
  code: Code2,
  chart: BarChart3,
  shield: ShieldCheck,
  cpu: Cpu,
  wrench: Wrench,
};

const SkillCard = ({ cat, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const Icon = iconMap[cat.icon] || Code2;

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 card-lift card-glow transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-teal-400" />
        </div>
        <h3 className="font-semibold text-zinc-50">{cat.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <Badge
            key={skill}
            variant="secondary"
            className={`bg-zinc-800/80 text-zinc-400 border-0 text-xs px-3 py-1.5 skill-badge hover:bg-teal-500/10 hover:text-teal-400 transition-all duration-200 cursor-default ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: `${(index * 80) + (i * 30)}ms` }}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-zinc-900/30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-500 font-mono text-sm tracking-wider uppercase mb-3">
            Tech Arsenal
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
            Skills & Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <SkillCard key={cat.category} cat={cat} index={index} />
          ))}

          {/* Certifications card */}
          <div
            ref={certRef}
            className={`glass rounded-2xl p-6 card-lift card-glow transition-all duration-700 ${
              certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${skillCategories.length * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-semibold text-zinc-50">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert.id}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    certVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(skillCategories.length * 80) + (i * 100)}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-zinc-300 font-medium">{cert.title}</p>
                    <p className="text-xs text-zinc-600 mt-0.5">
                      {cert.issuer} &middot; {cert.validity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
