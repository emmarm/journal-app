import React from 'react';

import JournalForm from './modules/JournalForm';

class NewJournalPage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h2>New Journal</h2>
        <JournalForm />
      </div>
    );
  }
}

export default NewJournalPage;
