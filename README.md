# Navya S — Portfolio Website

A premium, responsive personal portfolio website for Navya S — an aspiring AI Professional, Data Analyst, and Python Developer.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🛠 Technology Stack

- **React 19** — UI framework
- **TypeScript 6** — Type safety
- **Vite 8** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **Lucide React** — Icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         # Sticky navigation with mobile menu
│   ├── Hero.tsx           # Hero section with profile photo
│   ├── About.tsx          # Biography & education overview
│   ├── Skills.tsx         # Technical skills in categorized groups
│   ├── Projects.tsx       # Featured project cards with modals
│   ├── Experience.tsx     # Professional experience timeline
│   ├── Achievements.tsx   # Awards & IEEE publication
│   ├── Education.tsx      # Academic details & CGPA
│   ├── Contact.tsx        # Contact information & email CTA
│   └── Footer.tsx         # Footer with navigation & copyright
├── data/
│   └── portfolio.ts       # Central data file (edit here to update content)
├── types/
│   └── portfolio.ts       # TypeScript interfaces
├── App.tsx                # Root application component
├── main.tsx               # React entry point
└── index.css              # Design system & global styles

public/
├── images/
│   └── navya-profile.jpg  # Profile photograph
├── resume.pdf             # Downloadable resume
└── favicon.svg            # Custom gradient favicon
```

## ✏️ Updating Content

All portfolio content is centralized in `src/data/portfolio.ts`. Edit this single file to update:

- Profile information & contact details
- Skills and technology groups
- Project descriptions & features
- Work experience
- Achievements & publications
- Education details

### Adding Social Links

GitHub and LinkedIn URLs are configured in the `contact` object within `src/data/portfolio.ts`. Replace the empty strings with verified URLs:

```ts
contact: {
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
},
```

### Adding Project GitHub URLs

Project repository URLs are in the `projectsData` array. Replace empty `githubUrl` values with actual URLs to show GitHub buttons on project cards.

### Adding IEEE Publication Link

In the `achievementsData` array, find the IEEE publication entry and add the verified DOI/URL to `verifyUrl`.

## 🎨 Design

- **Dark theme** with charcoal background (#0B0D12)
- **Electric violet** primary accent (#8B5CF6)
- **Cyan** secondary accent (#06B6D4)
- **Inter** font for body text
- **JetBrains Mono** for code/technical elements
- Responsive from 320px mobile to 1440px+ desktop
- Reduced-motion support for accessibility

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the `dist/` directory
```

### GitHub Pages

```bash
npm run build
# Push the `dist/` directory to gh-pages branch
```

## 📄 License

© 2026 Navya S. All rights reserved.
