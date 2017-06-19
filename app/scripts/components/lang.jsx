import React, { Component } from 'react';
import { bindAll } from 'lodash';

import FlagSprite from './flag_sprite';
import Flag from './flag';
import LangPopup from './lang_popup';
import languages from '../languages';

class Lang extends Component {
  constructor() {
    super();
    this.state = {
      language: languages.popular[0].code,
      open: false,
    };
    bindAll(this, 'select', 'toggle');
  }

  select(code) {
    this.setState({ language: code, open: false });
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { language, open } = this.state;

    return (
      <section className={ `header__item ${open ? 'header__item--open' : ''} lang` }>
        <FlagSprite />
        <button className="header__button" onClick={ this.toggle }>
          <Flag code={ language } />
        </button>

        { open &&
          <LangPopup
            close={ this.toggle }
            languages={ languages }
            onClick={ this.select }
            selected={ language }
          />
        }
      </section>
    );
  }
}

export default Lang;
