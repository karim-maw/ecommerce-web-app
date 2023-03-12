import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/login.css";
import axios from 'axios'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      accessToken && navigate("/login");
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="login-cont">
      <p className="login-title">Create an account</p>
      <form onSubmit={handleSubmit} action="">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          type="text"
          placeholder="username"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="password"
        />
        <p>This is the Sign up page</p>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
