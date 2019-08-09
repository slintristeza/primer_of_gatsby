import React from "react";
import styled from "styled-components";

import { Section, SectionTitle } from "./styleHelper";

const Description = styled.p`
  font-size: 14px;
  line-height: 1;
`;

const About = () => {
  return (
    <Section id="about">
      <SectionTitle>About Skill</SectionTitle>
      <Description>React, Gatsby, Vue, Firebase, Java, PHP</Description>
    </Section>
  );
};

export default About;
