import React from 'react';
import { Cell } from 'fixed-data-table';

const DataCell = ({rowIndex, columnKey, data, ...props}) => {
  return (
    <Cell {...props}>
      {data[rowIndex][columnKey]}
    </Cell>
  );
};

export default DataCell;
