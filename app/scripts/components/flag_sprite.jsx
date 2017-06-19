import React from 'react';

import SVG from '../../images/flags-sprite.svg';

const FlagSprite = () => (
  <div className="flag-sprite">
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={ { __html: SVG } }
    />
  </div>
);

export default FlagSprite;
