import React from 'react';
import { Cell } from 'fixed-data-table';

const StatusCell = ({rowIndex, columnKey, data, ...props}) => {
  const statusId = data[rowIndex][columnKey];

  let statusColor;
  let statusName;

  switch(statusId) {
    case 4: statusName = 'Sent';
    statusColor = 'green';
    case 1: statusName = 'ToBeSent';
    case 2: statusName = 'Pushed';
    case 8: statusName = 'Delivered';
    case 16: statusName = 'Replied';
    statusColor = 'yellow';
    break;
    case 32: statusName = 'Error';
    case 64: statusName = 'Unreachable';
    statusColor = 'red';
    break;
  }

  const date = new Date();
  return (
    <Cell {...props}>
      <div className={statusColor}>{statusName}</div>
    </Cell>
  );
};

export default StatusCell;
