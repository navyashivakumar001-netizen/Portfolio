import React from 'react';
import { profileData } from '../data/portfolio';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  const edu = profileData.education;

  return (
    <section id="education" className="py-20 sm:py-24 border-t border-border-subtle bg-bg-main">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent tracking-wider uppercase">
            <span>Education</span>
            <span className="w-10 h-px bg-border-card" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-text-primary">
            Education
          </h2>
          <p className="text-section-subhead text-text-secondary max-w-3xl">
            Academic foundation in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl">
          <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-border-card glow-violet">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent-muted border border-accent/20 flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  {edu.degree}
                </h3>
                <p className="text-lg text-text-secondary mt-1">
                  {edu.specialization}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 mb-4">
              <BookOpen className="w-5 h-5 text-accent" />
              <p className="text-base text-text-secondary font-mono">
                {edu.institution}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-mono text-text-muted mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{edu.location}</span>
              </div>
            </div>

            {/* CGPA display */}
            <div className="p-5 rounded-xl bg-bg-secondary border border-border-subtle flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                  Cumulative GPA
                </span>
                <span className="text-2xl font-extrabold gradient-text">
                  {edu.cgpa}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className={`w-3 h-3 rounded-full ${
                      star <= 4 ? 'bg-accent' : 'bg-accent/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
