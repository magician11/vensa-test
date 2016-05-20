import React from 'react';
import { Cell } from 'fixed-data-table';

const CellHeader = ({children, columnKey, ...props}) => {
  const clickCellHeader = () => props.sortMessages(columnKey);
  const classes = `cell-header ${(columnKey === props.inbox.sortKey)? 'active' : ''}`;
  return (
    <Cell {...props} className={classes}>
      <a onClick={clickCellHeader}>
        {children}
      </a>
    </Cell>
  );
};

export default CellHeader;
