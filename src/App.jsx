import './app.scss';
import './intro.scss';
import Navbar from "./components/navbar/Navbar";
import Intro from "./Intro";
import About from './About';
import Project from './Project';
import Contact from './Contact';
import React, { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time of 3.7 seconds
    setTimeout(() => setLoading(false), 3700);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-container">
          <PacmanLoader color="gray" />
        </div>
      ) : (
        <>
          <section className='landing_section'>
            <Navbar />
            <Intro />
          </section>
          <section id="about" className='about_section'>
            <About />
          </section>
          <section id="project">
            <Project />
          </section>
          <section id="connect">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
