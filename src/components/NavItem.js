import React from 'react';

const NavItem = (props) => {
  return (
    <div>
      <i className={'fa fa-' + props.icon + ' fa-2x'} aria-hidden="true"></i>
      <div>
        {props.title}
      </div>
    </div>
  );
};

export default NavItem;
