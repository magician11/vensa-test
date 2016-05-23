import React from 'react';
import { Cell } from 'fixed-data-table';

const CellHeader = ({ children, columnKey, ...props }) => {
  const clickCellHeader = () => props.sortMessages(props.inbox.messages, columnKey);

  let classes = 'cell-header';
  let icon = '';
  if (columnKey === props.inbox.sortKey) {
    classes += ' active';
    icon = <i className="fa fa-caret-square-o-down"></i>;
  }
  return (
    <Cell {...props} className={classes}>
      <a onClick={clickCellHeader}>
        {children} {icon}
      </a>
    </Cell>
  );
};

CellHeader.propTypes = {
  children: React.PropTypes.array.isRequired,
  columnKey: React.PropTypes.number.isRequired,
  sortMessages: React.PropTypes.func.isRequired,
  inbox: React.PropTypes.object.isRequired
};

export default CellHeader;
