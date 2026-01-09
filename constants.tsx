
import React from 'react';
import { ProjectData, TimelineEvent } from './types';

// Using placeholders that you can replace with your actual assets
export const USER_PORTRAIT_MAIN = "https://i.postimg.cc/nzwQT0cG/5.png"; 
export const USER_PORTRAIT_SIDE = "https://i.postimg.cc/XNHgDkzn/1.png";
export const DESKTOP_WALLPAPER = "https://i.postimg.cc/sg7npkmP/55-(1).png";

export const CONTACT_INFO = {
  email: "dinushapushparajah@gmail.com",
  linkedin: "https://www.linkedin.com/in/dinusha-pushparajah-747a44215/?skipRedirect=true",
  github: "https://github.com/Dinushastargirl",
  whatsapp: "+94710134406",
  phone: "+94 71 013 4406"
};

export const BIO = {
  headline: "I build. I solve. I evolve.",
  subtext: "A creator turned developer exploring AI, blockchain & product engineering.",
  intro: "I started my career creating engaging content, but my curiosity for tech led me to explore programming, AI, and Blockchain. Now, I focus on building problem-solving products."
};

export const SKILLS = [
  "Python", "Rust", "Go", "TypeScript", "C/C++", 
  "React", "Flask", "Pygame", "PoseNet", "MediaPipe",
  "CyberOps", "Computer Vision", "Blockchain"
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "Origin",
    title: "Content Writer – First Opportunity",
    description: "I started my career as a content writer. My boss noticed my curiosity and gave me the chance to learn about development and programming stacks.",
    icon: 'work'
  },
  {
    year: "Transition",
    title: "Web Developer – First Experience",
    description: "I transitioned into web development and started building websites professionally, laying the groundwork for my technical career.",
    icon: 'tech'
  },
  {
    year: "2023",
    title: "UX/UI Internship",
    description: "Completed a UX/UI internship in 2023 to improve my design skills. Unfortunately, I couldn’t secure a job afterward because I didn’t have a degree yet.",
    icon: 'work'
  },
  {
    year: "2024",
    title: "Back to Content Writing",
    description: "Returned briefly to content writing, but it didn’t work out. I decided to focus on formal education to bridge the gap.",
    icon: 'work'
  },
  {
    year: "2024",
    title: "University Degree – Colombo University",
    description: "Started my Computer Science degree at Colombo University, aiming to strengthen my technical foundation.",
    icon: 'education'
  },
  {
    year: "2024",
    title: "Content Creator – DC Group",
    description: "Began as a content creator at DC Group. My leaders noticed my talent in creating websites, giving me the opportunity to work on real projects.",
    icon: 'work'
  },
  {
    year: "Milestone",
    title: "Key Projects Published",
    description: "Published www.multilaccolorher.com for Women’s Day campaign and www.goyacompetition.com. Other projects allowed me to learn, build, and experiment with new solutions.",
    icon: 'tech'
  },
  {
    year: "Current",
    title: "Hardware Product – One Dial",
    description: "Currently building a hardware product called One Dial, which I am engineering from scratch to streamline communication.",
    icon: 'tech'
  },
  {
    year: "2025",
    title: "Higher Diploma in AI & Data Science",
    description: "Started a Higher Diploma in AI & Data Science. Received a scholarship around August through UoPeople for Computer Science.",
    icon: 'education'
  },
  {
    year: "Vision Today",
    title: "Problem Solver & Builder",
    description: "Now I am focused on becoming a problem-solving professional, building solutions as products to solve real-world challenges.",
    icon: 'tech'
  }
];

export const PROJECTS_INTRO = `Every project below was built to solve a real problem, fulfill an urgent campaign requirement, or deliver a fast interactive solution inside my workplace. I often had very little time, unclear briefs, or zero prior experience with the required technology — but each time, I stepped up, learned fast, and delivered. These projects represent my growth from content creator → problem-solving developer.`;

export const PROJECTS_SUMMARY = `Every project in this portfolio was born from a real need — urgent client campaigns, internal workflow problems, or team requirements. I learned whatever was needed, solved the problem, and delivered the product. My journey is proof that I adapt fast, build fast, and never step back from a challenge.`;

