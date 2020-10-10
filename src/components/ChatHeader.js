import React from "react";
import "../styles/ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
function ChatHeader() {
  return (
    <div className="chatHeader">
      <h3>Im the header</h3>
      <div className="chatHeader__left">
        <h3>
          <span className="" chatheader__hash>
            #
          </span>
          Test Channel Name
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader__search">
          <input placeholder="search" />
          <SearchRoundedIcon />
          <HelpOutlineRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
