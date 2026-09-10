/**
 * Projects — every project is from Sujay Velapure's resume.
 * Images are real screenshots from the corresponding work.
 */
import celonisDashboard from "@/assets/projects/celonis-dashboard.png";
import biDashboard from "@/assets/projects/bi-portfolio-dashboard.png";
import onlineRetail from "@/assets/projects/online-retail-sales.png";
import retailSales from "@/assets/projects/retail-sales-performance.png";
import covidDashboard from "@/assets/projects/covid-dashboard.png";
import tarotCard from "@/assets/tarot-m01.jpg";

export const projects = {
  eyebrow: "Projects",
  title: "Things I've built",
  subtitle:
    "Self-driven projects spanning AI, process mining and end-to-end business intelligence.",
  githubBase: "https://github.com/sujayvelapure2005-dot",
  items: [
    {
      id: "palmistry",
      name: "AI Palmistry & Tarot Intelligence Platform",
      tag: "AI / Web App",
      year: "2026",
      featured: true,
      kicker: "Flagship AI self-project",
      description:
        "A web-based platform that applies Machine Learning and Computer Vision to palmistry and tarot analysis — generating structured, analytical results from user inputs.",
      image: tarotCard,
      imageAlt: "Tarot card artwork used in the AI Palmistry & Tarot Intelligence Platform.",
      features: [
        "Computer Vision + image processing to analyze palm images and extract features",
        "Backend APIs and database workflows to process inputs and generate results",
        "ML-driven analysis pipeline inside a React.js frontend",
      ],
      challenges:
        "Extracting dependable visual features from palm images and wiring image processing together with ML models and database workflows.",
      outcome:
        "A complete end-to-end intelligent web application demonstrating full-stack + AI integration.",
      tech: ["Python", "FastAPI", "React.js", "Machine Learning", "Computer Vision", "MongoDB", "PostgreSQL"],
    },
    {
      id: "celonis",
      name: "Business Process Analysis & Optimization with Celonis",
      tag: "Process Mining",
      year: "2026",
      featured: true,
      kicker: "Process Intelligence case study",
      description:
        "Analyzed end-to-end business workflows on the Celonis Process Intelligence Platform — finding bottlenecks, deviations and improvement opportunities through event logs and PQL.",
      image: celonisDashboard,
      imageAlt: "Celonis KPI dashboard built by Sujay during the process mining project.",
      features: [
        "Process Query Language (PQL) and event log analysis",
        "KPI dashboards for throughput and cycle times",
        "Actionable recommendations for process optimization",
      ],
      challenges:
        "Modeling real event logs into meaningful process flows and translating PQL output into business value.",
      outcome:
        "Shipped a repeatable process-mining workflow with dashboards, root-cause views and optimization recommendations.",
      tech: ["Celonis", "PQL", "Process Mining", "Event Log Analysis", "KPI Dashboards"],
    },
    {
      id: "bi-portfolio",
      name: "End-to-End Business Intelligence & Data Analytics Portfolio",
      tag: "Business Intelligence",
      year: "2025",
      featured: false,
      kicker: "Data-to-dashboard pipeline",
      description:
        "A complete analytics portfolio: cleaned and transformed datasets with Python, Pandas, SQL and Excel, ran EDA to surface trends, and delivered KPI dashboards in Power BI and Excel.",
      image: biDashboard,
      imageAlt: "Power BI dashboard built by Sujay in the BI analytics portfolio project.",
      features: [
        "Data cleaning, transformation and validation",
        "Exploratory Data Analysis (EDA) for trends and insights",
        "Power BI + Excel KPI dashboards and visualizations",
      ],
      challenges:
        "Keeping large messy datasets consistent while extracting insights that non-technical stakeholders could act on.",
      outcome:
        "A reusable analytics portfolio showing the full journey from raw data to executive-ready dashboards.",
      tech: ["Python", "Pandas", "SQL", "Excel", "Power BI", "EDA"],
    },
{
      id: "online-retail",
      name: "Online Retail Data Analysis (SQL + Python)",
      tag: "Data Analysis",
      year: "2025",
      featured: false,
      kicker: "Retail analytics deep-dive",
      description:
        "Extracted and validated transaction-level retail data with SQL, transformed it with Pandas and NumPy, and visualized trends with Matplotlib to support business insight.",
      image: onlineRetail,
      imageAlt: "Monthly sales trend chart produced during the online retail data analysis project.",
      features: [
        "SQL extraction, validation and metric reporting",
        "Pandas & NumPy transformation and exploratory analysis",
        "Matplotlib visualization for trend reporting",
      ],
      challenges:
        "Reconciling large transactional datasets across order, item and payment tables.",
      outcome:
        "Clear revenue and product performance trends delivered as an analytical report.",
      tech: ["MySQL", "Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    },
    {
      id: "retail-sales",
      name: "Retail Sales Performance Optimization",
      tag: "Business Intelligence",
      year: "2023",
      featured: false,
      kicker: "Excel analytics foundations",
      description:
        "Analyzed retail sales data to track revenue performance, regional trends and customer behavior — with interactive dashboards and KPI views built on Excel pivot tables.",
      image: retailSales,
      imageAlt: "Sales by country chart from the retail sales performance optimization project.",
      features: [
        "Revenue, regional and customer-behavior analysis",
        "Interactive dashboards and KPI views with pivot tables",
        "Data cleaning and validation for reliable reporting",
      ],
      challenges:
        "Standardizing inconsistent raw sales records before any analysis held up.",
      outcome:
        "Ongoing performance monitoring capability that supports informed business decisions.",
      tech: ["Excel", "Pivot Tables", "Data Visualization", "Dashboard Development", "Data Cleaning"],
    },
    {
      id: "covid",
      name: "COVID-19 Data Analytics & Visualization Dashboard",
      tag: "Data Visualization",
      year: "2025",
      featured: false,
      kicker: "Public-data storytelling",
      description:
        "Collected and processed public COVID-19 datasets to analyze cases, recoveries and vaccination trends — presented through Tableau, Excel and SQL dashboards with clear time-series and regional insight.",
      image: covidDashboard,
      imageAlt: "Correlation analysis chart from the COVID-19 data analytics dashboard project.",
      features: [
        "Large public dataset cleaning and transformation",
        "Time-series and regional analysis with Tableau, Excel and SQL",
        "Dashboards and structured reports for clear communication",
      ],
      challenges:
        "Maintaining accuracy while handling large, noisy public datasets.",
      outcome:
        "Dashboard-based storytelling that clearly communicated pandemic trends and vaccination progress.",
      tech: ["Tableau", "Excel", "SQL", "Data Cleaning", "Data Visualization"],
    },
  ],
};