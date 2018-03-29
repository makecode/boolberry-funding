import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const { className, children, onClick } = props;

  return (
    <div className={`table__row ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func
};

TableRow.defaultProps = {
  className: '',
  onClick: () => {}
};

export default TableRow;
