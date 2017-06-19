import React from 'react';
import PropTypes from 'prop-types';
import { partial } from 'lodash';

import Flag from './flag';

const LangItem = ({ code, name, selected, onClick }) => {
  const clickHandler = partial(onClick, code);

  return (
    <li className={ `lang-popup__item ${selected ? 'lang-popup__item--active' : ''}` }>
      <button className="lang-popup__button" onClick={ clickHandler }>
        <Flag code={ code } />
        <span className="lang-popup__label">{ name }</span>
      </button>
    </li>
  );
};

LangItem.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default LangItem;
