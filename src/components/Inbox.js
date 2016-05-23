import React, { Component, PropTypes } from 'react';
import { Table, Column } from 'fixed-data-table';
import { connect } from 'react-redux';
import { fetchMessages, sortMessages, fetchMessage, updateFilterString } from '../actions/index';
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

  handleFilterStringChange (e) {
    e.preventDefault();
    this.props.updateFilterString(e.target.value);
  }

  filterData(messages) {
    return messages.filter((message) => {
      return message.PatientName.toLowerCase().includes(this.props.inbox.filterString);
    });
  }

  render() {
    const { messages, activeRowIndex } = this.props.inbox;
    let panelContent;

    if (this.props.inbox.isFetching || (messages.length === 0)) {
      panelContent = (
        <div className="loader">
          <i className="fa fa-leaf fa-spin fa-4x"></i>
          <h2>Loading messages...</h2>
          <span className="sr-only">Loading messages...</span>
        </div>
      );
    } else {
      const filteredMessages = this.filterData(messages);
      panelContent = (
        <div>
          <div className="inbox-header">
            <div>
              <span>Filter by patient name: </span>
              <input type="text" onChange={this.handleFilterStringChange.bind(this)} />
            </div>
            <p><small>Showing {filteredMessages.length} {filteredMessages.length === 1 ? 'message' : 'messages'}.</small></p>
          </div>
          <hr/>
          <Table
            rowHeight={50}
            rowsCount={filteredMessages.length}
            width={900}
            height={650}
            headerHeight={50}
          >
            <Column
              columnKey="NHI"
              header={<CellHeader {...this.props}>NHI</CellHeader>}
              cell={<DataCell selectedRow={activeRowIndex} data={filteredMessages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
            />
            <Column
              columnKey="PatientName"
              header={<CellHeader {...this.props}>Patient Name</CellHeader>}
              cell={<DataCell selectedRow={activeRowIndex} data={filteredMessages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
              flexGrow={1}
            />
            <Column
              columnKey="Body"
              header={<CellHeader {...this.props}>Message</CellHeader>}
              cell={<DataCell selectedRow={activeRowIndex} data={filteredMessages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
              flexGrow={2}
            />
            <Column
              columnKey="SentDateTime"
              header={<CellHeader {...this.props}>Date</CellHeader>}
              cell={<DateCell selectedRow={activeRowIndex} data={filteredMessages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
              flexGrow={1}
            />
            <Column
              columnKey="AddOn"
              header={<CellHeader {...this.props}>Add-on</CellHeader>}
              cell={<DataCell selectedRow={activeRowIndex} data={filteredMessages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
              width={100}
            />
            <Column
              columnKey="Status"
              header={<CellHeader {...this.props}>Status</CellHeader>}
              cell={<StatusCell selectedRow={activeRowIndex} data={filteredMessages} onMessageClicked={this.updateSelectedMessage.bind(this)} />}
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

export default connect(mapStateToProps, { fetchMessages, sortMessages, fetchMessage, updateFilterString })(Inbox);
