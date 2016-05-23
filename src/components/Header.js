import React from 'react';
import { IndexLink } from 'react-router';

import LogoImg from '../images/logo-white.png';

const Header = () =>
(
  <header>
    <IndexLink to="/"><img src={LogoImg} alt="Vensa logo" /></IndexLink>
  </header>
);

export default Header;
