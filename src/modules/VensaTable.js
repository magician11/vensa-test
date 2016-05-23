import Time from 'react-time';
import React from 'react';

class VensaTable {
  getHumanReadableStatus(statusId) {
    let statusColor;
    let statusName;

    switch (statusId) {
      case 1: statusName = 'ToBeSent'; break;
      case 2: statusName = 'Pushed'; break;
      case 4: statusName = 'Sent'; break;
      case 8: statusName = 'Delivered'; break;
      case 16: statusName = 'Replied'; break;
      case 32: statusName = 'Error'; break;
      case 64: statusName = 'Unreachable'; break;
      default: statusName = 'Unknown'; break;
    }

    if (statusId === 4) {
      statusColor = 'green';
    } else if (statusId === 1 || statusId === 2 || statusId === 8 || statusId === 16) {
      statusColor = 'yellow';
    } else if (statusId === 32 || statusId === 64) {
      statusColor = 'red';
    } else {
      statusColor = 'black';
    }

    return { statusName, statusColor };
  }

  getHumanReadableDate(date) {
    return <Time value={date} format="DD MMMM YY" />;
  }
}

export default new VensaTable();
