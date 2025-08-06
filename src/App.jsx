import React from 'react';
import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Footer from './Sections/Footer';
import Contact from './Sections/Contact';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
};

export default App;