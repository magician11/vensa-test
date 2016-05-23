import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';

class DataCell extends Component {
  constructor() {
    super();
    this.onCellClicked = this.onCellClicked.bind(this);
  }

  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id, this.props.rowIndex);
  }

  render() {
    const { rowIndex, columnKey, data, selectedRow, ...props } = this.props;

    let classes = 'inbox-cell';
    if (selectedRow === rowIndex) {
      classes += ' selectedRow';
    }

    return (
      <Cell {...props} onClick={this.onCellClicked} className={classes}>
        {data[rowIndex][columnKey].substring(0, 44)}
      </Cell>
    );
  }
}

DataCell.propTypes = {
  onMessageClicked: React.PropTypes.func.isRequired,
  rowIndex: React.PropTypes.number.isRequired,
  columnKey: React.PropTypes.number.isRequired,
  selectedRow: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired
};

export default DataCell;
