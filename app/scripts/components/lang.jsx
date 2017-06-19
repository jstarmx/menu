import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindAll } from 'lodash';

class Lang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: props.languages.popular[0].code,
      open: false,
    };
    bindAll(this, 'toggle');
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { language, open } = this.state;
    return (
      <section className={ `header__item ${open ? 'header__item--open' : ''} lang` }>
        <button className="header__button" onClick={ this.toggle }>
          { language }
        </button>
      </section>
    );
  }
}

Lang.propTypes = {
  languages: PropTypes.shape({
    popular: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    all: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
};

export default Lang;
