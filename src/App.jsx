import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { Education } from "./components/Education.jsx";
import { Certifications } from "./components/Certifications.jsx";
import { Achievements } from "./components/Achievements.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { LoadingScreen } from "./components/UI/LoadingScreen.jsx";
import { ScrollProgressBar } from "./components/UI/ScrollProgressBar.jsx";
import { CustomCursor } from "./components/UI/CustomCursor.jsx";
import { MouseGlow } from "./components/UI/MouseGlow.jsx";
import { BackToTop } from "./components/UI/BackToTop.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const { theme, toggle } = useTheme();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 300);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div id="main-content" className="min-h-screen bg-base font-body text-ink antialiased selection:bg-primary/40">
      <LoadingScreen ready={ready} />
      <ScrollProgressBar />
      <CustomCursor />
      <MouseGlow />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

