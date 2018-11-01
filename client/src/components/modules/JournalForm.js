import React from 'react';
import { reduxForm, Field } from 'redux-form';

import FormField from './FormField';

const FIELDS = [
  {
    label: "I'm grateful for...",
    name: 'gratefulFor',
    title: "Try to think of at least 3 things you're grateful for."
  },
  {
    label: 'Things that will make today great...',
    name: 'willMakeGreat',
    title:
      'Try to think of at least 3 things that would make today an awesome day.'
  },
  {
    label: 'I am...',
    name: 'affirmation',
    title:
      'Describe yourself the way you want to be. Repeat this affirmation to yourself throughout the day.'
  }
];

class JournalForm extends React.Component {
  renderFields = () =>
    FIELDS.map(field => (
      <Field component={FormField} key={field.name} {...field} />
    ));
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values =>
          this.props.handleSubmitJournal(values)
        )}
      >
        {this.renderFields()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.gratefulFor) {
    errors.gratefulFor = `Please add something you're grateful for.`;
  }

  return errors;
}

export default reduxForm({
  form: 'journalForm',
  validate
})(JournalForm);
