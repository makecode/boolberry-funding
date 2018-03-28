import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableCol extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
  };

  static defaultProps = {
    className: ''
  };


  render() {
    const { className, children } = this.props;

    return (
      <div className={`table__col ${className}`}>
        {children}
      </div>
    )
  }
}

export default TableCol;
