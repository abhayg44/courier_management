import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function home() {
  return (
    <div className="container">
      <h1>Courier Mangement</h1>
      <div className="box">
        <h2>
          <p>Already have an account?</p>
          <Link to="/login" className="a">
            login
          </Link>
        </h2>

        <br />
        <h2>
          <p>Don't have an account yet?</p>

          <Link to="/signup" className="a">
            Signup
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default home;
