import React from 'react';
import vensaTable from '../modules/VensaTable';

const MessageDetail = (props) => {
  const message = props.message;
  let messageContent;

  if (message) {
    const { statusName, statusColor } = vensaTable.getHumanReadableStatus(message.Status);

    messageContent = (
      <table>
        <tbody>
          <tr><td>Message ID:</td><td>{message.Id}</td></tr>
          <tr><td>Status:</td><td className={statusColor}>{statusName}</td></tr>
          <tr><td>Sent:</td><td>{message.SentDateTime}</td></tr>
          <tr><td>Message:</td><td>{message.Body}</td></tr>
          <tr><td>NHI:</td><td>{message.NHI}</td></tr>
          <tr><td>Patient Name:</td><td>{message.PatientName}</td></tr>
          <tr><td>Mobile:</td><td>{message.MobileNumber}</td></tr>
          <tr><td>Home:</td><td>{message.HomeNumber}</td></tr>
          <tr><td>Address:</td><td>{message.HomeNumber}</td></tr>
          <tr><td>Home:</td><td>{message.Address}</td></tr>
          <tr><td>Add-on:</td><td>{message.AddOn}</td></tr>
          <tr><td>Patient ID:</td><td>{message.PatientId}</td></tr>
          <tr><td>Doctor:</td><td>{message.DoctorName}</td></tr>
        </tbody>
      </table>
    );
  } else {
    messageContent = (
      <p><i className="fa fa-info-circle"></i> Please select a message from the inbox.</p>
    );
  }

  return (
    <div className="message-detail">
    {messageContent}
    </div>
  );
};

export default MessageDetail;
