import React from 'react';

import NavItem from './NavItem';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavItem icon="star-o" title="Favourites" />
      <NavItem icon="dashboard" title="Dashboard" />
      <NavItem icon="comments-o" title="Message" />
      <NavItem icon="clock-o" title="vReminder" />
      <NavItem icon="heart-o" title="vService" />
      <NavItem icon="flask" title="vLab" />
      <NavItem icon="calendar" title="vAppointment" />
      <NavItem icon="plus-circle" title="New" />
      <NavItem icon="wrench" title="Configuration" />
    </div>
  );
};

export default Navigation;
