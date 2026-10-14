import type {
  ProfileData,
  SkillCategory,
  Project,
  ExperienceEntry,
  AchievementEntry,
} from '../types/portfolio';

// ─────────────────────────────────────────────────────────
// PROFILE & CONTACT
// ─────────────────────────────────────────────────────────
export const profileData: ProfileData = {
  name: 'Navya S',
  initials: 'NS',
  tagline: 'Aspiring AI Professional | Data Analyst | Python Developer',
  heroHeadline: 'Building Intelligent Solutions with Data & AI.',
  heroIntro:
    "I'm an aspiring AI enthusiast, Data Analyst, and Python Developer passionate about transforming data into meaningful insights and building intelligent applications.",
  availability: {
    status: true,
    text: 'Open to Internship & Full-time Opportunities',
  },
  contact: {
    email: 'navyashivakumar001@gmail.com',
    phone: '+91 80722 51585',
    // NOTE: Replace with actual verified URLs when available
    github: 'https://github.com/navyashivakumar001-netizen',
    linkedin: '',
    location: 'Hosur, Tamil Nadu, India',
  },
  resume: {
    filePath: '/resume.pdf',
    fileName: 'Navya_S_Resume.pdf',
    available: true,
  },
  about: {
    lead: 'Navya S is pursuing a Bachelor of Engineering in Computer Science and Engineering at Er. Perumal Manimekalai College of Engineering, Hosur (2023–2027), with a CGPA of 8.7/10.',
    paragraphs: [
      'She is deeply interested in Python development, machine learning, data analytics, and AI-powered applications. Her practical experience includes a Data Science internship at White & Box Tech Products and Services, where she worked with machine learning models, data preprocessing, exploratory data analysis, and visualization.',
      'She has developed projects involving email analytics, offline speech recognition, and an IoT-enabled driver safety system. She has received recognition for paper presentation and open-source development, and co-authored a research publication listed in IEEE Xplore.',
    ],
    interests: [
      'Python Development',
      'Machine Learning',
      'Data Analytics',
      'AI Applications',
    ],
  },
  education: {
    institution: 'Er. Perumal Manimekalai College of Engineering, Hosur',
    degree: 'Bachelor of Engineering',
    specialization: 'Computer Science and Engineering',
    period: 'August 2023 – May 2027',
    cgpa: '8.7/10',
    location: 'Hosur, Tamil Nadu',
  },
};

// ─────────────────────────────────────────────────────────
// TECHNICAL SKILLS
// ─────────────────────────────────────────────────────────
export const skillsData: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    description: 'Core languages for building applications and querying data.',
    skills: [
      { name: 'Python', note: 'Primary' },
      { name: 'SQL' },
      { name: 'C' },
    ],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'Frameworks and techniques for building intelligent models.',
    skills: [
      { name: 'Scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'CNNs' },
      { name: 'Model Evaluation' },
    ],
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Tools and methods for exploring, cleaning, and visualizing data.',
    skills: [
      { name: 'Data Preprocessing' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Data Visualization' },
      { name: 'Tableau' },
    ],
  },
  {
    id: 'data-science-libs',
    name: 'Data Science Libraries',
    description: 'Python libraries for numerical computing and visualization.',
    skills: [
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
    ],
  },
  {
    id: 'dev-tools',
    name: 'Development Tools',
    description: 'Version control and collaboration platforms.',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    id: 'os-networking',
    name: 'OS & Networking',
    description: 'Operating systems and networking fundamentals.',
    skills: [
      { name: 'Linux' },
      { name: 'Ubuntu' },
      { name: 'CCNA Basics' },
    ],
  },
];

// ─────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────
export const projectsData: Project[] = [
  {
    id: 'mailsentry-insight',
    title: 'MailSentry Insight',
    description:
      'Developed an email analytics dashboard with Gmail integration, intelligent email classification, entity extraction, interactive visualizations, and report generation.',
    technologies: ['Python', 'Streamlit', 'SQLite', 'Pandas', 'Plotly', 'Regex', 'BeautifulSoup'],
    features: [
      'Email analytics dashboard',
      'Intelligent email classification',
      'Entity extraction',
      'Interactive visualizations',
      'CSV, Excel, and PDF report generation',
    ],
    // NOTE: Replace with actual verified URL when available
    githubUrl: '',
  },
  {
    id: 'offline-voice-keyboard',
    title: 'Offline AI Voice Keyboard System',
    description:
      'Built an offline speech-to-text keyboard that supports real-time voice recognition, grammar correction, and automated desktop text input.',
    technologies: ['Python', 'Vosk', 'PyQt5', 'LanguageTool'],
    features: [
      'Offline speech recognition',
      'Real-time transcription',
      'Grammar correction',
      'Desktop text input',
    ],
    githubUrl: '',
  },
  {
    id: 'driver-safety-system',
    title: 'AI-Powered Driver Safety System',
    description:
      'Developed an IoT-enabled driver safety system using machine learning and sensor data to detect driver fatigue and trigger emergency alerts.',
    technologies: ['Python', 'Machine Learning', 'IoT', 'Sensor Data', 'GPS', 'BLE'],
    features: [
      'Driver fatigue detection',
      'Sensor-based monitoring',
      'GPS and BLE integration',
      'Emergency alert generation',
    ],
    githubUrl: '',
  },
];

// ─────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────
export const experienceData: ExperienceEntry[] = [
  {
    id: 'white-and-box',
    company: 'White & Box Tech Products and Services',
    role: 'Data Science Intern',
    dates: 'December 2025 – March 2026',
    location: 'India',
    description:
      'Worked on machine learning models using Python and Scikit-learn, with a focus on data preprocessing, exploratory data analysis, and visualization using Pandas and Matplotlib.',
    details: [
      'Worked with real-world datasets',
      'Contributed to AI-based applications',
      'Practiced data preparation and analytical problem solving',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Data Preprocessing', 'EDA'],
  },
];

// ─────────────────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────────────────
export const achievementsData: AchievementEntry[] = [
  {
    id: 'ncss-ai-26',
    title: 'Winner — Best Paper Presentation',
    subtitle: "NCSS AI'26 Conference",
    category: 'Conference',
    description:
      'Awarded Best Paper Presentation for research on AI/ML methodology at the NCSS AI\'26 national conference.',
    verifyUrl: '',
  },
  {
    id: 'reva-hackathon',
    title: 'Winner — Best Use of Open Source',
    subtitle: 'National-Level Open-Source Hackathon, REVA University',
    category: 'Hackathon',
    description:
      'Recognized for exceptional integration and utilization of open-source tools and architectures to build a working software solution.',
    verifyUrl: '',
  },
  {
    id: 'ieee-publication',
    title: 'IEEE Conference Publication — 2026',
    subtitle: 'IEEE Xplore',
    category: 'Publication',
    description:
      'Co-authored a research paper published in IEEE Xplore exploring real-time distress recognition using multi-sensor wearable devices.',
    publicationTitle:
      'Real-Time Distress Recognition and Alert Generation Using Multi-Sensor Wearable Devices',
    // NOTE: Replace with actual verified DOI/URL when available
    verifyUrl: '',
  },
];
