import React from 'react';
import vensaTable from '../modules/VensaTable';

const MessageDetail = (props) => {
  const { isFetchingMessage, activeMessage } = props.message;
  let messageContent;
  if (isFetchingMessage) {
    messageContent = (
      <div className="loader">
        <i className="fa fa-spinner fa-spin fa-3x"></i>
        <h2>Loading...</h2>
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (activeMessage) {
    const { statusName, statusColor } = vensaTable.getHumanReadableStatus(activeMessage.Status);

    messageContent = (
      <table>
        <tbody>
          <tr><td>Message ID:</td><td>{activeMessage.Id}</td></tr>
          <tr><td>Status:</td><td className={statusColor}>{statusName}</td></tr>
          <tr><td>Sent:</td><td>{activeMessage.SentDateTime}</td></tr>
          <tr><td>Message:</td><td>{activeMessage.Body}</td></tr>
          <tr><td>NHI:</td><td>{activeMessage.NHI}</td></tr>
          <tr><td>Patient Name:</td><td>{activeMessage.PatientName}</td></tr>
          <tr><td>Mobile:</td><td>{activeMessage.MobileNumber}</td></tr>
          <tr><td>Home:</td><td>{activeMessage.HomeNumber}</td></tr>
          <tr><td>Address:</td><td>{activeMessage.HomeNumber}</td></tr>
          <tr><td>Home:</td><td>{activeMessage.Address}</td></tr>
          <tr><td>Add-on:</td><td>{activeMessage.AddOn}</td></tr>
          <tr><td>Patient ID:</td><td>{activeMessage.PatientId}</td></tr>
          <tr><td>Doctor:</td><td>{activeMessage.DoctorName}</td></tr>
        </tbody>
      </table>
    );
  } else {
    messageContent = (
      <table>
        <tbody>
          <tr><td><i className="fa fa-info-circle"></i> Please select a message from the inbox.</td></tr>
        </tbody>
      </table>
    );
  }

  return (
    <div className="message-detail">
      {messageContent}
    </div>
  );
};

export default MessageDetail;
