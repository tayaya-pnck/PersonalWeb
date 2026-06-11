import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full overflow-hidden font-sans text-primary dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero />
        <div className="crosshair-divider"></div>
        <Skills />
        <div className="crosshair-divider"></div>
        <Projects />
        <div className="crosshair-divider"></div>
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
