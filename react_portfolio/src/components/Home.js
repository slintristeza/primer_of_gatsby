import React from "react";
import { Route, Switch } from "react-router";

import Hero from './Hero';
import Contact from "./Contact";
import About from "./About";
import Works from "./Works";

const Home = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <About />
      <Works />
    </>
  );
};

export default Home;
