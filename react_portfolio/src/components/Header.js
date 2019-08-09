import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Base = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  width: 100%;
  max-width: 630px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;
  color: white;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  font-size: 20px;
  letter-spacing: 1.5px;
  font-weight: 600;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

const NavItem = styled(Link)`
  color: white;
  font-size: 15px;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.6px;
`;

const Header = () => {
  return (
    <Base>
      <Title to="/">slintristeza Portfolio</Title>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="#about">About</NavItem>
        <NavItem to="#works">Works</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Nav>
    </Base>
  );
};

export default Header;
