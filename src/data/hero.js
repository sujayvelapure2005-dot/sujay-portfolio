/**
 * Hero section content — sourced from Sujay Velapure's resume (Sept 2026).
 */
import developerIllustration from "@/assets/developer-illustration.svg";

export const heroImageSrc = developerIllustration;
export const profilePhotoSrc = "/profile/profile.jpg";

export const hero = {
  name: "Sujay Velapure",
  monogram: "SV",
  firstName: "Sujay",
  lastName: "Velapure",
  degree: "B.Tech — Computer Science Engineering",
  institute: "Walchand Institute of Technology, Solapur",
  roles: [
    "Data Analyst",
    "Machine Learning Enthusiast",
    "Software Engineer",
    "AI & Analytics Builder",
  ],
  summary:
    "Computer Science Engineering student with hands-on experience in Python, Java, SQL, Machine Learning and data-driven application development. I build software projects, work with APIs and databases, analyze business processes with Celonis, and develop analytical solutions that turn data into practical outcomes.",
  location: "Solapur, Maharashtra, India",
  email: "sujayvelapure2005@gmail.com",
  phone: "+91 7741092832",
  availability: {
    text: "Open to internships & full-time roles",
    tone: "success",
  },
  cta: {
    downloadResume: {
      label: "Download Resume",
      href: `${import.meta.env.BASE_URL}resume/Resume.pdf`,
      download: "Sujay-Velapure-Resume.pdf",
    },
    viewResume: {
      label: "View Resume",
      href: `${import.meta.env.BASE_URL}resume/Resume.pdf`,
      target: "_blank",
    },
    contact: {
      label: "Contact Me",
      href: "#contact",
    },
    projects: {
      label: "View Projects",
      href: "#projects",
    },
  },
  image: {
    src: "/profile/profile.jpg",
    fallback: developerIllustration,
    alt: "Sujay Velapure — professional photo.",
  },
  marquee: [
    "Python",
    "SQL",
    "Machine Learning",
    "Power BI",
    "React.js",
    "FastAPI",
    "Data Analytics",
    "Celonis",
    "Excel",
    "Computer Vision",
    "Java",
    "AI",
  ],
};