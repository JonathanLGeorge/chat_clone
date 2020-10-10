import React from "react";
import "../styles/Messages.css";
import { Avatar } from "@material-ui/core";
function Messages() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          blablabla
          <span className="message__timestamp">this is a time stamp</span>
        </h4>
        <p className="message__message">This is a message</p>
      </div>
    </div>
  );
}

export default Messages;
