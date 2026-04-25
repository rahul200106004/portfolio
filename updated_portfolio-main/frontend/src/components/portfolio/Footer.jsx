import React from 'react';
import { Linkedin, Mail, ArrowUp, Instagram, Heart } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 relative gradient-border-top">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-lg text-zinc-50">
              {personalInfo.firstName}
              <span className="text-teal-500">.</span>
            </p>
            <p className="text-sm text-zinc-500 mt-1">
              {personalInfo.title} &middot; {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-500 hover:text-teal-400 hover:bg-teal-500/10 social-icon transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-500 hover:text-teal-400 hover:bg-teal-500/10 social-icon transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-500 hover:text-teal-400 hover:bg-teal-500/10 social-icon transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-zinc-800/80 flex items-center justify-center text-zinc-500 hover:text-teal-400 hover:bg-teal-500/10 social-icon transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800/30 text-center">
          <p className="text-sm text-zinc-600 flex items-center justify-center gap-1">
            &copy; {currentYear} {personalInfo.name}. Crafted with
            <Heart className="w-3.5 h-3.5 text-red-500/60 inline" />
            passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
