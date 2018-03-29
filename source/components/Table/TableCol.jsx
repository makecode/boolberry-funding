import React from 'react';
import PropTypes from 'prop-types';

const TableCol = (props) => {
  const { className, children } = props;

  return (
    <div className={`table__col ${className}`}>
      {children}
    </div>
  );
};

TableCol.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

TableCol.defaultProps = {
  className: ''
};


export default TableCol;
