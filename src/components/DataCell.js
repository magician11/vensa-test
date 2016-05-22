import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';

class DataCell extends Component {

  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id, this.props.rowIndex);
  }

  render() {
    const {rowIndex, columnKey, data, selectedRow, ...props} = this.props;

    let classes = 'inbox-cell';
    if (selectedRow === rowIndex) {
      classes += ' selectedRow';
    }

    return (
      <Cell {...props} onClick={this.onCellClicked.bind(this)} className={classes}>
        {data[rowIndex][columnKey]}
      </Cell>
    );
  }
}

export default DataCell;
