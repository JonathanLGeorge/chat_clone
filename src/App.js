import React from "react";
import "./App.css";
import SideBar from "./components/Sidebar";

function App() {
  return (
    //BEM convention used
    <div className="App">
      <h1>let start building :D</h1>
      {/*Side bar*/}
      <SideBar />
    </div>
  );
}

export default App;
