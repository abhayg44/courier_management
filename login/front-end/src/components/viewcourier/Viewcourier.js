import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { viewingcourier } from "../../services/courier_service";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./viewcourier.css";

function Viewcourier(props) {
  const [formdata, setFormData] = useState({ courier_id: "" });
  const [responsedata, setResponsedata] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courierid = formdata.courier_id;

    viewingcourier(courierid)
      .then((res) => {
        setResponsedata(JSON.stringify(res));
      })
      .catch((err) => {
        setResponsedata("Please enter a valid courier id");
      });
  };

  return (
    <div className="auth-form-container">
      <h2>View courier</h2>
      <form className="add-courier-login-form" onSubmit={handleSubmit}>
        <label htmlFor="courier_id">Courier id</label>
        <input
          value={formdata.courier_id}
          onChange={handleChange}
          type="courier_id"
          id="courier_id"
          name="courier_id"
        />

        <button onClick={handleSubmit}>Viewcourier</button>
      </form>
      <div className="data">{responsedata}</div>
      <span>
        back to
        <Link to="/navigator">Home page </Link>
      </span>
      <ToastContainer />
    </div>
  );
}

export default Viewcourier;
