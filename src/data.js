// ============================================================================
//  ALL SITE CONTENT LIVES HERE.
//  Want to update the site? Edit this file, commit, push — it deploys itself.
//  (Add a project = add one object to the `projects` array, etc.)
// ============================================================================

export const profile = {
  name: 'Kanishka Raisania',
  // The first word ("Hi, I'm") + the rotating roles in the hero terminal/heading
  roles: ['Software Engineer', 'Backend Developer', 'ML Enthusiast', 'Problem Solver'],
  location: 'Delhi, India',
  availability: 'open to opportunities',
  // Short hero bio
  bio: 'Computer Science @ NSUT, Delhi — currently building production-grade backend systems & intelligent ML solutions at SalarySe.',
  // Longer about-section bio
  about: [
    "I'm a software engineer who loves turning complex problems into clean, scalable systems. I'm currently building production-grade backend services at SalarySe — working with Java & Spring Boot across APIs, event-driven workflows, and microservice integrations.",
    "My foundation is in Data Structures & Algorithms (1500+ problems solved, LeetCode Knight), and I bring a strong Machine Learning streak — from churn-prediction models to AI-powered automation. I care about writing efficient, reliable code that solves real-world problems.",
  ],
  resume: '/Kanishka_Raisania_Resume.pdf',
}

export const socials = {
  email: 'kanishkaraisania@gmail.com',
  phone: '+91 9871217363',
  github: 'https://github.com/kanishka-raisania',
  linkedin: 'https://www.linkedin.com/in/kanishka-raisania',
  leetcode: 'https://leetcode.com/u/_kaniishkaaaa_/',
}

// Animated count-up stats in the About section
export const stats = [
  { value: 1500, suffix: '+', label: 'DSA problems solved' },
  { value: 1870, suffix: '+', label: 'LeetCode rating (Knight)' },
  { value: 3, suffix: '', label: 'Internships' },
  { value: 7, suffix: '', label: 'Projects shipped' },
]

export const experience = [
  {
    company: 'SalarySe',
    logo: '/logos/salaryse.png',
    mono: 'S',
    accent: '#c4b5fd',
    role: 'Software Development Intern',
    period: 'Feb 2026 – Present',
    start: 'Feb 2026',
    end: 'Present',
    location: 'Gurgaon, India',
    current: true,
    points: [
      'Building production-grade backend systems with Java/Spring Boot — contributing to APIs, event-driven workflows, and microservice integrations that power internal platform features.',
      'Automated outbound calling workflows using AI voice-agent platforms and built Appsmith dashboards wired to backend databases, supporting outreach campaigns with ~48% call connection rates.',
      'Developed automated Remotion-based personalized video workflows integrated into the app to improve user experience.',
    ],
  },
  {
    company: 'HelpStudyAbroad',
    logo: '/logos/helpstudyabroad.png',
    mono: 'H',
    accent: '#a7f3d0',
    role: 'AI & ML Automation Intern',
    period: 'May 2025 – Jun 2025',
    start: 'May 2025',
    end: 'Jun 2025',
    location: 'Noida, India',
    points: [
      'Independently built an end-to-end AI pipeline that auto-generates videos by scraping 3000+ YouTube transcripts to extract trending topics via REST APIs — cutting content-creation time by 80%.',
      'Developed a MERN analytics dashboard with 10+ real-time metrics, cutting manual reporting by 60%.',
      "Scraped and structured data from 50+ university websites to build HelpStudyAbroad.com's backend system.",
    ],
  },
  {
    company: 'Newgen Software',
    logo: '/logos/newgen.png',
    mono: 'N',
    accent: '#ffb3d9',
    role: 'Data Science Intern',
    period: 'May 2024 – Jul 2024',
    start: 'May 2024',
    end: 'Jul 2024',
    location: 'Gurgaon, India',
    points: [
      'Engineered an agent churn-prediction model with 94% accuracy using predictive modeling & feature engineering, improving retention strategies and decision-making.',
      'Designed 6 interactive Power BI dashboards to surface insights from large datasets, reducing report-generation time by 40%.',
      'Optimized 10+ datasets via Python web scraping for downstream analysis.',
    ],
  },
]

