import React from 'react';
import { GraduationCap, MapPin, Quote, Sparkles } from 'lucide-react';
import { personalInfo, education } from '../../data/mock';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: sidebarRef, isVisible: sidebarVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 relative section-gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={sectionRef}
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-500 font-mono text-sm tracking-wider uppercase mb-3">
            Get to Know Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Main content */}
          <div
            className={`lg:col-span-3 space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg text-zinc-300 leading-relaxed">
              {personalInfo.about.intro}
            </p>
            <p className="text-zinc-400 leading-relaxed">
              {personalInfo.about.personality}
            </p>

            <div className="glass rounded-xl p-6 mt-8 card-lift card-glow">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                <p className="text-zinc-400 italic leading-relaxed">
                  {personalInfo.about.philosophy}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              sidebarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Education Card */}
            <div className="glass rounded-xl p-6 card-lift card-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-teal-400" />
                </div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
                  Education
                </p>
              </div>
              <h3 className="text-zinc-50 font-semibold text-lg">{education.degree}</h3>
              <p className="text-zinc-400 text-sm mt-1">{education.institution}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {education.location}
                </span>
                <span className="text-xs text-zinc-500">{education.year}</span>
                {education.cgpa && (
                  <span className="text-xs text-teal-500 font-medium">CGPA: {education.cgpa}</span>
                )}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="glass rounded-xl p-6 card-lift card-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
                  Quick Facts
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Top 1% chess player globally',
                  'Explored 12 Indian states',
                  'AWS & Azure certified',
                  'Multilingual: English & Hindi',
                  'Meditation practitioner',
                ].map((fact, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 text-sm text-zinc-400 transition-all duration-500 ${
                      sidebarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
