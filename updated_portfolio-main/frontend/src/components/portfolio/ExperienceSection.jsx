import React from 'react';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { experience } from '../../data/mock';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ExperienceCard = ({ exp, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative md:pl-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot with pulse */}
      <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-zinc-950 border-2 border-teal-500 hidden md:flex items-center justify-center z-10 timeline-dot">
        <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
      </div>

      <div className="group glass rounded-2xl p-8 card-lift card-glow">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/15 group-hover:border-teal-500/40 transition-all duration-300">
              <Building2 className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-50 group-hover:text-teal-400 transition-colors duration-300">
                {exp.role}
              </h3>
              <p className="text-zinc-400">{exp.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Badge
              variant="outline"
              className="border-zinc-700 text-zinc-500 text-xs"
            >
              {exp.type}
            </Badge>
            <span className="text-sm text-zinc-500 flex items-center gap-1.5 whitespace-nowrap">
              <Calendar className="w-3.5 h-3.5" />
              {exp.duration}
            </span>
          </div>
        </div>

        <p className="text-zinc-500 text-sm mb-4">{exp.description}</p>

        <ul className="space-y-2">
          {exp.highlights.map((item, i) => (
            <li
              key={i}
              className={`flex items-start gap-2 text-sm text-zinc-400 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: `${(i + 3) * 100}ms` }}
            >
              <ChevronRight className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-zinc-900/30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-500 font-mono text-sm tracking-wider uppercase mb-3">
            Where I've Worked
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(20, 184, 166, 0.3) 10%, rgba(20, 184, 166, 0.3) 90%, transparent)'
            }}
          />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
