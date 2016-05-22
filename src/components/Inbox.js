import React, { Component, PropTypes } from 'react';
import { Table, Column } from 'fixed-data-table';
import { connect } from 'react-redux';
import { fetchMessages, sortMessages, fetchMessage } from '../actions/index';
import DataCell from './DataCell';
import DateCell from './DateCell';
import StatusCell from './StatusCell';
import CellHeader from './CellHeader';
import CloseButton from './CloseButton';
import MessageDetail from './MessageDetail';

class Inbox extends Component {

  componentWillMount() {
    if (this.props.inbox.messages.length === 0) {
      this.props.fetchMessages();
    }
  }

  updateSelectedMessage(messageId, rowIndex) {
    this.props.fetchMessage(messageId, rowIndex);
  }

  render() {
    const { messages, activeRowIndex } = this.props.inbox;
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
        <div>
          <p>Showing {messages.length} messages...</p>
          <Table
            rowHeight={50}
            rowsCount={messages.length}
            width={900}
            height={650}
            headerHeight={50}
          >
            <Column
              columnKey="NHI"
              header={<CellHeader {...this.props}>NHI</CellHeader>}
              cell={<DataCell selectedRow={activeRowIndex} data={messages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
            />
            <Column
              columnKey="PatientName"
              header={<CellHeader {...this.props}>Patient Name</CellHeader>}
              cell={<DataCell selectedRow={activeRowIndex} data={messages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
              flexGrow={1}
            />
            <Column
              columnKey="Body"
              header={<CellHeader {...this.props}>Message</CellHeader>}
              cell={<DataCell selectedRow={activeRowIndex} data={messages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
              flexGrow={2}
            />
            <Column
              columnKey="SentDateTime"
              header={<CellHeader {...this.props}>Date</CellHeader>}
              cell={<DateCell selectedRow={activeRowIndex} data={messages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
              flexGrow={1}
            />
            <Column
              columnKey="AddOn"
              header={<CellHeader {...this.props}>Add-on</CellHeader>}
              cell={<DataCell selectedRow={activeRowIndex} data={messages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
            />
            <Column
              columnKey="Status"
              header={<CellHeader {...this.props}>Status</CellHeader>}
              cell={<StatusCell selectedRow={activeRowIndex} data={messages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
              flexGrow={1}
            />
          </Table>
        </div>
      );
    }

    return (
      <div className="message main-panel">
        <div className="inbox">
          {panelContent}
          <CloseButton />
        </div>
        <MessageDetail message={this.props.inbox}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { inbox: state.inbox };
}

export default connect(mapStateToProps, { fetchMessages, sortMessages, fetchMessage })(Inbox);
