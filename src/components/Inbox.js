import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';

class Inbox extends Component {

  componentWillMount() {
    this.props.fetchMessages();
  }

  renderMessages() {
    return this.props.inbox.messages.map((message) => {
      return (
        <tr key={message.Id}>
          <td>{message.NHI}</td>
          <td>{message.PatientName}</td>
          <td>{message.Body}</td>
          <td>{message.ReceivedDateTime}</td>
          <td>{message.AddOn}</td>
          <td>{message.Status}</td>
        </tr>
      );
    });
  }

  render() {

    let panelContent;

    if (this.props.inbox.isFetching) {
      panelContent = (
        <div className="loader">
          <i className="fa fa-leaf fa-spin fa-4x"></i>
          <h2>Loading...</h2>
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      panelContent = (
        <table>
          <thead>
            <tr>
              <th>NHI</th>
              <th>Patient Name</th>
              <th>Message</th>
              <th>Date</th>
              <th>Add-on</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { this.renderMessages() }
          </tbody>
        </table>
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
