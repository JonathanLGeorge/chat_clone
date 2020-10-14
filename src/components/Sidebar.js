import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import CallIcon from "@material-ui/icons/Call";
import AddIcon from "@material-ui/icons/Add";
//import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
//import InfoIcon from "@material-ui/icons/Info";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
//import { FiberDvrSharp } from "@material-ui/icons";

function Sidebar() {
  //this is how we are going to pull in our user info from data layer
  const user = useSelector(selectUser);

  //adding those channels
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    //in real time this will check for updates
    db.collection("channels").onSnapshot((snapshot) => {
      //update state whenever database changes
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);
  //when we press the plus icon
  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>wootwoot</h3>
        {/*Icons from material UI */}
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channels-header">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channel-list">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      {/*
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoIcon />
          <CallIcon />
        </div>
      </div>
      */}
      <div className="sidebar__profile">
        {/*<Avatar src="https://avatars3.githubusercontent.com/u/32345015?s=460&amp;u=9420ddbb5f4905c861ed60fdf586dcaa7e7e88cf&amp;v=4" /> */}
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(1, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
