import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import SideBar from "./components/Sidebar";

function App() {
  return (
    //BEM convention used
    <div className="app">
      {/*Side bar*/}
      <SideBar />
      {/*Chat */}
      <Chat />
    </div>
  );
}

export default App;
