import React from 'react';

// React components
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const VensaDashboard = (props) => {
  return (
    <div>
      <Header />
      <div className="vensa-dashboard">
        <Navigation />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default VensaDashboard;
