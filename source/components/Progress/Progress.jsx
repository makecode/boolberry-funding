import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Progress extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    progress: PropTypes.number
  };

  static defaultProps = {
    className: '',
    title: '',
    progress: 0
  };


  render() {
    const { className, title, progress } = this.props;

    return (
      <div className={`progress ${className}`}>
        <div className="progress__bar" style={{ width: `${progress}%` }} />
        <span className="progress__title">{title}</span>
      </div>
    )
  }
}

export default Progress;
