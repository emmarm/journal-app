import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import styled from 'react-emotion';

import * as actions from '../actions';
import JournalForm from './modules/JournalForm';

const Page = styled('div')`
  background: ${({ theme }) => theme.default.secondary100};
  margin: 0;
  padding: 2rem;
  width: 100vw;
`;

const Title = styled('h2')`
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-weight: ${({ theme }) => theme.default.titleFont.lightWeight};
  font-size: 1.5rem;
  text-align: center;
`;

class NewJournalPage extends React.Component {
  handleSubmitJournal = values => {
    const { history } = this.props;

    const entries = {};

    const fields = Object.keys(values);
    fields.forEach(field => {
      if (/[0-9]/.test(field.charAt(field.length - 1))) {
        const fieldGroup = field.replace(/([a-zA-Z]+)[0-9]*/, '$1');

        if (!entries[fieldGroup]) {
          entries[fieldGroup] = [];
        }
        entries[fieldGroup].push(values[field]);
      } else {
        entries[field] = values[field];
      }
    });

    this.props.handleAddJournal(entries, history);
  };

  render() {
    return (
      <Page>
        <Title>{moment().format('MMMM Do, YYYY')}</Title>
        <JournalForm handleSubmitJournal={this.handleSubmitJournal} />
      </Page>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(NewJournalPage));
