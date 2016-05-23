import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';
import vensaTable from '../modules/VensaTable';

class StatusCell extends Component {
  constructor() {
    super();
    this.onCellClicked = this.onCellClicked.bind(this);
  }
  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id, this.props.rowIndex);
  }

  render() {
    const { rowIndex, columnKey, data, selectedRow, ...props } = this.props;
    const statusId = data[rowIndex][columnKey];

    const { statusName, statusColor } = vensaTable.getHumanReadableStatus(statusId);

    let classes = 'inbox-cell';
    if (selectedRow === rowIndex) {
      classes += ' selectedRow';
    }

    return (
      <Cell {...props} className={classes} onClick={this.onCellClicked}>
        <div className={statusColor}>{statusName}</div>
      </Cell>
    );
  }
}

StatusCell.propTypes = {
  onMessageClicked: React.PropTypes.func.isRequired,
  rowIndex: React.PropTypes.number.isRequired,
  columnKey: React.PropTypes.number.isRequired,
  selectedRow: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired
};

export default StatusCell;
