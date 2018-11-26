import React from 'react';
import styled from 'react-emotion';

const Section = styled('div')`
  background: ${({ theme, evening }) =>
    evening ? theme.default.primary900 : 'white'};
  border: ${({ theme }) => `1px solid ${theme.default.grey500}`};
  border-radius: ${({ evening }) =>
    evening ? '0 0 0.25rem 0.25rem' : '0.25rem 0.25rem 0 0'};
  padding: 1rem 2rem 4rem;
  width: 100%;
`;

const Row = styled('div')`
  position: relative;
`;

const Header = styled('h3')`
  color: ${({ theme }) => theme.default.primary500};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-weight: ${({ theme }) => theme.default.titleFont.lightWeight};
  font-size: 1.8rem;
  text-align: center;
`;

const ToggleButton = styled('button')`
  background: ${({ evening, theme }) =>
    evening ? theme.default.primary800 : theme.default.primary300};
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  height: 2rem;
  position: absolute;
  right: 0;
  top: 0.2rem;
  width: 2rem;
`;

const FormSection = ({ children, evening, onClick, show, timeOfDay }) => (
  <Section evening={evening}>
    <Row>
      <Header>{timeOfDay}</Header>
      <ToggleButton evening={evening} onClick={onClick}>
        {show ? '-' : '+'}
      </ToggleButton>
    </Row>
    {children}
  </Section>
);

export default FormSection;
