import React from 'react';
import './index.css'; // Ensure this includes your Tailwind CSS setup
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import School from './components/School';
import Diploma from './components/Diploma';
import Engineering from './components/Engineering';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="main-content pt-12">
        <Home />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact /> 
      </div>
    </div>
  );
}

export default App;
