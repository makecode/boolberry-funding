import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  const { className, children, size } = props;
  const tableSize = `${size}-columns`;

  return (
    <div className={`table ${className} ${tableSize}`}>
      {children}
    </div>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  size: PropTypes.oneOf([
    'four',
    'five'
  ])
};

Table.defaultProps = {
  className: '',
  size: 'five'
};

export default Table;
