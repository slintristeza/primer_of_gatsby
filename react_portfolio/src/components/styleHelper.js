import styled, { css } from 'styled-components';

export const colors = {
  black: "#1b1d28",
  gary: "#b6b6ba",
  green: "#4caf50"
};

export const poppins = css`
  font-family: "Poppins", sans-serif;
`;

export const Section = styled.section`
  max-width: 630px;
  padding: 0 16px;
  margin: 32px auto;
`;

export const SectionTitle = styled.h2`
  olor: #b6b6ba;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;
