import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import SideBar from "./components/Sidebar";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
function App() {
  //this is a redux hook
  //look at feature/userslice for more details
  const user = useSelector(selectUser);

  //this allows us to shoot our code into the data layer
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("user is ", authUser); if you look are the object it shows all the user info we can use
      if (authUser) {
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]); //this takes care of dependency warning
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
