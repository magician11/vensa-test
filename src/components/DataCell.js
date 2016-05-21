import React from 'react';
import { Cell } from 'fixed-data-table';

const DataCell = ({rowIndex, columnKey, data, onMessageClicked, ...props}) => {
  return (
    <Cell {...props} onClick={onMessageClicked(data[rowIndex].Id)}>
      {data[rowIndex][columnKey]}
    </Cell>
  );
};

export default DataCell;
