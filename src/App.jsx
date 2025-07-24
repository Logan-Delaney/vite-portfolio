import React from 'react';
import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import About from './Sections/About';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
};

export default App;