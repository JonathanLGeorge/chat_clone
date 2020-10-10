import React from "react";
import "../styles/Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import { Message } from "@material-ui/icons";
import Messages from "./Messages";
function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Messages />
      </div>
      <div className="chat__input">
        <AddCircleIcon />
        <form>
          <input placeholder={`Message #testCHANNEL`} />
          <button className="chat__input-button" type="submit">
            send message
          </button>
        </form>
        <div className="chat__input-icons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
