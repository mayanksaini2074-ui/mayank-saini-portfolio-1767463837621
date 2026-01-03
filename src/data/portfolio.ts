import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Mayank Saini",
    "title": "Software Engineer",
    "email": "mayanksaini2941@gmail.com",
    "phone": "9053502583",
    "linkedin": "",
    "github": "",
    "location": "Gurugram, Haryana, India",
    "summary": "Aspiring Software Engineer skilled in web and mobile application development with experience in optimizing performance and user experience. Enthusiastic about designing efficient systems and integrating innovative solutions across various platforms."
  },
  "experience": [
    {
      "title": "Software Engineer (Internship)",
      "company": "Microsoft",
      "dates": "May 2024 - June 2024",
      "description": "Internship focused on optimizing application performance through caching solutions.",
      "highlights": [
        "Designed and integrated caching functionality using IndexedDB to optimize performance.",
        "Achieved a 50% reduction in load times, enhancing user experience.",
        "Partnered with a cross-functional team to design a shared generic interface."
      ]
    },
    {
      "title": "Software Developer (Internship)",
      "company": "CALinfo",
      "dates": "Jan 2024 - April 2024",
      "description": "Worked on developing and integrating ReactJS modules and mobile applications.",
      "highlights": [
        "Architected, deployed, and integrated ReactJS modules to enhance websites.",
        "Led end-to-end development of a React Native application for Android and iOS."
      ]
    },
    {
      "title": "Software Engineer (Internship)",
      "company": "BigTechGuru",
      "dates": "June 2023 - July 2023",
      "description": "Developed and launched a startup website alongside a Google Engineer.",
      "highlights": [
        "Collaborated with Google's Software Engineer to develop bigtechguru.com using Squarespace.",
        "Managed Google Ads for targeted traffic and optimized strategies using Google Analytics."
      ]
    },
    {
      "title": "Teaching Assistant (Internship)",
      "company": "Coding Ninjas",
      "dates": "May 2023 - Sep 2023",
      "description": "Assisted students with programming queries and conducted interactive sessions.",
      "highlights": [
        "Addressed and resolved over 400 doubts for 200+ students.",
        "Facilitated doubt resolution sessions, earning a rating of 4.9 out of 5."
      ]
    }
  ],
  "education": [
    {
      "degree": "B.Tech. in Computer Science",
      "institution": "National Institute of Technology, Kurukshetra",
      "years": "Aug 2021-Present",
      "gpa": "9.087"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Bukizz",
      "description": "Responsive website using React (Vite) and Tailwind CSS with lazy loading, and backend using Node.js, Express, and MySQL.",
      "technologies": [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "WMark Application",
      "description": "React Native Expo application for adding watermarks to images with batch processing support.",
      "technologies": [
        "React Native",
        "Expo"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "floating-shapes",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
