import React from 'react';
import { skillsData } from '../data/portfolio';
import {
  Code,
  BrainCircuit,
  LineChart,
  Library,
  GitBranch,
  Monitor,
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  programming: <Code className="w-5 h-5 text-accent" />,
  'machine-learning': <BrainCircuit className="w-5 h-5 text-accent" />,
  'data-analytics': <LineChart className="w-5 h-5 text-accent" />,
  'data-science-libs': <Library className="w-5 h-5 text-accent" />,
  'dev-tools': <GitBranch className="w-5 h-5 text-accent" />,
  'os-networking': <Monitor className="w-5 h-5 text-accent" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-border-subtle bg-bg-main">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent tracking-wider uppercase">
            <span>Technical Arsenal</span>
            <span className="w-10 h-px bg-border-card" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-text-primary">
            Technical Arsenal
          </h2>
          <p className="text-section-subhead text-text-secondary max-w-3xl">
            Tools and technologies I use to build, analyze, and experiment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-card hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  {CATEGORY_ICONS[category.id] ?? <Code className="w-5 h-5 text-accent" />}
                </div>
                <span className="text-xs font-mono text-text-muted">
                  {category.skills.length} skills
                </span>
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-1.5 group-hover:text-white transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {category.description}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border-subtle hover:border-accent/30 transition-colors text-sm font-mono text-text-primary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{skill.name}</span>
                    {skill.note && (
                      <span className="text-xs text-accent bg-accent-muted px-1.5 py-0.5 rounded">
                        {skill.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
