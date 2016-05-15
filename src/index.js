import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/Navigation';
import Inbox from './components/Inbox';
import MessageDetail from './components/MessageDetail';

const VensaDashboard = () => {

  return (
    <div className="dashboard">
      <Navigation />
      <Inbox />
      <MessageDetail />
    </div>
  );
};

ReactDOM.render(<VensaDashboard />, document.querySelector('.container'));
