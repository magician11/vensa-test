class VensaTable {
  getHumanReadableStatus(statusId) {
    let statusColor;
    let statusName;

    switch (statusId) {
      case 4: statusName = 'Sent';
        statusColor = 'green';
        break;
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
      default: statusName = 'Unknown';
        statusColor = 'black';
    }

    return { statusName, statusColor };
  }
}

export default new VensaTable();
