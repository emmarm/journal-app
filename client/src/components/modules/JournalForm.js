import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import * as journals from '../../constants/journalTypes';
import * as fields from '../../constants/fieldTypes';
import FormGroup from './FormGroup';
import FormField from './FormField';

const Form = styled('form')`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 30rem;
`;

const Header = styled('h3')`
  color: ${({ theme }) => theme.default.primary500};
  font-family: ${({ theme }) => theme.titleFont.family};
  font-size: 2rem;
  font-style: ${({ theme }) => theme.titleFont.style};
  font-weight: ${({ theme }) => theme.titleFont.weight};
`;

class JournalForm extends React.Component {
  state = {
    showMorning: new Date().getHours() < 15 && new Date().getHours() > 2,
    showEvening: new Date().getHours() > 14 || new Date().getHours() < 3
  };

  toggleShowMorning = e => {
    e.preventDefault();
    this.setState(prevState => ({ showMorning: !prevState.showMorning }));
  };

  toggleShowEvening = e => {
    e.preventDefault();
    this.setState(prevState => ({ showEvening: !prevState.showEvening }));
  };

  renderSections = timeOfDay => {
    return journals[this.props.journalType][timeOfDay].map(section => {
      return section.count > 1 ? (
        <FormGroup key={section.type} {...section} />
      ) : (
        <Field
          key={section.type}
          name={section.type}
          component={FormField}
          {...fields[section.type]}
        />
      );
    });
  };
  render() {
    return (
      <Form
        onSubmit={this.props.handleSubmit(values =>
          this.props.handleSubmitJournal(values)
        )}
      >
        <Header>Morning Journal</Header>
        <button onClick={this.toggleShowMorning}>
          {this.state.showMorning ? 'Hide' : 'Show'}
        </button>
        {this.state.showMorning && this.renderSections('morning')}
        <Header>Evening Journal</Header>
        <button onClick={this.toggleShowEvening}>
          {this.state.showEvening ? 'Hide' : 'Show'}
        </button>
        {this.state.showEvening && this.renderSections('evening')}
        <button type="submit">Submit</button>
      </Form>
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
