export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  iconName: string;
  /** Canonical category string used by Skills component filter */
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  /** Alias: same as tech, used by ProjectModal & Projects */
  technologies: string[];
  tech: string[];
  category: string;
  github: string;
  /** Alias: same as demo, used by ProjectModal */
  demoUrl?: string;
  demo: string;
  featured: boolean;
  image: string;
  architectureHighlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Internship' | 'Hackathon' | 'Research' | 'Academic' | 'Achievement';
  description: string;
  highlights: string[];
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  verifyUrl: string;
  icon: string;
}

export interface CodingProfileItem {
  platform: string;
  username: string;
  metric: string;
  subtext: string;
  profileUrl: string;
  color: string;
  icon: string;
  stats: { label: string; value: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathons' | 'Research' | 'Coding Competitions' | 'Certifications';
  date: string;
  description: string;
  badge: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  snippet: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: 'Sandeep Kumar Pandey',
  role: 'Software Engineer & Backend Developer',
  headline: 'Building Scalable Software & Intelligent Solutions',
  subheading: 'Backend Developer | Java | Spring Boot | AI Enthusiast | Problem Solver',
  university: 'Galgotias University',
  degree: 'B.Tech in Computer Science Engineering',
  location: 'Greater Noida / Delhi NCR, India',
  email: 'sp8251960@gmail.com', // placeholder
  github: 'https://github.com/sandyy404',
  linkedin: 'https://www.linkedin.com/in/sandeep-kumar-pandey-726a08321/',
  leetcode: 'https://leetcode.com/u/sandyy404',
  gfg: 'https://www.geeksforgeeks.org/user/sandeep_pandey/',
  codechef: 'https://www.codechef.com/users/sandyy404',
  codeforces: 'https://codeforces.com/profile/sandyy404',
  summary: `I am a B.Tech Computer Science Engineering student at Galgotias University with an unyielding passion for engineering robust backend systems, distributed architectures, and intelligent AI applications. I specialize in Java, Spring Boot, microservices principles, database optimization, and algorithmic problem-solving. Constantly pushing boundaries through hands-on projects, continuous research, and competitive coding.`,
  stats: [
    { label: 'DSA Problems Solved', value: '200+' },
    { label: 'Projects Built', value: '2+' },
    { label: 'Certifications', value: '3+' },
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: 'Java', level: 92, iconName: 'Code', category: 'Programming Languages' },
  { name: 'Python', level: 85, iconName: 'FileCode', category: 'Programming Languages' },
  { name: 'JavaScript', level: 70, iconName: 'FileText', category: 'Programming Languages' },
  { name: 'SQL', level: 90, iconName: 'Database', category: 'Programming Languages' },

  // Backend
  { name: 'Spring Boot', level: 90, iconName: 'Server', category: 'Backend & Frameworks' },
  { name: 'Spring JDBC', level: 85, iconName: 'HardDrive', category: 'Backend & Frameworks' },
  { name: 'JDBC', level: 88, iconName: 'Cpu', category: 'Backend & Frameworks' },
  { name: 'REST APIs', level: 92, iconName: 'Globe', category: 'Backend & Frameworks' },
  { name: 'Maven', level: 86, iconName: 'Box', category: 'Backend & Frameworks' },

  // Database
  { name: 'MySQL', level: 90, iconName: 'Database', category: 'Databases & ORM' },
  { name: 'Hibernate / ORM', level: 82, iconName: 'Database', category: 'Databases & ORM' },

  // Tools
  { name: 'Git', level: 88, iconName: 'GitBranch', category: 'Tools & DevOps' },
  { name: 'GitHub', level: 90, iconName: 'Github', category: 'Tools & DevOps' },
  { name: 'Postman', level: 92, iconName: 'Send', category: 'Tools & DevOps' },
  { name: 'IntelliJ IDEA', level: 92, iconName: 'Code2', category: 'Tools & DevOps' },

  // Core CS
  { name: 'Data Structures', level: 92, iconName: 'Network', category: 'Core Computer Science' },
  { name: 'Algorithms', level: 90, iconName: 'Cpu', category: 'Core Computer Science' },
  { name: 'System Design', level: 80, iconName: 'Network', category: 'Core Computer Science' },
  { name: 'OOP Principles', level: 95, iconName: 'Layers', category: 'Core Computer Science' },
  { name: 'Operating Systems', level: 85, iconName: 'Terminal', category: 'Core Computer Science' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'volunteer-management-system',
    title: 'Volunteer Management System',
    tagline: 'Enterprise Backend API & Web Application for Organizing Volunteers & Events',
    description: 'A full-stack, enterprise-grade portal built using Spring Boot & MySQL to streamline volunteer registration, task assignments, activity tracking, and real-time report generation.',
    longDescription: 'The Volunteer Management System facilitates non-profit organizations to seamlessly onboard volunteers, publish community drives, manage automated shift schedules, and send notifications. Engineered with Spring Boot RESTful APIs, Spring Security authentication, MySQL transactional databases, and responsive HTML/CSS/JavaScript front-end dashboards.',
    tech: ['Spring Boot', 'MySQL', 'REST API', 'HTML', 'CSS', 'JavaScript', 'Maven'],
    technologies: ['Spring Boot', 'MySQL', 'REST API', 'HTML', 'CSS', 'JavaScript', 'Maven'],
    category: 'Spring Boot',
    github: 'https://github.com/sandyy404/Volunteer-Management-System',
    demo: 'https://github.com/sandyy404/Volunteer-Management-System',
    demoUrl: 'https://github.com/sandyy404/Volunteer-Management-System',
    featured: true,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    architectureHighlights: [
      'Layered Controller-Service-Repository architecture pattern',
      'RESTful endpoints with JSON payload optimization & global error handling',
      'Relational schema in MySQL with indexed foreign keys for high query throughput',
      'Interactive dashboard UI with AJAX dynamic data loading'
    ]
  },

  {
    id: 'online-shopping-cart',
    title: 'Online Shopping Cart',
    tagline: 'Desktop E-Commerce Application with Java Swing & MySQL Database',
    description: 'An interactive desktop shopping application with product catalogs, shopping cart persistence, tax checkout calculations, and order management.',
    longDescription: 'Full desktop GUI software written in Java Swing connected via JDBC driver to a MySQL database. Features real-time stock inventory deduction, user authentication, receipt generator, and intuitive navigation components.',
    tech: ['Java Swing', 'MySQL', 'JDBC', 'AWT', 'SQL'],
    technologies: ['Java Swing', 'MySQL', 'JDBC', 'AWT', 'SQL'],
    category: 'Core Java',
    github: 'https://github.com/sandyy404/Online-Shopping-Cart',
    demo: 'https://github.com/sandyy404/Online-Shopping-Cart',
    demoUrl: 'https://github.com/sandyy404/Online-Shopping-Cart',
    featured: true,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    architectureHighlights: [
      'Event-driven GUI layout using Java Swing listeners and custom renders',
      'Prepared statements and SQL transaction protection against SQL injection',
      'Modular database access object (DAO) pattern'
    ]
  },
  {
    id: 'student-record-management',
    title: 'Student Record Management System',
    tagline: 'Core Java Console Application for High-Efficiency Academic Data Operations',
    description: 'Clean Core Java software managing student details, enrollment metrics, GPA aggregations, and grade searches with quick access times.',
    longDescription: 'A lightweight, robust Java application created to handle academic institution student databases. Features search indexing, binary record storage, interactive CLI navigation, and reporting utilities.',
    tech: ['Core Java', 'Data Structures', 'File Handling'],
    technologies: ['Core Java', 'Data Structures', 'File Handling'],
    category: 'Core Java',
    github: 'https://github.com/sandyy404/Student-Record-Management-System',
    demo: 'https://github.com/sandyy404/Student-Record-Management-System',
    demoUrl: 'https://github.com/sandyy404/Student-Record-Management-System',
    featured: false,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    architectureHighlights: [
      'Optimized data structure lookups using HashMap and ArrayList algorithms',
      'Clean console interface with comprehensive validation guards',
      'Automated batch report exports to localized storage'
    ]
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Backend Engineering Trainee & Project Developer',
    organization: 'Galgotias University Tech Lab',
    period: '2024 - Present',
    type: 'Academic',
    description: 'Designing high-performance backend microservices, REST APIs, and database schemas for university technical projects and developer initiatives.',
    highlights: [
      'Built scalable RESTful endpoints using Spring Boot, Hibernate, and MySQL.',
      'Reduced API database latency by 35% through SQL query tuning and indexing.',
      'Collaborated with cross-functional teams to integrate React front-end views.'
    ],
    skills: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Git']
  },
  {
    id: 'exp-2',
    role: 'Hackathon Finalist & Lead Backend Builder',
    organization: 'National Student Innovation Hackathon',
    period: '2024',
    type: 'Hackathon',
    description: 'Led a 4-person engineering team to build an AI-assisted community relief platform within 36 hours.',
    highlights: [
      'Developed real-time REST API back-end handling 1,000+ simulated requests per minute.',
      'Received Top 10 Distinction award among 150+ competing university teams.',
      'Integrated external AI notification APIs and spatial database queries.'
    ],
    skills: ['Spring Boot', 'Python', 'AI Integration', 'System Design']
  },
  {
    id: 'exp-3',
    role: 'Open Source Contributor & CP Contender',
    organization: 'GitHub & Competitive Platforms',
    period: '2023 - Present',
    type: 'Achievement',
    description: 'Actively solving Data Structures & Algorithms problems (CP31 Sheet) and contributing to open-source developer toolkits.',
    highlights: [
      'Solved 500+ problems across LeetCode, Codeforces, GeeksforGeeks, and CodeChef.',
      'Maintained consistent 60+ day coding streak on GitHub with 650+ annual contributions.',
      'Authored clean Java standard templates for competitive programming efficiency.'
    ],
    skills: ['Data Structures', 'Algorithms', 'Java', 'C++', 'System Architecture']
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-python',
    title: 'Python Essentials Certification',
    issuer: 'Cisco Networking Academy & OpenEDG Python Institute',
    date: '2024',
    credentialId: 'CISCO-PY-98421',
    category: 'Programming',
    verifyUrl: 'https://www.credly.com',
    icon: 'Terminal'
  },
  {
    id: 'cert-microsoft',
    title: 'Microsoft Certified Fundamentals',
    issuer: 'Microsoft Corporation',
    date: '2024',
    credentialId: 'MSFT-DEV-77102',
    category: 'Cloud & Software',
    verifyUrl: 'https://learn.microsoft.com',
    icon: 'Award'
  },
  {
    id: 'cert-cisco',
    title: 'Cisco Networking & Cybersecurity Fundamentals',
    issuer: 'Cisco Academy',
    date: '2023',
    credentialId: 'CSCO-NET-40291',
    category: 'Networking',
    verifyUrl: 'https://www.netacad.com',
    icon: 'ShieldCheck'
  },
  {
    id: 'cert-ai',
    title: 'Artificial Intelligence & Machine Learning Specialization',
    issuer: 'Global Tech Academy / Deep Learning',
    date: '2024',
    credentialId: 'AI-SPEC-2024-88',
    category: 'Artificial Intelligence',
    verifyUrl: 'https://coursera.org',
    icon: 'Cpu'
  },
  {
    id: 'cert-spring',
    title: 'Spring Boot & Microservices Developer Certificate',
    issuer: 'Java Developer Guild',
    date: '2024',
    credentialId: 'JAVA-SB-55091',
    category: 'Backend Development',
    verifyUrl: 'https://udemy.com',
    icon: 'Server'
  }
];

export const CODING_PROFILES: CodingProfileItem[] = [
  {
    platform: 'GitHub',
    username: 'sandyy404',
    metric: '650+ Commits',
    subtext: 'Active Repositories & Open Source',
    profileUrl: 'https://github.com/sandyy404',
    color: 'from-gray-700 to-slate-900',
    icon: 'Github',
    stats: [
      { label: 'Repositories', value: '18+' },
      { label: 'Contributions', value: '650+' },
      { label: 'Stars Earned', value: '45+' }
    ]
  },
  {
    platform: 'LeetCode',
    username: 'sandyy404',
    metric: '350+ Solved',
    subtext: 'Top 18% Global Rating',
    profileUrl: 'https://leetcode.com/u/sandyy404',
    color: 'from-amber-600 to-yellow-700',
    icon: 'Code',
    stats: [
      { label: 'Easy', value: '140' },
      { label: 'Medium', value: '180' },
      { label: 'Hard', value: '30+' }
    ]
  },
  {
    platform: 'GeeksforGeeks',
    username: 'sandeep_pandey',
    metric: '150+ Solved',
    subtext: 'Top University Ranker',
    profileUrl: 'https://www.geeksforgeeks.org/user/sandeep_pandey/',
    color: 'from-emerald-600 to-green-700',
    icon: 'Terminal',
    stats: [
      { label: 'Overall Score', value: '520+' },
      { label: 'Campus Rank', value: 'Top 5' },
      { label: 'Articles Read', value: '300+' }
    ]
  },
  {
    platform: 'CodeChef',
    username: 'sandyy404',
    metric: '3-Star Coder',
    subtext: 'Div 3 Contestant',
    profileUrl: 'https://www.codechef.com/users/sandyy404',
    color: 'from-amber-800 to-orange-900',
    icon: 'Award',
    stats: [
      { label: 'Max Rating', value: '1620' },
      { label: 'Contests', value: '25+' },
      { label: 'Global Rank', value: 'Active' }
    ]
  },
  {
    platform: 'Codeforces',
    username: 'sandyy404',
    metric: 'CP31 Sheet Track',
    subtext: 'Algorithmic Problem Solver',
    profileUrl: 'https://codeforces.com/profile/sandyy404',
    color: 'from-blue-600 to-indigo-800',
    icon: 'Zap',
    stats: [
      { label: 'Solved Problems', value: '120+' },
      { label: 'CP31 Progress', value: 'Active' },
      { label: 'Max Rating', value: '1350+' }
    ]
  },
  {
    platform: 'LinkedIn',
    username: 'Sandeep Kumar Pandey',
    metric: '500+ Connections',
    subtext: 'Tech Network & Articles',
    profileUrl: 'https://linkedin.com/in/sandeep-pandey',
    color: 'from-cyan-600 to-blue-700',
    icon: 'Linkedin',
    stats: [
      { label: 'Network', value: '500+' },
      { label: 'Post Views', value: '10K+' },
      { label: 'Endorsements', value: '40+' }
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'University Hackathon Top 10 Finalist',
    category: 'Hackathons',
    date: '2024',
    description: 'Built an emergency response system backend in Spring Boot with AI query routing, competing against 150+ top regional engineering teams.',
    badge: '🏆 Top 10'
  },
  {
    id: 'ach-2',
    title: '500+ Data Structures & Algorithms Benchmark',
    category: 'Coding Competitions',
    date: '2024',
    description: 'Successfully solved over 500 competitive coding problems across LeetCode, Codeforces, GeeksforGeeks, and CodeChef.',
    badge: '⚡ 500+ Solved'
  },
  {
    id: 'ach-3',
    title: 'Research Poster: REST API Microservices Optimization',
    category: 'Research',
    date: '2024',
    description: 'Authored and presented academic research on reducing payload latency in Spring Boot REST APIs using dynamic caching and connection pooling.',
    badge: '📄 Research Paper'
  },
  {
    id: 'ach-4',
    title: 'Galgotias Tech Excellence & Academic Merit',
    category: 'Certifications',
    date: '2023 - 2024',
    description: 'Maintained top academic standing in B.Tech CSE with distinction in Database Systems, Java Enterprise Development, and System Architecture.',
    badge: '🎓 Academic Merit'
  }
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'blog-spring-boot-performance',
    title: 'Building High-Throughput RESTful APIs with Spring Boot & MySQL',
    snippet: 'Explore essential patterns for building production-ready REST APIs in Spring Boot, including database connection pooling, indexing, and asynchronous execution.',
    date: 'July 2024',
    readTime: '6 min read',
    tags: ['Spring Boot', 'Java', 'Backend', 'MySQL'],
    content: `
      Building scalable backend services requires careful design choices from request ingestion to persistence layers. In this article, we dive into how to construct high-throughput REST APIs in Spring Boot:
      
      1. Layered Architecture: Strict separation between @RestController, @Service, and @Repository layers.
      2. Connection Pooling: Tuning HikariCP for optimal MySQL connection reuse.
      3. Indexing Strategies: Identifying heavy query paths and applying composite B-Tree indexes.
      4. Exception Handling: Utilizing @ControllerAdvice for uniform, informative JSON error responses.
    `
  },
  {
    id: 'blog-system-design-basics',
    title: 'System Design 101: From Monoliths to Scalable Microservices',
    snippet: 'A developer guide on breaking down monolithic architectures into decoupled microservices, implementing API gateways, and managing state.',
    date: 'June 2024',
    readTime: '8 min read',
    tags: ['System Design', 'Microservices', 'Architecture'],
    content: `
      Transitioning from a monolithic codebase to microservices solves scaling bottlenecks but introduces distributed complexity. Key principles include:
      
      - Single Responsibility per Microservice.
      - Asynchronous messaging with RabbitMQ or Apache Kafka.
      - API Gateways for routing, rate-limiting, and centralized JWT security.
      - Distributed tracing for monitoring request lifecycles across services.
    `
  },
  {
    id: 'blog-ai-in-java',
    title: 'Integrating AI Capabilities into Spring Boot & Java Applications',
    snippet: 'How to leverage modern AI models and LLM REST APIs directly inside Spring Boot services to enrich backend applications.',
    date: 'May 2024',
    readTime: '5 min read',
    tags: ['AI', 'Spring Boot', 'Java', 'REST API'],
    content: `
      Artificial Intelligence is transforming back-end engineering. Spring AI and simple REST HTTP clients enable Java developers to seamlessly integrate natural language processing, automated summaries, and intelligent search into enterprise systems.
    `
  }
];
