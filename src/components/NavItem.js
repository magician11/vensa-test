import React from 'react';
import { Link } from 'react-router';

const NavItem = (props) => {
  return (
    <div>
      <Link {...props} activeClassName="active-link">
        <i className={'fa fa-' + props.icon + ' fa-2x'} aria-hidden="true"></i>
        <div>
          {props.title}
        </div>
      </Link>
    </div>
  );
};

export default NavItem;
