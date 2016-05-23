import React from 'react';

import NavItem from './NavItem';

const Navigation = () =>
(
  <div className="navigation">
    <NavItem icon="star-o" title="Favourites" to="/todo/Favourites" />
    <NavItem icon="dashboard" title="Dashboard" to="/todo/Dashboard" />
    <NavItem icon="comments-o" title="Message" to="/message" />
    <NavItem icon="clock-o" title="vReminder" to="/todo/vReminder" />
    <NavItem icon="heart-o" title="vService" to="/todo/vService" />
    <NavItem icon="flask" title="vLab" to="/todo/vLab" />
    <NavItem icon="calendar" title="vAppointment" to="/todo/vAppointment" />
    <NavItem icon="plus-circle" title="New" to="/todo/New" />
    <NavItem icon="wrench" title="Configuration" to="/todo/Configuration" />
  </div>
);

export default Navigation;
