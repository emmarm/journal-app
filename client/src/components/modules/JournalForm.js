import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as journals from '../../constants/journalTypes';
import * as fields from '../../constants/fieldTypes';
import FormGroup from './FormGroup';
import FormField from './FormField';

class JournalForm extends React.Component {
  renderSections = () => {
    return journals[this.props.journalType].morning.map(
      section =>
        section.count > 1 ? (
          <FormGroup key={section.type} {...section} />
        ) : (
          <Field
            key={section.type}
            name={section.type}
            component={FormField}
            {...fields[section.type]}
          />
        )
    );
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values =>
          this.props.handleSubmitJournal(values)
        )}
      >
        {this.renderSections()}
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

const mapStateToProps = state => ({
  journalType: state.auth.settings.journalType
});

const StatefulJournalForm = connect(mapStateToProps)(JournalForm);

export default reduxForm({
  form: 'journalForm',
  validate
})(StatefulJournalForm);
