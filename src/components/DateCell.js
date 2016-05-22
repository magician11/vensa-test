import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';
import Time from 'react-time'

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
        <Time value={date} format="DD MMMM YY" />
      </Cell>
    );
  }
}

export default DateCell;
