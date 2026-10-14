import React from 'react';
import { profileData } from '../data/portfolio';
import { ArrowDown, Download, Sparkles } from 'lucide-react';

const SKILL_TAGS = ['Python', 'SQL', 'Machine Learning', 'Data Analytics'];
const FLOATING_LABELS = ['AI & ML', 'Data Analytics', 'Python'];

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 88;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 flex flex-col justify-center overflow-hidden bg-ambient bg-grid"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-cyan/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="site-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Intro label */}
            <div className="animate-fade-in-up opacity-0 animation-delay-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border-subtle">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-text-secondary">
                  Hello, I'm Navya
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up opacity-0 animation-delay-200">
              <h1 className="text-hero-headline font-extrabold tracking-tight text-text-primary">
                Building Intelligent Solutions with{' '}
                <span className="gradient-text">Data & AI</span>.
              </h1>
            </div>

            {/* Supporting intro */}
            <div className="animate-fade-in-up opacity-0 animation-delay-300">
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
                {profileData.heroIntro}
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-fade-in-up opacity-0 animation-delay-400 pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-accent text-white hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/35 active:scale-[0.97]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={profileData.resume.filePath}
                download={profileData.resume.fileName}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium rounded-xl bg-bg-card text-text-primary hover:bg-bg-card-hover border border-border-card hover:border-accent/40 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Let's Connect link */}
            <div className="animate-fade-in-up opacity-0 animation-delay-500">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="text-sm text-accent hover:text-accent-hover transition-colors font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
              >
                Let's Connect →
              </button>
            </div>

            {/* Skill indicators */}
            <div className="animate-fade-in-up opacity-0 animation-delay-500 flex flex-wrap items-center gap-2 pt-2">
              {SKILL_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-bg-card border border-border-subtle text-xs sm:text-sm font-mono text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-up opacity-0 animation-delay-300">
              {/* Decorative gradient glow behind photo */}
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/20 via-cyan/10 to-transparent blur-3xl rounded-full pointer-events-none" />

              {/* Photo container */}
              <div className="relative photo-ring-lg">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px] rounded-3xl overflow-hidden bg-bg-card">
                  <img
                    src="/images/navya-profile.jpg"
                    alt="Navya S — AI Enthusiast and Data Analyst"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating labels */}
              {FLOATING_LABELS.map((label, i) => {
                const positions = [
                  'top-2 -left-6 sm:-left-10',
                  '-bottom-2 -left-4 sm:-left-8',
                  'top-1/3 -right-6 sm:-right-10',
                ];
                const delays = ['animation-delay-300', 'animation-delay-400', 'animation-delay-500'];
                return (
                  <div
                    key={label}
                    className={`absolute ${positions[i]} animate-float ${delays[i]} hidden sm:block`}
                  >
                    <span className="px-3 py-1.5 rounded-lg bg-bg-card/90 backdrop-blur-sm border border-border-card text-xs font-mono text-text-secondary shadow-lg">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-fade-in-up opacity-0 animation-delay-500">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-current group-hover:animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
