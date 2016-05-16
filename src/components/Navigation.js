import React from 'react';

import NavItem from './NavItem';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavItem icon="star-o" title="Favourites" to="/todo"/>
      <NavItem icon="dashboard" title="Dashboard" to="/todo"/>
      <NavItem icon="comments-o" title="Message" to="/message"/>
      <NavItem icon="clock-o" title="vReminder" to="/todo"/>
      <NavItem icon="heart-o" title="vService" to="/todo"/>
      <NavItem icon="flask" title="vLab" to="/todo"/>
      <NavItem icon="calendar" title="vAppointment" to="/todo"/>
      <NavItem icon="plus-circle" title="New" to="/todo" />
      <NavItem icon="wrench" title="Configuration" to="/todo"/>
    </div>
  );
};

export default Navigation;
