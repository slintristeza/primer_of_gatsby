import React from "react";

import { Section, SectionTitle } from "./styleHelper";
import WorkItem from "./WorkItem";

const Works = () => {
  return (
    <Section id="works">
      <SectionTitle>Works</SectionTitle>
      <ul>
        <WorkItem title="React.js" category="2019/7 - Frontend" />
        <WorkItem title="Vue.js" category="2019/8 - Frontend" />
      </ul>
    </Section>
  );
};

export default Works;
