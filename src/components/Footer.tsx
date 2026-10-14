import React from 'react';
import { profileData } from '../data/portfolio';
import { Mail, ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

const FOOTER_NAV = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) {
      const navOffset = 88;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 sm:py-14 border-t border-border-subtle bg-[#070912]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          {/* Brand */}
          <div className="space-y-1.5">
            <span className="text-lg font-bold tracking-tight text-text-primary">
              NAVYA<span className="gradient-text">.S</span>
            </span>
            <p className="text-sm text-text-secondary">
              {profileData.tagline}
            </p>
          </div>

          {/* Footer nav + actions */}
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
            {FOOTER_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href={`mailto:${profileData.contact.email}`}
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-bg-card border border-border-subtle hover:border-accent/30 hover:text-accent transition-colors text-text-muted"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-muted">
          <span>
            © {CURRENT_YEAR} {profileData.name}. All rights reserved.
          </span>
          <span>
            Built with React, TypeScript & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};
