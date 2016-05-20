import React from 'react';
import { Cell } from 'fixed-data-table';
import Time from 'react-time'

const DateCell = ({rowIndex, columnKey, data, ...props}) => {
  const date = new Date(data[rowIndex][columnKey]);
  return (
    <Cell {...props}>
      <Time value={date} format="DD MMMM YY" />
    </Cell>
  );
};

export default DateCell;
