import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Table extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    size: PropTypes.oneOf([
      'four',
      'five'
    ])
  };

  static defaultProps = {
    className: '',
    size: 'five'
  };


  render() {
    const { className, children, size } = this.props;
    const tableSize = `${size}-columns`;

    return (
      <div className={`table ${className} ${tableSize}`}>
        {children}
      </div>
    )
  }
}

export default Table;
