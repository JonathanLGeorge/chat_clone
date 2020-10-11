import React from "react";
import "../styles/SidebarChannel.css";
function SidebarChannel({ id, channelName }) {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName} {/*this is the users added channel name */}
      </h4>
    </div>
  );
}

export default SidebarChannel;
