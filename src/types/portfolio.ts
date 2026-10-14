export interface ProfileData {
  name: string;
  initials: string;
  tagline: string;
  heroHeadline: string;
  heroIntro: string;
  availability: {
    status: boolean;
    text: string;
  };
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
  };
  resume: {
    filePath: string;
    fileName: string;
    available: boolean;
  };
  about: {
    lead: string;
    paragraphs: string[];
    interests: string[];
  };
  education: EducationEntry;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  cgpa: string;
  location: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  details: string[];
  technologies: string[];
}

export interface AchievementEntry {
  id: string;
  title: string;
  subtitle: string;
  category: 'Conference' | 'Hackathon' | 'Publication';
  description: string;
  publicationTitle?: string;
  verifyUrl: string;
}
