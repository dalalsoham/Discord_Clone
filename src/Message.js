import React from 'react';
import "./Message.css";
import { Avatar } from '@mui/material';

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>mr_d_jack_003
            <span className="message__timestamp">this is a timestamped message</span>
        </h4>

        <p>This is a message.</p>
      </div>
    </div>
  );
}

export default Message;
