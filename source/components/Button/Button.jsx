import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Progress extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func
  };

  static defaultProps = {
    className: '',
    onClick: () => {}
  };

  onClick = (event) => {
    event.stopPropagation();
    this.props.onClick(event);
  };


  render() {
    const { className, children } = this.props;

    return (
      <button className={`btn ${className}`} onClick={this.onClick}>
        {children}
      </button>
    )
  }
}

export default Progress;
