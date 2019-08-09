import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import './App.css';
import { colors } from './components/styleHelper';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';

const Base = styled.div`
  font-family: sans-serif;
  color: ${colors.black};
  text-align: center;
`;

const App = () => {
  return (
    <Base>
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
    </Base>
  )
}

export default App;
