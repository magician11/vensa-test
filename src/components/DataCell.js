import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';

class DataCell extends Component {

  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id);
  }

  render() {
    const {rowIndex, columnKey, data, ...props} = this.props;
    return (
      <Cell {...props} onClick={this.onCellClicked.bind(this)} className="inbox-cell">
        {data[rowIndex][columnKey]}
      </Cell>
    );
  }
}

export default DataCell;
