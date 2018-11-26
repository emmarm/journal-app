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
  color: ${({ theme }) => theme.default.primary900};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-size: ${({ legend }) => (legend ? '1.2rem' : '1rem')};
  margin-right: 0.5rem;
`;

const Input = styled('input')`
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: ${({ theme }) => `1px solid ${theme.default.primary300}`};
  border-radius: 0.25rem;
  justify-self: ${({ noLabel }) => (noLabel ? 'center' : 'start')};
  padding: 0.5rem;
  width: 100%;
`;

const FormField = ({ input, label, legend, meta, name, title, type }) => (
  <FieldItem stacked={legend}>
    <Label htmlFor={name} legend={legend} title={title}>
      {label}
      {legend && '...'}
    </Label>
    <Input noLabel={legend} {...input} id={name} type={type ? type : 'text'} />
  </FieldItem>
);

export default FormField;
