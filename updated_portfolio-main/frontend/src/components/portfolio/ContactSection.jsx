import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, ArrowUpRight, Instagram, Copy, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { toast } from 'sonner';
import { personalInfo } from '../../data/mock';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.linkedin,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@ig.rahul007',
    href: personalInfo.instagram,
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    setSending(true);

    // Build mailto body and open email client
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Hi Rahul,\n\n${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Small delay for UX
    await new Promise((r) => setTimeout(r, 600));
    window.open(mailtoUrl, '_self');

    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    toast.success("Opening your email client — send the message to reach me!");

    // Reset sent state after a bit
    setTimeout(() => setSent(false), 4000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      toast.success('Email copied to clipboard!');
    } catch {
      toast.error('Could not copy email');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-zinc-900/30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-500 font-mono text-sm tracking-wider uppercase mb-3">
            Let's Connect
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight">
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`space-y-8 transition-all duration-700 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-zinc-400 leading-relaxed text-lg">
              Whether you have a project in mind, want to discuss AI/ML, or just
              want to chat about chess strategies &mdash; I'm always up for a good
              conversation.
            </p>

            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 group transition-all duration-500 ${
                    infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center group-hover:bg-teal-500/10 transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5 text-zinc-500 group-hover:text-teal-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-wider">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-zinc-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-1"
                      >
                        {value}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <p className="text-zinc-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick copy email */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-teal-400 transition-colors duration-200 group"
            >
              <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Copy email address
            </button>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`glass rounded-2xl p-8 space-y-6 transition-all duration-700 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-zinc-400 text-sm">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange('name')}
                className="bg-zinc-800/50 border-zinc-700/50 text-zinc-50 placeholder:text-zinc-600 focus:border-teal-500/50 focus:ring-teal-500/20 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-400 text-sm">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange('email')}
                className="bg-zinc-800/50 border-zinc-700/50 text-zinc-50 placeholder:text-zinc-600 focus:border-teal-500/50 focus:ring-teal-500/20 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-zinc-400 text-sm">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or just say hello..."
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                className="bg-zinc-800/50 border-zinc-700/50 text-zinc-50 placeholder:text-zinc-600 focus:border-teal-500/50 focus:ring-teal-500/20 resize-none transition-all duration-200"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-teal-600 hover:bg-teal-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 group"
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Opening Email...
                </span>
              ) : sent ? (
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Email Client Opened!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Message
                </span>
              )}
            </Button>
            <p className="text-xs text-zinc-600 text-center">
              This will open your default email client with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
