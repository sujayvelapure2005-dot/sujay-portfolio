/**
 * Certifications — ONLY these five, exactly as instructed.
 * Issue dates & details verified from the actual certificate PDFs.
 */
const certUrl = (file) => `${import.meta.env.BASE_URL}certificates/${file}`;

export const certifications = {
  eyebrow: "Certifications",
  title: "Credentials that prove it",
  subtitle:
    "Certifications from Oracle, Forage and Infosys Springboard — the full gallery is one click away.",
  items: [
    {
      id: "oracle-data-platform",
      name: "Oracle Data Platform 2025 Certified Foundations Associate",
      issuer: "Oracle University",
      issuedDate: "October 31, 2025",
      category: "Cloud & Data Platforms",
      logo: { text: "OR", color: "#d8402f", bg: "rgba(216,64,47,0.16)", ring: "#f87171" },
      skills: ["Data Platform Concepts", "Analytics Foundations", "Cloud Data Management"],
      image: "/certificates/oracle-data-platform.png",
      file: "oracle-data-platform.png",
      verifyUrl: "https://www.oracle.com/certification/",
    },
    {
      id: "oracle-oci-ai",
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      issuedDate: "October 31, 2025",
      category: "Cloud & AI Foundations",
      logo: { text: "OR", color: "#d8402f", bg: "rgba(216,64,47,0.16)", ring: "#f87171" },
      skills: ["AI Concepts", "Oracle Cloud Infrastructure", "AI Foundations"],
      image: "/certificates/oracle-cloud-ai-foundations.png",
      file: "oracle-cloud-ai-foundations.png",
      verifyUrl: "https://www.oracle.com/certification/",
    },
    {
      id: "deloitte-data",
      name: "Deloitte Data Analytics Job Simulation",
      issuer: "Forage",
      issuedDate: "December 30, 2025",
      category: "Data Analytics",
      logo: { text: "DL", color: "#00913c", bg: "rgba(0,145,60,0.14)", ring: "#34d399" },
      skills: ["Data Analysis", "Forensic Technology", "Business Insights"],
      image: "/certificates/deloitte-data-analytics.png",
      file: "deloitte-data-analytics.png",
      verifyUrl: "https://www.theforage.com/",
    },
    {
      id: "jpmorgan-se",
      name: "JPMorgan Chase Software Engineering Job Simulation",
      issuer: "Forage",
      issuedDate: "December 30, 2025",
      category: "Software Engineering",
      logo: { text: "JPM", color: "#3156d3", bg: "rgba(49,86,211,0.16)", ring: "#818cf8" },
      skills: ["Project Setup", "Kafka Integration", "H2 Integration", "REST API Integration", "REST API Controller"],
      image: "/certificates/jpmorgan-software-engineering.png",
      file: "jpmorgan-software-engineering.png",
      verifyUrl: "https://www.theforage.com/",
    },
    {
      id: "infosys-bi",
      name: "Introduction to Business Intelligence",
      issuer: "Infosys Springboard",
      issuedDate: "March 23, 2026",
      category: "Business Intelligence",
      logo: { text: "I", color: "#007396", bg: "rgba(0,115,150,0.14)", ring: "#22d3ee" },
      skills: ["Business Intelligence Fundamentals", "Dashboards & Reporting", "Data-Driven Decisions"],
      image: "/certificates/infosys-business-intelligence.png",
      file: "infosys-business-intelligence.png",
      verifyUrl: "https://verify.onwingspan.com/",
    },
  ].map((cert) => ({
    ...cert,
    href: certUrl(cert.file),
  })),
};