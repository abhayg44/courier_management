import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Addcourier from "./components/addcourier/Addcourier";
import { auth } from "./firebase";
import Navigator from "./components/navigation/Navigator";
import Updatecourier from "./components/update/Update";
import Viewcourier from "./components/viewcourier/Viewcourier";
import Deletecourier from "./components/delete/delete";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  // **** for display of the courier that is added
  // useEffect(() => {
  //   const fetchcourier = async () => {
  //     try {
  //       const response = await api.get("/courier");
  //       addCourier(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addcourier" element={<Addcourier />} />
          <Route path="/navigator" element={<Navigator />} />
          <Route path="/update" element={<Updatecourier />} />
          <Route path="/viewcourier" element={<Viewcourier />} />
          <Route path="/deletecourier" element={<Deletecourier />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
