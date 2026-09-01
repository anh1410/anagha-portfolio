export const profile = {
  name: 'Anagha Katla',
  fullName: 'Anagha Prashanth Katla',
  tagline: 'Full-stack developer building LLM pipelines, optimization engines, and systems software.',
  location: 'Nitte, Karnataka',
  email: 'anagha.surathkal@gmail.com',
  phone: '6364679216',
  github: 'https://github.com/anh1410',
  linkedin: 'https://www.linkedin.com/in/anaghakatla/',
  resumeUrl: `${import.meta.env.BASE_URL}AnaghaPrashanthKatla.pdf`,
  photoUrl: `${import.meta.env.BASE_URL}anagha.jpeg`,
};

export const experience = [
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Fiza Group',
    date: 'Jul 2026 – Present',
    points: [
      'Built and maintain StockOS, an 8-module inventory & repair-ticket system for a multi-retailer aggregator client',
    ],
    tags: ['React', 'Express', 'Prisma'],
  },
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Sri Vani School Education Center',
    date: 'Jun 2026 – Present',
    points: [
      'Building SynapSet, an LLM-driven exam-generation platform',
    ],
    tags: ['FastAPI', 'Gemini API', 'OR-Tools'],
  },
  {
    role: 'Centralized Server Deployment & Maintenance',
    org: 'Sri Vani School Education Center',
    date: 'Feb 2026 – May 2026',
    points: [
      'Deployed & maintained a Linux server (Apache, Samba, PHP) for 40+ users, 20+ devices, handling 10+ revisions',
    ],
    tags: ['Linux', 'Apache', 'PHP'],
  },
];

export const projects = [
  {
    name: 'SynapSet',
    description:
      "LLM agent pipeline ingesting syllabi (PDF/DOCX/PPTX) via entity extraction and PageRank; an OR-Tools CP-SAT optimizer assembles exam papers to per-topic counts across all 6 Bloom's levels with an XGBoost/SHAP difficulty scorer. Includes a duplicate-detection engine fusing semantic, graph, and structural signals.",
    stack: ['FastAPI', 'Google Gemini API', 'XGBoost', 'OR-Tools', 'Pytest'],
    href: 'https://github.com/anh1410/SynapSet',
  },
  {
    name: 'StockOS',
    description:
      'An 8-module inventory & repair-ticket system for a multi-retailer aggregator client. Live dashboard with real-time KPIs, low-stock alerts, a 3-stage repair-ticket pipeline with audit-trail enforcement, and a Prisma/SQLite backend with transaction ledger + invoicing.',
    stack: ['React', 'Vite', 'Tailwind', 'Express', 'Prisma', 'SQLite'],
    href: 'https://github.com/anh1410/Inventory-Management-System',
  },
  {
    name: 'MiniADC',
    description:
      'A Layer 7 reverse proxy / load balancer in C++ with async I/O (Asio) — round-robin, least-connections, and weighted strategies. Active health checks, a signature-based WAF blocking SQLi/XSS/path-traversal, per-IP rate limiting, and a Prometheus-style /metrics endpoint.',
    stack: ['C++', 'Asio', 'CMake', 'Multithreading'],
    href: 'https://github.com/anh1410/mini-adc',
  },
  {
    name: 'voiceNova',
    description:
      'A voice-first planner: dump unstructured thoughts and let a 70B-parameter Groq LLaMA-3.3 model auto-organize them into tasks and events. Local Whisper-based speech recognition for hands-free capture, containerized as two Docker Compose services with offline-first fallback.',
    stack: ['React Native (Expo)', 'Python', 'Groq/LLaMA', 'Docker'],
    href: 'https://github.com/anh1410/voiceNova',
  },
];

export const skills = {
  Languages: ['Python', 'C++', 'TypeScript/JavaScript', 'PHP', 'SQL'],
  'Backend / AI / Systems': [
    'Node.js/Express',
    'FastAPI',
    'Flask',
    'Prisma ORM',
    'LLM Agents',
    'RAG Pipelines',
    'Gemini API',
    'Groq/LLaMA',
    'XGBoost',
    'ChromaDB',
    'Asio',
  ],
  Frontend: ['React', 'React Native (Expo)', 'Tailwind CSS', 'Vite'],
  'Data / Infra / Tools': [
    'SQLite',
    'PostgreSQL',
    'Docker',
    'Linux',
    'Apache',
    'Git',
    'Postman',
    'OR-Tools',
    'CMake',
  ],
};

export const education = {
  school: 'NMAM Institute of Technology',
  location: 'Nitte, Karnataka',
  degree: 'B.Tech in Computer and Communication Engineering',
  date: 'Aug 2023 – May 2027',
};

export const leadership = {
  role: 'Event Co-Head & Social Media Manager',
  org: 'ACM Student Chapter, NMAM Institute of Technology',
  date: '2024 – 2026',
  points: [
    'Co-led planning and execution of 3+ technical workshops and coding events reaching 100+ student attendees',
    'Grew social media presence to 8,500+ accounts reached with a 158.8% increase in engagement through targeted campaigns',
  ],
};

export const certifications = [
  'Microsoft Learn – Azure AI Agent Development and Generative AI',
  'Postman API Fundamentals – Student Expert',
];
