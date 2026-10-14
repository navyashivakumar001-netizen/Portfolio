import React, { useState } from 'react';
import { profileData } from '../data/portfolio';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-border-subtle bg-bg-main relative">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent tracking-wider uppercase">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-text-primary">
            Let's Build Something Meaningful
          </h2>
          <p className="text-section-subhead text-text-secondary max-w-2xl mx-auto">
            Have an opportunity, a project idea, or a shared interest in AI and data? I'd be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Info Cards */}
          <div className="space-y-5">
            {/* Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-card space-y-4 glow-violet">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase">Email</span>
                    <p className="text-base font-mono text-text-primary font-medium break-all">
                      {profileData.contact.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white hover:bg-accent-hover text-sm font-semibold transition-colors shadow-md shadow-accent/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-secondary border border-border-subtle text-sm font-mono text-text-secondary hover:text-text-primary transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-accent" />
                      <span className="text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase">Phone</span>
                  <a
                    href={`tel:${profileData.contact.phone.replace(/\s/g, '')}`}
                    className="text-base font-mono text-text-primary font-medium block hover:text-accent transition-colors"
                  >
                    {profileData.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase">Location</span>
                  <p className="text-base text-text-primary font-medium">
                    {profileData.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-bg-card border border-border-card hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <svg className="w-5 h-5 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">GitHub</span>
                </a>
              )}

              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-bg-card border border-border-card hover:border-accent/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <svg className="w-5 h-5 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="p-7 sm:p-9 rounded-2xl bg-bg-card border border-border-card space-y-6 flex flex-col justify-between glow-violet-strong">
            <div className="space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-cyan flex items-center justify-center shadow-lg shadow-accent/20">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Ready to Connect?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Whether it's a data science internship, a collaborative AI project, or just a conversation about technology — I'd love to hear from you. Drop me an email and I'll get back to you promptly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-bg-secondary border border-border-subtle space-y-3">
                <div className="flex items-center justify-between text-sm font-mono">
                  <span className="text-text-muted">Response time</span>
                  <span className="text-accent font-medium">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm font-mono">
                  <span className="text-text-muted">Preferred method</span>
                  <span className="text-text-primary font-medium">Email</span>
                </div>
                <div className="flex items-center justify-between text-sm font-mono">
                  <span className="text-text-muted">Availability</span>
                  <span className="text-accent font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${profileData.contact.email}?subject=Opportunity%20/%20Inquiry%20for%20Navya%20S`}
              className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-accent text-white hover:bg-accent-hover text-base font-bold transition-colors shadow-lg shadow-accent/25"
            >
              <Send className="w-5 h-5" />
              <span>Send Me an Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
