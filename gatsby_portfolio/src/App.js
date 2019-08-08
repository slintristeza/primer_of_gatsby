import React from 'react';
import { Helmet } from 'react-helmet';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>slintristeza Portfolio</title>
        <meta name="description" content="primer of Gatyby.js" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  )
}

export default App;
