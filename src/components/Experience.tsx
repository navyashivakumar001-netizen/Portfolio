import React from 'react';
import { experienceData } from '../data/portfolio';
import { Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-border-subtle bg-bg-main">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent tracking-wider uppercase">
            <span>Professional Experience</span>
            <span className="w-10 h-px bg-border-card" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-text-primary">
            Professional Experience
          </h2>
          <p className="text-section-subhead text-text-secondary max-w-3xl">
            Practical industry experience gained through data science internship work.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-border-card ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-bg-main ring-4 ring-accent/20" />

              {/* Experience Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-bg-card border border-border-card hover:border-accent/30 transition-all duration-300 space-y-5 glow-violet">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-accent-muted border border-accent/20 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-accent bg-accent-muted px-3 py-1 rounded-md">
                        {exp.role}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-white transition-colors">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:items-end text-sm font-mono text-text-muted space-y-1">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{exp.dates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-base text-text-primary leading-relaxed">
                  {exp.description}
                </p>

                {/* Key details */}
                <div className="space-y-2.5 pt-3 border-t border-border-subtle">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-text-muted font-semibold mr-1">
                    Stack:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-bg-secondary text-xs font-mono text-text-primary border border-border-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
