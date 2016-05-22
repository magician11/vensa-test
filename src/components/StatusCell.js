import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';
import vensaTable from '../modules/VensaTable';

class StatusCell extends Component {
  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id);
  }

  render() {
    const {rowIndex, columnKey, data, ...props} = this.props;
    const statusId = data[rowIndex][columnKey];

    const { statusName, statusColor } = vensaTable.getHumanReadableStatus(statusId);

    const date = new Date();
    return (
      <Cell {...props} className="inbox-cell" onClick={this.onCellClicked.bind(this)}>
        <div className={statusColor}>{statusName}</div>
      </Cell>
    );
  }
}

export default StatusCell;
