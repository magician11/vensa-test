import React from 'react';
import { Cell } from 'fixed-data-table';
import Time from 'react-time'

const DateCell = (props) => {
  const {rowIndex, field, data, ...otherProps} = props;
  const date = new Date(data[rowIndex][field]);
  return (
    <Cell {...otherProps}>
      <Time value={date} format="DD MMMM YY" />
    </Cell>
  );
};

export default DateCell;
