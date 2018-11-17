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

const Section = styled('div')`
  background: ${({ theme, evening }) =>
    evening ? theme.default.grey900 : theme.default.primary100};
  width: 100%;
`;

const Row = styled('div')`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 3rem;
`;

const Header = styled('h3')`
  color: ${({ theme }) => theme.default.primary500};
  font-family: ${({ theme }) => theme.titleFont.family};
  font-size: 2rem;
  font-style: ${({ theme }) => theme.titleFont.style};
  font-weight: ${({ theme }) => theme.titleFont.weight};
  margin: 1rem;
  text-align: center;
`;

const ToggleButton = styled('button')`
  background: ${({ theme }) => theme.default.primary400};
  border: none;
  border-radius: 0.25rem;
  color: white;
  height: 2rem;
  width: 2rem;
`;

const SubmitButton = styled('button')`
  background: ${({ theme }) => theme.default.primary500};
  border: none;
  border-radius: 0.25rem;
  color: white;
  padding: 0.5rem 1rem;
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
        <Section>
          <Row>
            <Header>Morning</Header>
            <ToggleButton onClick={this.toggleShowMorning}>
              {this.state.showMorning ? '-' : '+'}
            </ToggleButton>
          </Row>
          {this.state.showMorning && this.renderSections('morning')}
        </Section>
        <Section evening>
          <Row>
            <Header>Evening</Header>
            <ToggleButton onClick={this.toggleShowEvening}>
              {this.state.showEvening ? '-' : '+'}
            </ToggleButton>
          </Row>
          {this.state.showEvening && this.renderSections('evening')}
        </Section>
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
