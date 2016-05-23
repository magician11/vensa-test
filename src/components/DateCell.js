import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';
import vensaTable from '../modules/VensaTable';

class DateCell extends Component {

  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id, this.props.rowIndex);
  }

  render() {
    const  {rowIndex, columnKey, data, selectedRow, ...props} = this.props;
    const date = new Date(data[rowIndex][columnKey]);

    let classes = 'inbox-cell';
    if (selectedRow === rowIndex) {
      classes += ' selectedRow';
    }

    return (
      <Cell {...props} onClick={this.onCellClicked.bind(this)} className={classes}>
        {vensaTable.getHumanReadableDate(date)}
      </Cell>
    );
  }
}

export default DateCell;