export const PROJECTS: ProjectData[] = [
  {
    id: "pickher",
    title: "PickHer – Women-First Ride Service",
    description: "PickHer is a safety-focused ride service created exclusively for women. For this project, I designed and developed a responsive website that communicates the platform’s purpose, booking process, and driver-verification system. My focus was on clarity, trust, and ease of use—ensuring users immediately understand the value of a women-led ride-hailing service. This project highlights my skills in user experience design, accessibility, clean layouts, and building trustworthy digital products.",
    story: `Women often face real safety concerns when traveling alone—especially at night. I wanted to create a solution built around that reality. As someone who has experienced late-night travel that doesn’t always feel safe or affordable, I recognised the need for a ride service created by women, for women. Many existing ride platforms don’t fully address these concerns, and there are limited options where women can feel genuinely secure and understood.

PickHer was designed to bridge that gap.
The platform focuses on:

Safe, women-only transportation for passengers who feel vulnerable during late-night trips.

Verified female drivers, helping build trust and reduce fear of unsafe encounters.

A simple, transparent booking flow, making it easy and affordable to secure a ride quickly.

A clean, reassuring interface that feels welcoming rather than intimidating.

By creating PickHer, my goal was to build a solution that empowers women to travel with confidence, comfort, and control—especially during moments where safety and cost become major concerns.`,
    tech: ["React", "UX Design", "Responsive Web Design", "Accessibility"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop", // Night travel / safety theme
    links: [{ label: "Visit PickHer", url: "https://pick-her.vercel.app/" }],
    status: "highlight",
    color: "border-pink-500"
  },
  {
    id: "animal-vision",
    title: "Animal Vision Camera",
    description: "A creative campaign required a unique interactive experience to visualize “different perspectives.” I built an animal-vision simulator that uses camera input + pixel manipulation to recreate how cats, snakes, bees, and birds see.",
    tech: ["JS", "TS", "Canvas", "getUserMedia API"],
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop", // Camera lens/abstract
    links: [{ label: "Live Demo", url: "https://merry-phoenix-e0c270.netlify.app/" }],
    status: "completed",
    color: "border-yellow-400"
  },
  {
    id: "goya-spin",
    title: "GOYA Spin The Wheel",
    description: "A promotional campaign needed an engaging digital mechanic to attract participants. I developed a fully animated spinning wheel with easing, confetti, sound, and result logic.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    image: "https://images.unsplash.com/photo-1605218427360-36398e850d30?q=80&w=1000&auto=format&fit=crop", // Carnival/Wheel
    links: [{ label: "Live Demo", url: "https://www.goyacompetition.com" }],
    status: "completed",
    color: "border-pink-500"
  },
  {
    id: "mental-health",
    title: "Mental Health Reflection App",
    description: "We needed a simple, gentle interactive for a wellness initiative. I created a mood-check app with reflective questions inspired by basic CBT and reward psychology.",
    tech: ["HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1000&auto=format&fit=crop", // Peaceful/Health
    links: [{ label: "Live Demo", url: "https://heroic-quokka-a46c13.netlify.app/" }],
    status: "completed",
    color: "border-green-400"
  },
  {
    id: "ai-skin",
    title: "AI Skin Scanner – Ponds",
    description: "A campaign required a skin-analysis tool but no time for a full ML pipeline. I built a lightweight AI-style scanner using image input + basic detection logic to simulate analysis.",
    tech: ["HTML", "CSS", "JS", "Image Processing"],
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1000&auto=format&fit=crop", // Skin/Face/Tech
    links: [{ label: "Live Demo", url: "https://rainbow-pithivier-e66577.netlify.app/" }],
    status: "completed",
    color: "border-rose-300"
  },
  {
    id: "personality-finder",
    title: "Personality Finder",
    description: "A client needed an emotional-engagement tool. I developed a personality reflection quiz with dynamic question flows and result mapping.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1000&auto=format&fit=crop", // Faces/Personality
    links: [{ label: "Live Demo", url: "https://boisterous-entremet-66c304.netlify.app/" }],
    status: "completed",
    color: "border-purple-400"
  },
  {
    id: "nutriline",
    title: "NutriLine – Kids’ Meal Analyzer",
    description: "During a child-nutrition campaign, we needed a quick nutrition calculator. I built a tool that analyzes meals and gives instant nutritional insights using a dataset.",
    tech: ["JS", "Nutrition Dataset", "API"],
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1000&auto=format&fit=crop", // Healthy Food
    links: [{ label: "Live Demo", url: "https://effulgent-cassata-e0fb3b.netlify.app/" }],
    status: "completed",
    color: "border-orange-400"
  },
  {
    id: "heart-rate",
    title: "Heart Rate Image Creator",
    description: "A creative brief needed something artistic + emotional. I created a tool that converts BPM input into pixel-art “emotional landscapes” with downloadable images.",
    tech: ["Canvas API", "JavaScript"],
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1000&auto=format&fit=crop", // Heartbeat/Art
    links: [{ label: "Live Demo", url: "https://effortless-bubblegum-a8d658.netlify.app/" }],
    status: "completed",
    color: "border-red-600"
  },
  {
    id: "order-system",
    title: "ORDER – Beverage Preference System",
    description: "We had an internal problem: the tea/coffee aunty had to climb stairs repeatedly. I built a full system: input forms + conference mode + dashboard calculating floor-wise beverage counts.",
    tech: ["HTML", "CSS", "JS", "Charts"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop", // Coffee/Office
    links: [
        { label: "Input App", url: "https://prismatic-eclair-4f74db.netlify.app/" },
        { label: "Output App", url: "https://legendary-lolly-9b2a44.netlify.app/" }
    ],
    status: "completed",
    color: "border-amber-700"
  },
  {
    id: "multilac-color-her",
    title: "Multilac – “Color Her”",
    description: "Women’s Day campaign needed a “self-expression” activity. I built a color-selection + silhouette customization tool with downloadable artwork.",
    tech: ["HTML", "CSS", "JS", "Canvas API"],
    image: "https://images.unsplash.com/photo-1459749411177-7174426bb660?q=80&w=1000&auto=format&fit=crop", // Paint/Art
    links: [{ label: "Live Demo", url: "https://funny-moonbeam-ffe62d.netlify.app/" }],
    status: "completed",
    color: "border-indigo-500"
  },
  {
    id: "pol-parapura",
    title: "Pol Parapura – Interactive Coconut Tree",
    description: "We needed a cultural storytelling mechanic for a Sri Lankan brand. I designed a hover-based coconut tree where each part reveals unique details.",
    tech: ["HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1000&auto=format&fit=crop", // Coconut Tree
    links: [{ label: "Live Demo", url: "https://transcendent-faloodeh-a5675e.netlify.app/" }],
    status: "completed",
    color: "border-green-700"
  },
  {
    id: "munchee-nekatha",
    title: "Munchee Online Nekatha",
    description: "An Avurudu campaign required a digital countdown to the auspicious time. I built a login + live timer system with festive styling.",
    tech: ["HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop", // Celebration/Lights
    links: [{ label: "Live Demo", url: "https://mellifluous-otter-7d8407.netlify.app/" }],
    status: "completed",
    color: "border-yellow-500"
  },
  {
    id: "brand-caption",
    title: "Brand Caption Generator",
    description: "Our team needed quick caption ideas for multiple brands. I built a simple AI-powered caption generator where users enter brand/tone and get instant content.",
    tech: ["HTML", "CSS", "JS", "AI API"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop", // Writing/Typing
    links: [{ label: "Live Demo", url: "https://magical-melomakarona-4b3187.netlify.app/" }],
    status: "completed",
    color: "border-blue-500"
  },
  {
    id: "laptop-rec",
    title: "Laptop Recommendation Tool",
    description: "We needed a quick “find your fit” interactive for a tech client. I created a logic-based recommendation system based on budget + use-case.",
    tech: ["HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop", // Laptop
    links: [{ label: "Live Demo", url: "https://lively-pithivier-104411.netlify.app/" }],
    status: "completed",
    color: "border-gray-500"
  },
  {
    id: "supermarket-price",
    title: "Supermarket Price Comparator",
    description: "A retail discussion required a quick example tool comparing grocery prices. I built a UI where users enter an item and instantly see cross-supermarket comparison.",
    tech: ["HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop", // Supermarket
    links: [{ label: "Live Demo", url: "https://darling-otter-35a327.netlify.app/" }],
    status: "completed",
    color: "border-emerald-500"
  },
  {
    id: "daintee-flipbook",
    title: "Daintee Hearts Recipe Flipbook",
    description: "Daintee needed a digital version of their printed recipe booklet. I turned it into a flipbook web experience with smooth page transitions.",
    tech: ["HTML", "CSS", "JS", "turn.js"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop", // Recipe Book
    links: [{ label: "Live Demo", url: "https://stunning-marzipan-efb028.netlify.app/" }],
    status: "completed",
    color: "border-red-400"
  },
  {
    id: "multilac-picker",
    title: "Multilac Color Picker",
    description: "A campaign required an interactive color-matching tool. I built an upload-to-color-extract system that matches dominant colors to Multilac’s palette.",
    tech: ["Canvas", "JS", "Color Thief"],
    image: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1000&auto=format&fit=crop", // Colors
    links: [{ label: "Live Demo", url: "https://capable-longma-597f58.netlify.app/" }],
    status: "completed",
    color: "border-teal-400"
  },
  {
    id: "winner-selector",
    title: "Random Winner Selector",
    description: "For giveaways, we needed a fast, fair winner picker. I built a simple list input → randomizer → animated reveal tool.",
    tech: ["JS"],
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop", // Confetti
    links: [{ label: "Live Demo", url: "https://marvelous-cendol-4bf7ae.netlify.app/" }],
    status: "completed",
    color: "border-yellow-300"
  },
  {
    id: "paragraph-gen",
    title: "Random Paragraph Generator",
    description: "Created as an internal tool to quickly generate filler text for mockups.",
    tech: ["HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop", // Typing
    links: [{ label: "Live Demo", url: "https://fancy-muffin-0c07b1.netlify.app/" }],
    status: "completed",
    color: "border-gray-400"
  },
  {
    id: "cyber-typing",
    title: "Cyber Typing Language",
    description: "Cyberpunk-themed typing speed challenge game built for fun.",
    tech: ["Neon CSS", "JS Game Logic"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", // Cyberpunk
    links: [], // No link provided
    status: "completed",
    color: "border-cyan-400"
  },
  {
    id: "one-dial",
    title: "One Dial (Hardware)",
    description: "Currently building a hardware product called One Dial, which I am engineering from scratch to streamline communication.",
    tech: ["Hardware Engineering", "IoT", "Embedded Systems"],
    image: "https://images.unsplash.com/photo-1555664424-778a6902201b?q=80&w=1000&auto=format&fit=crop", // Electronics
    links: [],
    status: "development",
    color: "border-orange-600"
  }
];

export const MINI_TOOLS = [
    { title: "RGB Color Selector", url: "https://visionary-basbousa-7a0e0b.netlify.app/" },
    { title: "BMI Calculator", url: "https://thunderous-vacherin-ccd5e7.netlify.app/" },
    { title: "Love Calculator", url: "https://rainbow-naiad-caa345.netlify.app/" },
    { title: "More Utilities", url: "https://luxury-platypus-e0e4a7.netlify.app/" }
];

export const QUALIFICATIONS = [
  { title: "Google Certified UX Designer", issuer: "Google", date: "Jun 2023" },
  { title: "Meta Certified Social Media Marketing Professional", issuer: "Meta", date: "Jun 2023" },
  { title: "Critical Infrastructure Certification", issuer: "OPSWAT Academy" },
  { title: "Introduction to Generative AI", issuer: "Google Cloud" },
  { title: "Machine Learning Foundations", issuer: "AWS" },
  { title: "Cyber Threat Intelligence 101", issuer: "ArcX" },
  { title: "Game Design and Development", issuer: "American Embassy" },
  { title: "Diploma in ICT", issuer: "Bandarawela Education Centre", date: "2018" },
  { title: "AAT Level 1 & 2", issuer: "AAT" },
  { title: "Cambridge English (Starters, Movers, Flyers, KET)", issuer: "Cambridge" },
  { title: "Digital Marketing Certificate", issuer: "Hubspot Academy" },
  { title: "Introduction to Front-End Development", issuer: "Meta", date: "Jun 2023" },
  { title: "Programming with JavaScript", issuer: "Meta", date: "Jun 2023" },
  { title: "Version Control", issuer: "Meta", date: "Jun 2023" },
  { title: "HTML and CSS in depth", issuer: "Meta", date: "Jun 2023" },
  { title: "Introduction to Back-End Development", issuer: "Meta", date: "Jun 2023" },
  { title: "Full Stack Software Developer Assessment", issuer: "IBM", date: "Jun 2023" },
  { title: "Ethical Hacking for Beginners", issuer: "Simplilearn", date: "Nov 2021" },
  { title: "Design Thinking for Beginners", issuer: "Simplilearn", date: "Nov 2021" },
  { title: "Introduction to Cyber Security", issuer: "Simplilearn", date: "Nov 2021" },
  { title: "Digital Transformation", issuer: "Simplilearn", date: "Nov 2021" },
  { title: "Introduction to Animation Fundamentals", issuer: "Simplilearn", date: "May 2024" },
  { title: "Game-Theoretic Solution Concept", issuer: "Coursera Project Network", date: "Oct 2024" },
  { title: "Create a Business Marketing Brand Kit", issuer: "Coursera Project Network", date: "Jun 2023" },
  { title: "Get Started with Figma", issuer: "Coursera Project Network", date: "Jun 2023" },
  { title: "Design and Develop a Website using Figma & CSS", issuer: "Coursera Project Network", date: "Jun 2023" }
];
