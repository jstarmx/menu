import React from 'react';

import SVG from '../../images/flags-sprite.svg';

const FlagSprite = () => (
  <div
    className="flag-sprite"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={ { __html: SVG } }
  />
);

export default FlagSprite;
