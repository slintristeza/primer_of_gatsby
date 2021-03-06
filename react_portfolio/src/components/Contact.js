import React from "react";
import styled from "styled-components";

import { poppins, colors } from "./styleHelper";

const Base = styled.div`
  padding: 140px 0 120px;
  background-color: ${colors.black};
  color: white;
  text-align: center;
  ${poppins}
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Description = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
`;

const Contact = () => {
  return (
    <Base>
      <Title>Contact</Title>
      <Description>https://twitter.com/slintristeza</Description>
    </Base>
  );
};

export default Contact;
