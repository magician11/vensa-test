import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';

class Inbox extends Component {

  componentWillMount() {
    this.props.fetchMessages();
  }

  renderMessages() {
    return this.props.messages.map((message) => {
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

    return (
      <div className="inbox main-panel">
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { messages: state.inbox.messages };
}

export default connect(mapStateToProps, { fetchMessages })(Inbox);
