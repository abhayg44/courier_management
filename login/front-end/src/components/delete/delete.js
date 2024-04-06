import axios from "axios";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { deletingcourier } from "../../services/courier_service";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Deletecourier(props) {
  const [formdata, setFormdata] = useState({ courier_id: "" });
  const [responsedata, setResponsedata] = useState("");

  const notify = () => {
    toast.success("Courier added successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((formdata) => ({
      ...formdata,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courierid = formdata.courier_id;

    deletingcourier(courierid)
      .then((res) => {
        console.log("success");
        notify();
      })
      .catch((err) => {
        setResponsedata("Please enter a valid courier id");
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Delete courier</h2>
      <form className="add-courier-login-form" onSubmit={handleSubmit}>
        <label htmlFor="courier_id">Courier id</label>
        <input
          value={formdata.courier_id}
          type="courier_id"
          onChange={handleChange}
          id="courier_id"
          name="courier_id"
        />

        <button onClick={handleSubmit}>Deletecourier</button>
      </form>
      <div className="data">{responsedata}</div>
      <span>
        back to
        <Link to="/navigator"> Home page </Link>
      </span>
      <ToastContainer />
    </div>
  );
}

export default Deletecourier;
