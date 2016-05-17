import React from 'react';

import NavItem from './NavItem';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavItem icon="star-o" title="Favourites" to="/todo/favourites" />
      <NavItem icon="dashboard" title="Dashboard" to="/todo/dashboard"/>
      <NavItem icon="comments-o" title="Message" to="/message"/>
      <NavItem icon="clock-o" title="vReminder" to="/todo/vreminder"/>
      <NavItem icon="heart-o" title="vService" to="/todo/vservice"/>
      <NavItem icon="flask" title="vLab" to="/todo/vlab"/>
      <NavItem icon="calendar" title="vAppointment" to="/todo/vappointment"/>
      <NavItem icon="plus-circle" title="New" to="/todo/new" />
      <NavItem icon="wrench" title="Configuration" to="/todo/configuration"/>
    </div>
  );
};

export default Navigation;
