// libraries
import React from 'react';
import ReactDOM from 'react-dom';

// React components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Inbox from './components/Inbox';
import MessageDetail from './components/MessageDetail';
import Footer from './components/Footer';

// styling
require('font-awesome/scss/font-awesome.scss');
require('./styles/style.scss');

const VensaDashboard = () => {

  return (
    <div>
      <Header />
      <div className="dashboard">
        <Navigation />
        <Inbox />
        <MessageDetail />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<VensaDashboard />, document.querySelector('.container'));
