import React from 'react';
import PropTypes from 'prop-types';

import LangItem from './lang_item';

const LangPopup = ({ close, languages, onClick, selected }) => (
  <nav className="lang-popup">
    <h2 className="lang-popup__heading">
      Select Language
      <button className="lang-popup__close" onClick={ close }>
        <img src="x.svg" className="lang-popup__icon" alt="Close language menu" />
      </button>
    </h2>
    <div className="lang-popup__menu">
      <h3 className="lang-popup__subheading">Popular Languages</h3>
      <ul className="lang-popup__list">
        { languages.popular.map(language => (
          <LangItem
            code={ language.code }
            name={ language.name }
            selected={ language.code === selected }
            onClick={ onClick }
            key={ language.id }
          />
        )) }
      </ul>
      <h3 className="lang-popup__subheading">All Languages</h3>
      <ul className="lang-popup__list">
        { languages.all.map(language => (
          <LangItem
            code={ language.code }
            name={ language.name }
            selected={ language.code === selected }
            onClick={ onClick }
            key={ language.id }
          />
        )) }
      </ul>
    </div>
  </nav>
);

LangPopup.propTypes = {
  close: PropTypes.func.isRequired,
  languages: PropTypes.shape({
    popular: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    all: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default LangPopup;
