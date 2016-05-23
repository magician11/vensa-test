import React, { Component } from 'react';
import { Cell } from 'fixed-data-table';
import vensaTable from '../modules/VensaTable';

class DateCell extends Component {
  constructor() {
    super();
    this.onCellClicked = this.onCellClicked.bind(this);
  }

  onCellClicked() {
    this.props.onMessageClicked(this.props.data[this.props.rowIndex].Id, this.props.rowIndex);
  }

  render() {
    const { rowIndex, columnKey, data, selectedRow, ...props } = this.props;
    const date = new Date(data[rowIndex][columnKey]);

    let classes = 'inbox-cell';
    if (selectedRow === rowIndex) {
      classes += ' selectedRow';
    }

    return (
      <Cell {...props} onClick={this.onCellClicked} className={classes}>
        {vensaTable.getHumanReadableDate(date)}
      </Cell>
    );
  }
}

DateCell.propTypes = {
  onMessageClicked: React.PropTypes.func.isRequired,
  rowIndex: React.PropTypes.number.isRequired,
  columnKey: React.PropTypes.number.isRequired,
  selectedRow: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired
};

export default DateCell;
