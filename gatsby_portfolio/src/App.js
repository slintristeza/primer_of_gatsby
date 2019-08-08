import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  )
}

export default App;
