import React, { Component, PropTypes } from 'react';
import { Table, Column } from 'fixed-data-table';
import { connect } from 'react-redux';
import { fetchMessages, sortMessages } from '../actions/index';
import DataCell from './DataCell';
import DateCell from './DateCell';
import StatusCell from './StatusCell';
import CellHeader from './CellHeader';

class Inbox extends Component {

  componentWillMount() {
    if (this.props.inbox.messages.length === 0) {
      this.props.fetchMessages();
    }
  }

  sortInbox() {
    const { messages, sortKey } = this.props.inbox;
    messages.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      return aVal > bVal ? 1 : 0;
    });
  }

  render() {
    this.sortInbox();

    const messages = this.props.inbox.messages;
    let panelContent;

    if (this.props.inbox.isFetching || (messages.length === 0)) {
      panelContent = (
        <div className="loader">
        <i className="fa fa-leaf fa-spin fa-4x"></i>
        <h2>Loading...</h2>
        <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      panelContent = (
        <Table
        rowHeight={50}
        rowsCount={messages.length}
        width={900}
        height={550}
        headerHeight={50}
        >
        <Column
        columnKey="NHI"
        header={<CellHeader {...this.props}>NHI</CellHeader>}
        cell={<DataCell data={messages} />}
        width={100}
        />
        <Column
        columnKey="PatientName"
        header={<CellHeader {...this.props}>Patient Name</CellHeader>}
        cell={<DataCell data={messages} />}
        width={100}
        flexGrow={1}
        />
        <Column
        columnKey="Body"
        header={<CellHeader {...this.props}>Message</CellHeader>}
        cell={<DataCell data={messages} />}
        width={100}
        flexGrow={2}
        />
        <Column
        columnKey="SentDateTime"
        header={<CellHeader {...this.props}>Date</CellHeader>}
        cell={<DateCell data={messages} />}
        width={100}
        flexGrow={1}
        />
        <Column
        columnKey="AddOn"
        header={<CellHeader {...this.props}>Add-on</CellHeader>}
        cell={<DataCell data={messages} />}
        width={100}
        />
        <Column
        columnKey="Status"
        header={<CellHeader {...this.props}>Status</CellHeader>}
        cell={<StatusCell data={messages} />}
        width={100}
        flexGrow={1}
        />
        </Table>
      );
    }

    return (
      <div className="inbox main-panel">
      {panelContent}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { inbox: state.inbox };
}

export default connect(mapStateToProps, { fetchMessages, sortMessages })(Inbox);
