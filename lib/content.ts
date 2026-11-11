/* Single source of truth for every word on the page. */

export const PERSON = {
  name: "Aaryan Chhabra",
  role: "Computer Science undergrad",
  school: "MIT-WPU",
  city: "Pune",
  email: "aaryanchhabra70@gmail.com",
  phone: "+91 84128 35665",
  phoneHref: "tel:+918412835665",
  github: "https://github.com/Kur00o",
  githubHandle: "Kur00o",
  linkedin: "https://www.linkedin.com/in/aaryan-chhabra/",
};

export const LOOP_STAGES = [
  {
    word: "Observe",
    caption:
      "Look before you type. Kira opens every cycle with recon, and I open every project the same way.",
  },
  {
    word: "Think",
    caption:
      "Reason over what came back. Kira does it with Gemma 3 4B running locally through Ollama.",
  },
  {
    word: "Act",
    caption:
      "Pick a tool, run it, log it. Fourteen tools, per-tool timeouts, thread-safe JSON state. Then go again.",
  },
] as const;

export type TermLine = { stage: 0 | 1 | 2; prefix: string; tone: "dim" | "red" | "lime" | "snow"; text: string };

export const LOOP_LINES: TermLine[] = [
  { stage: 0, prefix: "❯", tone: "dim", text: "kira --target 10.10.0.1 --mode full" },
  { stage: 0, prefix: "[OBSERVE]", tone: "red", text: "nmap -sV -p- 10.10.0.1" },
  { stage: 0, prefix: "✓", tone: "lime", text: "open ports: 22, 80, 443, 8080" },
  { stage: 1, prefix: "[THINK]", tone: "red", text: "reasoning over scan output…" },
  { stage: 1, prefix: "✓", tone: "lime", text: "hypothesis: CVE-2024-3094 candidate" },
  { stage: 2, prefix: "[ACT]", tone: "red", text: "searchsploit openssh 8.9" },
  { stage: 2, prefix: "✓", tone: "lime", text: "3 exploits matched → queued" },
  { stage: 2, prefix: "↩", tone: "snow", text: "next cycle: enumerate :8080…" },
];

export type Build = {
  slug: "kira" | "containercraft" | "cotton";
  title: string;
  subtitle: string;
  award: string;
  won: boolean;
  github?: string;
  description: string[];
  tags: string[];
};

export const BUILDS: Build[] = [
  {
    slug: "kira",
    title: "Kira",
    subtitle: "Autonomous penetration testing agent",
    award: "Winner — CSI MIT-WPU Fussion Agentic AI Sprint 2026",
    won: true,
    github: "https://github.com/Kur00o/Kira",
    description: [
      "A terminal-based agent that runs the full pentest lifecycle on its own: recon, enumeration, exploitation, report. Driven by a local LLM (Gemma 3 4B via Ollama).",
      "14-tool dispatch system, atomic JSON state with thread-safe writes, JSONL logging, per-tool timeouts.",
      "Talks to nmap, gobuster, searchsploit, enum4linux and pymetasploit3.",
    ],
    tags: ["Python", "LLM", "Ollama", "nmap", "Metasploit"],
  },
  {
    slug: "containercraft",
    title: "ContainerCraft",
    subtitle: "Visual Docker Compose builder",
    award: "FOSS Hack 2026",
    won: false,
    github: "https://github.com/Kur00o/Container-Craft",
    description: [
      "Open-source drag-and-drop Docker Compose configurator. React + React Flow on the front, FastAPI + Pydantic behind it.",
      "A 16-rule Pydantic validation layer catches broken compose configs before a file is ever written. 8 ready-made service templates.",
      "Shipped to production in 30 days with 70%+ pytest coverage. MIT licensed.",
    ],
    tags: ["React", "React Flow", "FastAPI", "Pydantic"],
  },
  {
    slug: "cotton",
    title: "Cotton Doctor",
    subtitle: "AI disease detection for cotton crops",
    award: "Winner — IRIS Hackathon 2024 (BharatGO)",
    won: true,
    description: [
      "ResNet-18 CNN trained on 4,200 annotated cotton-leaf images. 91% accuracy across 6 disease classes.",
      "Pitched live to BharatGO’s CEO at IRIS Hackathon and took first place.",
    ],
    tags: ["PyTorch", "ResNet-18", "Computer Vision"],
  },
];

