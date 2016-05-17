import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        <ReactCSSTransitionGroup component="div" className="main-panel" transitionName="sliding-blade" transitionEnterTimeout={300} transitionLeaveTimeout={110}>
          {React.cloneElement(props.children, {
            key: props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
      <Footer />
    </div>
  );
};

export default VensaDashboard;
