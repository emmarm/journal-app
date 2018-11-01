import React from 'react';
import { reduxForm } from 'redux-form';

import JournalForm from './modules/JournalForm';

class NewJournalPage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h2>New Journal</h2>
      </div>
    );
  }
}

export default reduxForm({
  form: 'newJournalForm'
})(NewJournalPage);
