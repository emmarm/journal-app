import React from 'react';
import styled from 'react-emotion';

const Section = styled('div')`
  background: ${({ theme, evening }) =>
    evening ? theme.default.primary900 : 'white'};
  border: ${({ theme }) => `1px solid ${theme.default.grey500}`};
  border-radius: ${({ evening }) =>
    evening ? '0 0 0.25rem 0.25rem' : '0.25rem 0.25rem 0 0'};
  padding: ${({ show }) => (show ? '0 2rem 4rem' : '0 2rem')};
  width: 100%;
`;

const Row = styled('div')`
  align-items: center;
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
  justify-content: center;
`;

const Header = styled('h3')`
  color: ${({ theme }) => theme.default.primary500};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-weight: ${({ theme }) => theme.default.titleFont.lightWeight};
  font-size: 1.8rem;
  grid-column: 2;
  text-align: center;
`;

const ToggleButton = styled('button')`
  align-items: center;
  background: none;
  border: none;
  border-radius: 50%;
  color: ${({ evening, theme }) =>
    evening ? theme.default.primary300 : theme.default.primary800};
  cursor: pointer;
  display: flex;
  font-size: 2.2rem;
  grid-column: 3;
  justify-content: center;
  line-height: 2rem;
`;

const FormSection = ({ children, evening, onClick, show, timeOfDay }) => (
  <Section evening={evening} show={show}>
    <Row>
      <Header>{timeOfDay}</Header>
      <ToggleButton evening={evening} onClick={onClick}>
        {show ? '–' : '+'}
      </ToggleButton>
    </Row>
    {children}
  </Section>
);

export default FormSection;
