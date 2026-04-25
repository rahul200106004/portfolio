import React from 'react';
import {
  Crown,
  Compass,
  Brain,
  Sparkles,
  BookOpen,
  Trophy,
  Camera,
  Zap,
} from 'lucide-react';
import { beyondCode } from '../../data/mock';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const passionIconMap = {
  brain: Brain,
  sparkles: Sparkles,
  book: BookOpen,
  trophy: Trophy,
  camera: Camera,
  zap: Zap,
};

const ShowcaseCard = ({ data, icon: IconComponent, iconBg, index }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl overflow-hidden card-lift card-glow transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-video relative overflow-hidden bg-zinc-900 group">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
            <IconComponent className="w-5 h-5 text-inherit" style={{ color: iconBg.includes('amber') ? '#fbbf24' : '#2dd4bf' }} />
          </div>
          <h3 className="text-xl font-semibold text-zinc-50">
            {data.title}
          </h3>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          {data.description}
        </p>
        <div className="grid grid-cols-3 gap-3">
          {data.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-zinc-800/50 rounded-lg p-3 text-center transition-all duration-500 hover:bg-zinc-800/80 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${(index * 150) + (i * 100)}ms` }}
            >
              <p className="text-teal-400 font-semibold text-sm">
                {stat.value}
              </p>
              <p className="text-zinc-600 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BeyondCode = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: passionsRef, isVisible: passionsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="beyond" className="py-24 md:py-32 relative section-gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-500 font-mono text-sm tracking-wider uppercase mb-3">
            More Than Code
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
            Beyond the Terminal
          </h2>
        </div>

        {/* Chess & Travel */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <ShowcaseCard
            data={beyondCode.chess}
            icon={Crown}
            iconBg="bg-amber-500/10"
            index={0}
          />
          <ShowcaseCard
            data={beyondCode.travel}
            icon={Compass}
            iconBg="bg-teal-500/10"
            index={1}
          />
        </div>

        {/* Passions Grid */}
        <div ref={passionsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {beyondCode.passions.map((passion, index) => {
            const Icon = passionIconMap[passion.icon] || Zap;
            return (
              <div
                key={passion.name}
                className={`glass rounded-xl p-5 text-center card-lift group cursor-default transition-all duration-500 ${
                  passionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-500/10 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 text-zinc-500 group-hover:text-teal-400 transition-colors duration-300" />
                </div>
                <p className="text-sm font-medium text-zinc-300">{passion.name}</p>
                <p className="text-xs text-zinc-600 mt-1">{passion.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;
