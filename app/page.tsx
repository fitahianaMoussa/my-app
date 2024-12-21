'use client';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer';
import Education from './sections/Education';
import Experience from './sections/Experience';


export default function Home() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground">
        <Navbar />
        <Hero/>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}


