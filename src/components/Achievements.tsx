import React from 'react';
import { achievementsData } from '../data/portfolio';
import { Award, Trophy, BookOpen, ExternalLink } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Conference: <Award className="w-6 h-6 text-accent" />,
  Hackathon: <Trophy className="w-6 h-6 text-accent" />,
  Publication: <BookOpen className="w-6 h-6 text-accent" />,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 sm:py-24 border-t border-border-subtle bg-bg-main">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent tracking-wider uppercase">
            <span>Achievements & Recognition</span>
            <span className="w-10 h-px bg-border-card" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-text-primary">
            Achievements & Recognition
          </h2>
          <p className="text-section-subhead text-text-secondary max-w-3xl">
            Conference awards, hackathon wins, and peer-reviewed research publications.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {achievementsData.map((item, idx) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-bg-card border border-border-card hover:border-accent/30 transition-all duration-300 flex flex-col justify-between group glow-violet"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center group-hover:border-accent/40 transition-colors">
                    {CATEGORY_ICONS[item.category] ?? <Award className="w-6 h-6 text-accent" />}
                  </div>
                  <span className="text-xs font-mono text-accent bg-accent-muted px-3 py-1 rounded-md font-medium">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-mono text-text-secondary mt-1.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                {item.publicationTitle && (
                  <div className="p-4 rounded-xl bg-bg-secondary border border-border-subtle">
                    <span className="text-xs font-mono text-text-muted block mb-1">Paper Title</span>
                    <p className="text-sm text-text-primary font-medium italic leading-relaxed">
                      "{item.publicationTitle}"
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-border-subtle flex items-center justify-between text-sm font-mono">
                <span className="text-text-muted font-bold">0{idx + 1}</span>
                {item.verifyUrl ? (
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover font-medium transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-text-muted">Verified Achievement</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
