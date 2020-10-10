import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import SideBar from "./components/Sidebar";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  //this is a redux hook
  //look at feature/userslice for more details
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("user is ", authUser);
      if (authUser) {
        //user is logged in
      } else {
        //user is logged out
      }
    });
  }, []);
  return (
    //BEM convention used
    <div className="app">
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

//left off at 2:08
