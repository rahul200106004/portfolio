import React from "react";
import "@/App.css";
import { Toaster } from "sonner";
import Header from "./components/portfolio/Header";
import HeroSection from "./components/portfolio/HeroSection";
import AboutSection from "./components/portfolio/AboutSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import SkillsSection from "./components/portfolio/SkillsSection";
import BeyondCode from "./components/portfolio/BeyondCode";
import ContactSection from "./components/portfolio/ContactSection";
import Footer from "./components/portfolio/Footer";

function App() {
  return (
    <div className="App bg-zinc-950 min-h-screen">
      <Toaster position="top-right" theme="dark" richColors />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <BeyondCode />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
