import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';
import Time from 'react-time'

class DateCell extends Component {

  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id);
  }
  
  render() {
    const  {rowIndex, columnKey, data, ...props} = this.props;
    const date = new Date(data[rowIndex][columnKey]);
    return (
      <Cell {...props} onClick={this.onCellClicked.bind(this)} className="inbox-cell">
        <Time value={date} format="DD MMMM YY" />
      </Cell>
    );
  }
}

export default DateCell;
