import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// React components
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const VensaDashboard = (props) => {
  // {React.cloneElement(props.children, {
  //   key: props.location.pathname
  // })}
  return (
    <div>
      <Header />
      <ReactCSSTransitionGroup transitionName="sliding-blade" transitionEnterTimeout={300} transitionLeaveTimeout={1}>
        <div className="vensa-dashboard" key={props.location.pathname}>
          <Navigation />
          { props.children }
        </div>
      </ReactCSSTransitionGroup>
      <Footer />
    </div>
  );
};

export default VensaDashboard;
