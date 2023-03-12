import React, { useState } from "react";
import "../../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useRecoilState(userState);
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
        "http://localhost:5000/api/auth/login",
        formData
      );
      const { accessToken, ...user } = res.data;
      localStorage.setItem("accessToken", accessToken);
      setAccessToken(accessToken);
      setUserInfo(user);
      accessToken && navigate("/profile");
      const toekn = localStorage.getItem("accessToken");
      console.log(toekn)
    } catch (e) {
      console.log(e.message);
    }
  };


  return (
    <div className="login-cont">
      <p className="login-title">Login into your account</p>
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
        <p>This is the login page for an admin</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