export const CLIENTS = [
  {
    name: "Voyyage",
    url: "https://voyyageinvest.com",
    urlDisplay: "voyyageinvest.com",
    blurb:
      "SEBI-registered quantitative research firm. A live market ticker, a three-pillar Vector Framework explainer, and tiered pricing with KYC-gated onboarding.",
    note: "Designed and shipped via Lovable.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/client-work/voyyage.png",
  },
  {
    name: "Klynn Ceramics",
    url: "https://klynnceramics.com",
    urlDisplay: "klynnceramics.com",
    blurb:
      "D2C handcrafted stoneware and tableware. A product catalog, cart, and an Instagram-fed “in real rooms” gallery.",
    note: "Designed and shipped via Lovable.",
    stack: ["React", "Tailwind CSS", "Instagram API"],
    image: "/assets/client-work/klynn-ceramics.png",
  },
  {
    name: "Qurve Wealth",
    url: "https://qurvewealth.com",
    urlDisplay: "qurvewealth.com",
    blurb:
      "Mutual fund and wealth advisory. A partner network of 40+ institutions, an investment-basket explainer, and FAQ.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/assets/client-work/qurve-wealth.png",
  },
  {
    name: "Insight AI Club",
    url: "https://insightai.club",
    urlDisplay: "insightai.club",
    blurb:
      "MIT-WPU’s student AI and data science community, where Aaryan is Advisor. Event calendar, project showcase, full member directory.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/assets/client-work/insight-ai-club.png",
  },
] as const;

export const EXPERIENCE = {
  title: "iOS Student Developer Program",
  org: "MIT-WPU — powered by Apple & Infosys",
  role: "Student Developer",
  dates: "July 2025 – Present",
  place: "Pune, India",
  bullets: [
    "One of a 4-person team building a gamified Indian culture and mythology app for kids aged 5–10: a daily investigation-based content engine, a map-based heritage exploration mode, and a family companion layer.",
    "Part of a structured product-strategy process: user research synthesis, competitive analysis and market sizing to validate features before writing code.",
  ],
  tech: ["Swift", "iOS", "RealityKit", "SpriteKit"],
};

export const BUILDING = [
  { title: "Mentor OS", description: "Solving mentor-to-student allocation for colleges.", tbd: false },
  {
    title: "Sage",
    description: "Indian Sign Language translation for everyone, while growing the dataset behind it.",
    tbd: false,
  },
  { title: "Untitled", description: "A mentor-guided project. Name not settled yet.", tbd: true },
];

export const WINS = [
  { year: "2026", result: "Winner", title: "CSI MIT-WPU Fussion Agentic AI Sprint", detail: "with Kira" },
  { year: "2026", result: "Runner-up", title: "MRIIRS Scientific Research Poster Presentation", detail: "" },
  { year: "2025", result: "Winner", title: "RIDExSTARTUPEXPO MIT-WPU", detail: "Top 10 Best Venture Ideas" },
  {
    year: "2024",
    result: "Winner",
    title: "IRIS Hackathon (BharatGO)",
    detail: "led a first-year team against senior-level competition",
  },
  { year: "2024", result: "Runner-up", title: "State Level Game Designing Competition", detail: "" },
] as const;

export const SKILLS = [
  { category: "Languages", tags: ["Python", "C++", "Swift", "SQL (MySQL)"] },
  {
    category: "Frameworks",
    tags: ["FastAPI", "React", "React Flow", "Pydantic", "Pandas", "NumPy", "Seaborn", "Jinja2", "RealityKit", "SpriteKit"],
  },
  { category: "Tools", tags: ["Git", "GitHub", "Docker", "Ollama", "Linux"] },
];
