import React from 'react';
import { profileData } from '../data/portfolio';
import { GraduationCap, Calendar, MapPin, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-border-subtle bg-bg-main">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent tracking-wider uppercase">
            <span>About Me</span>
            <span className="w-10 h-px bg-border-card" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-text-primary">
            About Me
          </h2>
          <p className="text-section-subhead text-text-secondary max-w-3xl">
            Curiosity, code, and data-driven problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-bg-card border border-border-card space-y-5 glow-violet">
              <p className="text-base sm:text-lg text-text-primary leading-relaxed">
                {profileData.about.lead}
              </p>
              {profileData.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Interests */}
            <div className="p-6 rounded-2xl bg-bg-secondary border border-border-subtle">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-text-muted font-semibold">
                  Professional Interests
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-lg bg-accent-muted border border-accent/20 text-sm font-medium text-accent"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education Card */}
          <div className="p-7 sm:p-8 rounded-2xl bg-bg-card border border-border-card space-y-5 glow-violet">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-mono text-accent font-semibold">Education</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                {profileData.education.degree}
              </h3>
              <p className="text-base text-text-secondary mt-1">
                {profileData.education.specialization}
              </p>
              <p className="text-sm text-text-muted mt-1 font-mono">
                {profileData.education.institution}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-mono text-text-muted">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{profileData.education.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{profileData.education.location}</span>
              </div>
            </div>

            {/* CGPA Highlight */}
            <div className="p-5 rounded-xl bg-bg-secondary border border-border-subtle flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                  Current CGPA
                </span>
                <div className="text-3xl font-extrabold gradient-text mt-1">
                  {profileData.education.cgpa}
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                <span className="text-lg font-bold text-accent">8.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
