import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';
import vensaTable from '../modules/VensaTable';

class StatusCell extends Component {
  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id, this.props.rowIndex);
  }

  render() {
    const {rowIndex, columnKey, data, selectedRow, ...props} = this.props;
    const statusId = data[rowIndex][columnKey];

    const { statusName, statusColor } = vensaTable.getHumanReadableStatus(statusId);

    let classes = 'inbox-cell';
    if (selectedRow === rowIndex) {
      classes += ' selectedRow';
    }

    const date = new Date();
    return (
      <Cell {...props} className={classes} onClick={this.onCellClicked.bind(this)}>
        <div className={statusColor}>{statusName}</div>
      </Cell>
    );
  }
}

export default StatusCell;
