import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const [isDark, setisDark] = useState(() => {
    return localStorage.getItem("portfolio-theme") === "dark";
  });
  const toggleTheme = () => {
    setisDark((previous) => {
      const next = !previous;

      localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      return next;
    });
  };
  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero isDark={isDark} />
        <Techstack />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Testimonials />
      </main>

      <Contact />
    </div>
  );
}

export default App;
