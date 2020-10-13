import React from "react";
import "../styles/Messages.css";
import { Avatar } from "@material-ui/core";
function Messages({ timestamp, message, user }) {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toDateString()}
          </span>
        </h4>
        <p className="message__message">{message}</p>
      </div>
    </div>
  );
}

export default Messages;
