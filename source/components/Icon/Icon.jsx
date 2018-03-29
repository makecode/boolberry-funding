import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { className, ico } = props;

  return (
    <span className={`icon icon-${ico} ${className}`} />
  )
};

Icon.propTypes = {
  className: PropTypes.string,
  ico: PropTypes.string
};

Icon.defaultProps = {
  className: '',
  ico: ''
};

export default Icon;
