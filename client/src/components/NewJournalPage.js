import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../actions';
import JournalForm from './modules/JournalForm';

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
      <div>
        <h2>New Journal</h2>
        <JournalForm handleSubmitJournal={this.handleSubmitJournal} />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(NewJournalPage));
