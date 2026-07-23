export interface BotResponse {
  keywords: string[];
  reply: string;
  suggestedActions?: { label: string; action: string }[];
}

export const AI_KNOWLEDGE_BASE: BotResponse[] = [
  {
    keywords: ['who', 'sandeep', 'about', 'introduction', 'name', 'background'],
    reply: "Sandeep Kumar Pandey is a passionate B.Tech Computer Science Engineering student at Galgotias University and an aspiring Software Engineer. He specializes in Backend Development, Java, Spring Boot, Artificial Intelligence, and System Design.",
    suggestedActions: [
      { label: "View About Section", action: "scroll_about" },
      { label: "Check Skills", action: "scroll_skills" }
    ]
  },
  {
    keywords: ['skill', 'java', 'spring', 'python', 'tech', 'stack', 'backend'],
    reply: "Sandeep's primary tech stack includes:\n• Programming: Java, Python, JavaScript, SQL\n• Backend: Spring Boot, Spring MVC, Spring JDBC, JDBC, REST APIs, Maven\n• Frontend: React, Tailwind CSS, HTML, CSS\n• Database: MySQL\n• Tools & Cloud: Git, Postman, IntelliJ IDEA, Docker (learning), AWS (learning).",
    suggestedActions: [
      { label: "Explore Skills Grid", action: "scroll_skills" },
      { label: "See Projects", action: "scroll_projects" }
    ]
  },
  {
    keywords: ['project', 'work', 'volunteer', 'employee', 'shopping', 'payroll', 'github'],
    reply: "Sandeep has built several impactful projects including:\n1. Volunteer Management System (Spring Boot, MySQL, REST API)\n2. Employee Payroll System (Java, OOP, Collections)\n3. Online Shopping Cart (Java Swing, MySQL)\n4. Student Record Management System (Core Java)\n5. AI Interactive Portfolio Assistant (React, Three.js).",
    suggestedActions: [
      { label: "Browse Projects", action: "scroll_projects" }
    ]
  },
  {
    keywords: ['education', 'college', 'university', 'degree', 'galgotias', 'btech', 'cgpa', 'student'],
    reply: "Sandeep is pursuing his B.Tech in Computer Science Engineering at Galgotias University. He maintains top academic performance with a focus on Software Engineering, Data Structures, System Architecture, and AI.",
    suggestedActions: [
      { label: "Experience & Education", action: "scroll_experience" }
    ]
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'message', 'linkedin', 'phone'],
    reply: "You can reach Sandeep directly via:\n• Email: sandeoppandey404@gmail.com\n• LinkedIn: linkedin.com/in/sandeep-pandey\n• GitHub: github.com/sandyy404\nOr send a message directly using the contact form!",
    suggestedActions: [
      { label: "Go to Contact Form", action: "scroll_contact" }
    ]
  },
  {
    keywords: ['resume', 'cv', 'download', 'pdf'],
    reply: "You can download Sandeep's updated Software Engineering Resume directly from the header or hero section button!",
    suggestedActions: [
      { label: "Download Resume", action: "download_resume" }
    ]
  },
  {
    keywords: ['coding', 'leetcode', 'codeforces', 'gfg', 'geeksforgeeks', 'codechef', 'cp', 'dsa'],
    reply: "Sandeep is an active competitive coder:\n• 500+ total DSA problems solved across platforms\n• 350+ LeetCode problems (Top 18% rating)\n• 3-Star Coder on CodeChef\n• Active CP31 Sheet solver on Codeforces.",
    suggestedActions: [
      { label: "Coding Profiles", action: "scroll_profiles" }
    ]
  },
  {
    keywords: ['certif', 'cisco', 'microsoft', 'python', 'ai'],
    reply: "Sandeep holds multiple certifications:\n• Python Essentials (Cisco & OpenEDG)\n• Microsoft Certified Fundamentals\n• Cisco Cybersecurity & Networking Basics\n• AI & Machine Learning Specialization\n• Spring Boot Developer Certification.",
    suggestedActions: [
      { label: "View Certifications", action: "scroll_certs" }
    ]
  }
];

export const DEFAULT_BOT_REPLY = "Hi! I am Sandeep's AI Portfolio Assistant. You can ask me about his Java & Spring Boot backend projects, education at Galgotias University, skills, coding profiles (LeetCode/GitHub), certifications, or how to contact him!";
