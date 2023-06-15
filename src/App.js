import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import {useEffect} from 'react';
import Projects from "./components/Projects";

import './App.css';

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', 'aquamarine');
    document.documentElement.style.setProperty('--secondary-color', '#282c34');
  }, []);
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </main>

    );
}

export default App;
