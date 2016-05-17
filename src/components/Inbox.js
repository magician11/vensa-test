import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router';
import { fetchMessages } from '../actions/index';


class Inbox extends Component {

  componentWillMount() {
    this.props.fetchMessages();
  }

  renderMessages() {
    console.log('rendering messages...');
    console.log(this.props.messages);
    return this.props.messages.map((message) => {
      console.log(message);
      return (
        <li>
          {message.Id}
        </li>
      );
    });
  }

  render() {
    console.log('Rendering Inbox Component...', this.props.messages);
    //console.log('Messages...', this.props.messages[0].length);

    return (
      <div className="inbox">
        <p>inbox</p>
        <ul>
          { this.renderMessages() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapping state to props', state);
  return { messages: state.inbox.messages };
}

export default connect(mapStateToProps, { fetchMessages })(Inbox);