// `featured: true` projects render as large hero cards.
export const projects = [
  {
    title: 'Gramin Sahayak',
    tagline: 'AI-powered multilingual rural assistance platform',
    description:
      'An AI platform helping farmers, workers and citizens access government schemes, verify misinformation, and get personalized guidance in their own language — combining chatbot support, voice interaction, and fact-checking to make digital services accessible even in low-connectivity environments.',
    tech: ['GenAI', 'Voice AI', 'Multilingual', 'Fact-checking', 'React'],
    link: 'https://graminsahayak.in/',
    linkLabel: 'Live site',
    featured: true,
    badge: 'Major Project',
  },
  {
    title: 'Agent Churn Prediction',
    tagline: 'ML model · 94% accuracy',
    description:
      'A machine-learning model predicting insurance agent churn with 94% accuracy, using feature engineering across Agent Master, New Business and Renewal data to surface actionable retention insights.',
    tech: ['Python', 'Machine Learning', 'Predictive Analytics'],
    link: 'https://github.com/kanishka-raisania/Agent-Churn-Prediction-model',
    linkLabel: 'GitHub',
    featured: true,
  },
  {
    title: 'NewsFlash',
    tagline: 'Real-time React news app',
    description:
      'A real-time news application with category filtering across 5+ topics and infinite scroll, powered by asynchronous REST API calls for always-fresh content.',
    tech: ['React.js', 'REST APIs', 'Async JS'],
    link: 'https://github.com/kanishka-raisania/NewsFlash',
    linkLabel: 'GitHub',
    featured: true,
  },
  {
    title: 'Google Drive Clone',
    tagline: 'Pixel-accurate UI replica',
    description: 'A faithful UI replica of Google Drive built from scratch with HTML & CSS.',
    tech: ['HTML', 'CSS'],
    link: 'https://kanishka-raisania.github.io/googledriveclone.github.io/',
    linkLabel: 'Live',
  },
  {
    title: 'Tic Tac Toe',
    tagline: 'Two-player browser game',
    description: 'A classic two-player Tic Tac Toe game with win and draw detection.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://kanishka-raisania.github.io/tic-tac-toe.github.io/',
    linkLabel: 'Live',
  },
  {
    title: 'To-do List',
    tagline: 'Lightweight task manager',
    description: 'A minimal task manager with add, complete and delete functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://kanishka-raisania.github.io/todolist.github.io/',
    linkLabel: 'Live',
  },
  {
    title: 'Calculator',
    tagline: 'Functional arithmetic calculator',
    description: 'A functional calculator with keyboard support and a clean UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '',
    linkLabel: '',
  },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'C++', 'Python', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['Spring Boot', 'REST APIs', 'Microservices', 'Event-Driven Architecture'] },
  { group: 'Data & ML', items: ['Machine Learning', 'Predictive Modeling', 'Feature Engineering', 'Power BI', 'Prompt Engineering'] },
  { group: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'Bootstrap'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB'] },
  { group: 'Tools & Infra', items: ['Git', 'Docker', 'AWS', 'Linux', 'Appsmith', 'Remotion'] },
  { group: 'Core CS', items: ['DSA', 'OOP', 'System Design', 'DBMS', 'OS'] },
]

export const achievements = [
  {
    icon: 'crown',
    title: 'LeetCode Knight',
    detail: 'Rated 1870+ — top competitive tier.',
  },
  {
    icon: 'code',
    title: '1500+ problems solved',
    detail: 'Across LeetCode, Coding Ninjas & GeeksforGeeks.',
  },
  {
    icon: 'trophy',
    title: 'Flipkart GRiD 2025 — Semi-finalist',
    detail: 'Top 0.1% among 1.6L+ participants nationwide.',
  },
  {
    icon: 'star',
    title: 'Smart India Hackathon 2025',
    detail: 'Cleared the internal selection round among top teams.',
  },
]

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'Netaji Subhas University of Technology (NSUT)',
    start: 'Nov 2022',
    end: '2026',
    meta: 'Delhi, India',
    accent: '#c4b5fd',
    logo: '/logos/nsut.png',
    mono: 'N',
    score: '',
    points: [
      'Core coursework: DSA, OOP, DBMS, Operating Systems, System Design & Machine Learning.',
    ],
  },
  {
    degree: 'Class XII — CBSE',
    school: 'Sumermal Jain Public School',
    start: '2021',
    end: '2022',
    meta: 'PCM (Physics · Chemistry · Maths)',
    accent: '#a7f3d0',
    logo: '/logos/sumermal.jpg',
    mono: 'XII',
    score: '95%',
    points: ['Science stream with Physics, Chemistry & Mathematics.'],
  },
  {
    degree: 'Class X — CBSE',
    school: 'Sumermal Jain Public School',
    start: '2019',
    end: '2020',
    meta: 'CBSE Board',
    accent: '#ffb3d9',
    logo: '/logos/sumermal.jpg',
    mono: 'X',
    score: '94%',
    points: ['Scored 94% in the CBSE board examination.'],
  },
]

// Lines typed out in the hero terminal. `t` = plain text, `h` = colored HTML.
export const terminalLines = [
  { h: '<span class="t-pmt">❯</span> whoami' },
  { h: '<span class="t-str">kanishka raisania</span> — software engineer 🌸' },
  { h: '<span class="t-pmt">❯</span> cat focus.json' },
  {
    h: '{ <span class="t-key">"building"</span>: <span class="t-str">"backend @ SalarySe"</span>, <span class="t-key">"exploring"</span>: <span class="t-str">"ml · system design"</span>,',
  },
  { h: '&nbsp;&nbsp;<span class="t-key">"solved"</span>: <span class="t-str">"1500+ dsa · leetcode knight (1870+)"</span> }' },
  { h: '<span class="t-pmt">❯</span> <span class="t-cmt">scroll to know me better ✨</span>' },
]
