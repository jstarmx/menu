import React from 'react';

import languages from '../languages';
import Lang from './lang';

const Header = () => (
  <header className="header">
    <Lang languages={ languages } />
    <div className="header__item">
      &pound;
    </div>
  </header>
);

export default Header;
