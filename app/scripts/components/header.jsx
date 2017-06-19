import React from 'react';

import Lang from './lang';

const Header = () => (
  <header className="header">
    <Lang />
    <div className="header__item currency">
      <span className="currency__symbol">&pound;</span>
    </div>
  </header>
);

export default Header;
