import React from 'react';
import styled from 'react-emotion';

const FieldItem = styled('div')`
  align-items: center;
  display: grid;
  grid-template: ${({ stacked }) =>
    stacked ? '2rem 2rem / 1fr' : '2rem / 2rem 1fr'};
  margin: 0.5rem 0;
  text-align: center;
  width: 100%;
`;

const Label = styled('label')`
  color: ${({ evening, theme }) =>
    evening ? theme.default.primary200 : theme.default.primary900};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-size: ${({ legend }) => (legend ? '1.2rem' : '1rem')};
  margin-right: 0.5rem;
`;

const Input = styled('input')`
  background: none;
  border: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.default.primary400}`};
  color: ${({ evening, theme }) => (evening ? 'white' : theme.default.grey900)};
  font-family: ${({ theme }) => theme.default.bodyFont.family};
  font-size: 1.2rem;
  justify-self: ${({ noLabel }) => (noLabel ? 'center' : 'start')};
  padding: 0.5rem;
  width: 100%;
`;

const FormField = ({ input, evening, label, legend, name, title, type }) => (
  <FieldItem stacked={legend}>
    <Label evening={evening} htmlFor={name} legend={legend} title={title}>
      {label}
      {legend && '...'}
    </Label>
    <Input
      {...input}
      evening={evening}
      id={name}
      noLabel={legend}
      type={type ? type : 'text'}
    />
  </FieldItem>
);

export default FormField;
