import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    ico: PropTypes.string
  };

  static defaultProps = {
    className: '',
    ico: ''
  };


  render() {
    const { className, ico } = this.props;

    return (
      <span className={`icon icon-${ico} ${className}`} />
    )
  }
}

export default Icon;
