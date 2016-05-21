import React from 'react';
import { Link } from 'react-router';

const CloseButton = () => {
  return (
    <Link to="/" className="close-button">
      <span className="fa-stack fa-lg">
        <i className="fa fa-square-o fa-stack-2x"></i>
        <i className="fa fa-times fa-stack-1x"></i>
      </span>
    </Link>
  );
};

export default CloseButton;
