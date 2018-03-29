import React from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
  const { className, title, progress } = props;

  return (
    <div className={`progress ${className}`}>
      <div className="progress__bar" style={{ width: `${progress}%` }} />
      <span className="progress__title">{title}</span>
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  progress: PropTypes.number
};

Progress.defaultProps = {
  className: '',
  title: '',
  progress: 0
};

export default Progress;
