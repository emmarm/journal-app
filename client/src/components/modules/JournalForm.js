import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import * as journals from '../../constants/journalTypes';
import * as fields from '../../constants/fieldTypes';
import FormSection from './FormSection';
import FormGroup from './FormGroup';
import FormField from './FormField';

const Form = styled('form')`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 35rem;
`;

const SubmitButton = styled('button')`
  background: ${({ theme }) => theme.default.primary500};
  border: none;
  border-radius: 0.25rem;
  color: white;
  font-size: 1.3rem;
  margin: 3rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
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
      console.log('fields[section.type]: ', fields[section.type]);
      console.log('section: ', section);
      return section.count > 1 ? (
        <FormGroup key={section.type} {...section} {...fields[section.type]} />
      ) : (
        <Field
          component={FormField}
          key={section.type}
          legend
          name={section.type}
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
        <FormSection
          onClick={this.toggleShowMorning}
          show={this.state.showMorning}
          timeOfDay="Morning"
        >
          {this.state.showMorning && this.renderSections('morning')}
        </FormSection>
        <FormSection
          evening
          onClick={this.toggleShowEvening}
          show={this.state.showEvening}
          timeOfDay="Evening"
        >
          {this.state.showEvening && this.renderSections('evening')}
        </FormSection>
        <SubmitButton type="submit">Submit</SubmitButton>
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
