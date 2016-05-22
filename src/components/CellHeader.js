import React from 'react';
import { Cell } from 'fixed-data-table';

const CellHeader = ({children, columnKey, ...props}) => {
  const clickCellHeader = () => props.sortMessages(columnKey);

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

export default CellHeader;
