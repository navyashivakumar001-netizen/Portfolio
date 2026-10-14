import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import type { Project } from '../types/portfolio';
import {
  Mail,
  Activity,
  ShieldCheck,
  CheckCircle2,
  X,
  ExternalLink,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'mailsentry-insight':
        return <Mail className="w-5 h-5 text-accent" />;
      case 'offline-voice-keyboard':
        return <Activity className="w-5 h-5 text-accent" />;
      case 'driver-safety-system':
        return <ShieldCheck className="w-5 h-5 text-accent" />;
      default:
        return <Mail className="w-5 h-5 text-accent" />;
    }
  };

  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'mailsentry-insight':
        return (
          <div className="h-44 sm:h-48 w-full bg-bg-secondary p-5 flex flex-col justify-between border-b border-border-subtle overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-text-secondary font-medium">Streamlit + SQLite</span>
              </span>
              <span className="text-accent bg-accent-muted px-2 py-0.5 rounded text-xs font-medium">
                Analytics
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 my-auto">
              {['Classify', 'Extract', 'Analyze', 'Report'].map((label, i) => (
                <div key={label} className="p-2 rounded-lg bg-bg-card border border-border-subtle text-center">
                  <div className={`w-full h-1.5 rounded-full mb-2 ${i === 2 ? 'bg-accent' : 'bg-border-card'}`} />
                  <span className="text-xs font-mono text-text-secondary">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span>Input: Gmail IMAP</span>
              <span>Output: PDF/CSV Reports</span>
            </div>
          </div>
        );

      case 'offline-voice-keyboard':
        return (
          <div className="h-44 sm:h-48 w-full bg-bg-secondary p-5 flex flex-col justify-between border-b border-border-subtle overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent" />
                <span className="text-text-secondary font-medium">Vosk + PyQt5</span>
              </span>
              <span className="text-accent bg-accent-muted px-2 py-0.5 rounded text-xs font-medium">
                Offline AI
              </span>
            </div>

            <div className="flex items-center justify-center gap-1 my-auto">
              {[22, 40, 16, 54, 72, 34, 82, 48, 96, 62, 34, 68, 45, 26, 14, 56, 38, 20].map(
                (h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h * 0.38}px` }}
                    className="w-1.5 sm:w-2 rounded-full bg-accent/70 hover:bg-accent transition-all"
                  />
                )
              )}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span>Engine: vosk-model-small</span>
              <span>Grammar: LanguageTool</span>
            </div>
          </div>
        );

      case 'driver-safety-system':
      default:
        return (
          <div className="h-44 sm:h-48 w-full bg-bg-secondary p-5 flex flex-col justify-between border-b border-border-subtle overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-text-secondary font-medium">ML + IoT Sensors</span>
              </span>
              <span className="text-cyan bg-cyan-muted px-2 py-0.5 rounded text-xs font-medium">
                IoT + ML
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 my-auto font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-bg-card border border-border-subtle text-text-secondary text-center flex-1">
                <span className="block text-text-muted text-[10px]">Sensors</span>
                <span className="font-medium">GPS + BLE</span>
              </div>
              <span className="text-accent font-bold">→</span>
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/25 text-accent text-center flex-1 font-medium">
                ML Model
              </div>
              <span className="text-accent font-bold">→</span>
              <div className="p-2.5 rounded-xl bg-bg-card border border-border-subtle text-text-primary text-center flex-1">
                <span className="block text-text-muted text-[10px]">Output</span>
                <span className="font-medium">Alert</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span>Fatigue Detection Pipeline</span>
              <span>Emergency Response</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-border-subtle bg-bg-main">
      <div className="site-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-accent tracking-wider uppercase">
            <span>Featured Projects</span>
            <span className="w-10 h-px bg-border-card" />
          </div>
          <h2 className="text-section-headline font-extrabold tracking-tight text-text-primary">
            Featured Projects
          </h2>
          <p className="text-section-subhead text-text-secondary max-w-3xl">
            Selected projects combining AI, analytics, and practical problem solving.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-bg-card border border-border-card hover:border-accent/30 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Visual banner */}
              {renderProjectVisual(project)}

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-muted border border-accent/20 flex items-center justify-center">
                    {getProjectIcon(project.id)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Features preview */}
                <div className="mb-4 space-y-1.5">
                  {project.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-bg-secondary text-xs font-mono text-text-secondary border border-border-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer actions */}
              <div className="px-6 py-4 bg-bg-secondary border-t border-border-subtle flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  View Details
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-card border border-border-subtle hover:border-accent/30 text-sm font-mono text-text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null);
          }}
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-bg-card border border-border-card shadow-2xl p-7 sm:p-9 space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <h3 id="project-detail-title" className="text-2xl font-bold text-text-primary">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-lg bg-bg-secondary border border-border-subtle text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-text-secondary leading-relaxed">
              {activeProject.description}
            </p>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-text-muted mb-3">
                Key Features
              </h4>
              <ul className="space-y-2.5">
                {activeProject.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-text-muted mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-bg-secondary border border-border-subtle text-sm font-mono text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle flex items-center justify-end gap-3">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 rounded-lg bg-bg-secondary text-text-secondary hover:text-text-primary text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
