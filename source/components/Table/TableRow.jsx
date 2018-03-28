import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableRow extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func
  };

  static defaultProps = {
    className: '',
    onClick: () => {}
  };


  render() {
    const { className, children, onClick } = this.props;

    return (
      <div className={`table__row ${className}`} onClick={onClick}>
        {children}
      </div>
    )
  }
}

export default TableRow;
