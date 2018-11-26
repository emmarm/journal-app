import React from 'react';
import { Field, FieldArray } from 'redux-form';
import styled from 'react-emotion';

import * as fields from '../../constants/fieldTypes';
import FormField from './FormField';

const Fieldset = styled('fieldset')`
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 0;
`;

const Legend = styled('legend')`
  color: ${({ theme }) => theme.default.primary900};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-size: 1.2rem;
  margin-bottom: ${({ legend }) => legend && '1rem'};
  text-align: center;
  width: 100%;
`;

class FormGroup extends React.Component {
  renderFields = () => {
    const { count, name, title } = this.props;

    return new Array(count)
      .fill()
      .map((item, index) => (
        <Field
          component={FormField}
          key={`${name}${index + 1}`}
          label={`${index + 1}.`}
          name={`${name}${index + 1}`}
          title={title}
        />
      ));
  };

  render() {
    return (
      <Fieldset>
        <Legend>
          {fields[this.props.type].label}
          ...
        </Legend>
        <FieldArray name={this.props.type} component={this.renderFields} />
      </Fieldset>
    );
  }
}

export default FormGroup;
