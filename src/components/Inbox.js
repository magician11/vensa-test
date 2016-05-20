import React, { Component, PropTypes } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';
import DataCell from './DataCell';
import DateCell from './DateCell';
import StatusCell from './StatusCell';

class Inbox extends Component {

  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {

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
          headerHeight={50}>
          <Column
            header={<Cell>NHI</Cell>}
            cell={<DataCell data={messages} field="NHI" />}
            width={100}
          />
          <Column
            header={<Cell>Patient Name</Cell>}
            cell={<DataCell data={messages} field="PatientName" />}
            width={100}
            flexGrow={1}
          />
          <Column
            header={<Cell>Message</Cell>}
            cell={<DataCell data={messages} field="Body" />}
            width={100}
            flexGrow={2}
          />
          <Column
            header={<Cell>Date</Cell>}
            cell={<DateCell data={messages} field="SentDateTime" />}
            width={100}
            flexGrow={1}
          />
          <Column
            header={<Cell>Add-on</Cell>}
            cell={<DataCell data={messages} field="AddOn" />}
            width={100}
          />
          <Column
            header={<Cell>Status</Cell>}
            cell={<StatusCell data={messages} field="Status" />}
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

export default connect(mapStateToProps, { fetchMessages })(Inbox);
