import React from 'react';
import { Field, FieldArray } from 'redux-form';

import * as fields from '../../constants/fieldTypes';
import FormField from './FormField';

class FormGroup extends React.Component {
  renderFields = () => {
    const { type, count } = this.props;
    return new Array(count).fill().map((item, index) => (
      <div key={`${fields[type].name}${index + 1}`}>
        <label htmlFor={`${fields[type].name}${index + 1}`}>{`${index +
          1}.`}</label>
        <Field
          key={`${fields[type].name}${index + 1}`}
          component={FormField}
          name={`${fields[type].name}${index + 1}`}
        />
      </div>
    ));
  };

  render() {
    return (
      <fieldset>
        <legend>{fields[this.props.type].label}</legend>
        <FieldArray name={this.props.type} component={this.renderFields} />
      </fieldset>
    );
  }
}

export default FormGroup;
