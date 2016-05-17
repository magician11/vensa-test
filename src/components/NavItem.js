import React from 'react';
import { Link } from 'react-router';

const NavItem = (props) => {
  return (
      <Link {...props} activeClassName="active-link">
        <div className="nav-item">
          <i className={'fa fa-' + props.icon + ' fa-2x'} aria-hidden="true"></i>
          <div>
            {props.title}
          </div>
        </div>
      </Link>
  );
};

export default NavItem;
