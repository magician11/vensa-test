import React from 'react';
import { Link } from 'react-router';

const CloseButton = () => {
  return (
    <Link to="/" className="close-button"><i className="fa fa-times fa-2x"></i></Link>
  );
};

export default CloseButton;
