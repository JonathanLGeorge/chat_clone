import React, { useEffect, useState } from "react";
import "../styles/Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
//import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
//import { Message } from "@material-ui/icons";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import firebase from "firebase"; // for the time
function Chat() {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  //this will prevent the page from contantly refreshing on submit
  const sendingMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      //we want to do it this way to get the time because it will convert the time
      //nomatter where you are
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //after we submit set the line to be empty again
    setInput("");
  };
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Messages
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircleIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`#${channelName}`}
          />
          <button
            className="chat__input-button"
            type="submit"
            onClick={sendingMessage}
          >
            send message
          </button>
        </form>
        <div className="chat__input-icons">
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
