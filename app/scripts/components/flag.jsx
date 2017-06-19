import React from 'react';
import PropTypes from 'prop-types';

const Flag = ({ code }) => (
  <svg
    className="flag"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={ { __html: `<use xlink:href="#${code}"></use>` } }
  />
);

Flag.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Flag;
