import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../actions';
import JournalForm from './modules/JournalForm';

class NewJournalPage extends React.Component {
  handleSubmitJournal = values => {
    const { history } = this.props;

    console.log('values: ', values);

    this.props.handleAddJournal(values, history);
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
