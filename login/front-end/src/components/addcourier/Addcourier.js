import { useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { addingcouriers } from "../../services/courier_service";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addcourier(props) {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    courier_id: "",
    delivery_address: "",
    from_address: "",
    phone_no: "",
    content: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((formdata) => ({
      ...formdata,
      [name]: value,
    }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const courier = {
      name: formdata.name,
      email: formdata.email,
      courier_id: formdata.courier_id,
      delivery_address: formdata.delivery_address,
      from_address: formdata.from_address,
      phone_no: formdata.phone_no,
      content: formdata.content,
    };
    addingcouriers(courier)
      .then((res) => {
        console.log(res);
        notify();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Add courier</h2>
      <form className="add-courier-login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={formdata.name}
          onChange={handleChange}
          type="name"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={formdata.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="courier_id">Courier id</label>
        <input
          value={formdata.courier_id}
          onChange={handleChange}
          type="courier_id"
          id="courier_id"
          name="courier_id"
        />
        <label htmlFor="deliver_address">Delivery address</label>
        <input
          value={formdata.delivery_address}
          onChange={handleChange}
          type="text"
          id="delivery_address"
          name="delivery_address"
        />
        <label htmlFor="from_address">Form address</label>
        <input
          value={formdata.from_address}
          onChange={handleChange}
          type="text"
          id="from_address"
          name="from_address"
        />
        <label htmlFor="phone_no">Phone no</label>
        <input
          value={formdata.phone_no}
          onChange={handleChange}
          type="phone_no"
          id="phone_no"
          name="phone_no"
        />
        <label htmlFor="content">Content</label>
        <input
          value={formdata.content}
          onChange={handleChange}
          type="text"
          id="content"
          name="content"
        />

        <button>Addcourier</button>
      </form>
      <span>
        back to
        <Link to="/navigator"> Home page </Link>
      </span>
      <ToastContainer />
    </div>
  );
}

export default Addcourier;
