import React from 'react';
import { Cell } from 'fixed-data-table';

const DataCell = (props) => {
  const {rowIndex, field, data, ...otherProps} = props;
  return (
    <Cell {...otherProps}>
    {data[rowIndex][field]}
    </Cell>
  );
};

export default DataCell;
