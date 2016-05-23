import React from 'react';
import { Link } from 'react-router';

const NavItem = (props) =>
(
  <Link {...props} activeClassName="active-link">
    <div className="nav-item">
      <i className={`fa fa-${props.icon} fa-2x`} aria-hidden="true"></i>
      <div>
        {props.title}
      </div>
    </div>
  </Link>
);

NavItem.propTypes = {
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default NavItem;
