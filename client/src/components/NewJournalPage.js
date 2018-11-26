import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import styled from 'react-emotion';

import * as actions from '../actions';
import * as routes from '../constants/routes';
import JournalForm from './modules/JournalForm';

const Page = styled('div')`
  background: ${({ theme }) => theme.default.secondary100};
  display: grid;
  grid-template-columns: 2rem 1fr 2rem;
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

const ReturnLink = styled(Link)`
  color: ${({ theme }) => theme.default.secondary300};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-size: 3rem;
  justify-self: end;
  margin-top: 1.5rem;
  text-decoration: none;
`;

const LinkIcon = styled('div')`
  border-left: ${({ theme }) => `3px solid ${theme.default.secondary300}`};
  border-bottom: ${({ theme }) => `3px solid ${theme.default.secondary300}`};
  height: 1.2rem;
  transform: rotate(45deg);
  width: 1.2rem;
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
        <ReturnLink to={routes.DASHBOARD}>
          <LinkIcon />
        </ReturnLink>
        <div>
          <Title>{moment().format('MMMM Do, YYYY')}</Title>
          <JournalForm handleSubmitJournal={this.handleSubmitJournal} />
        </div>
      </Page>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(NewJournalPage));
