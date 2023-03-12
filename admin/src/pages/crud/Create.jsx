import React from "react";
import { useState } from "react";
import "./crud.css";
import axios from "axios";

const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: "",
    price: "",
    categories: "",
    size: "",
    color: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/products", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(formData);
  };

  return (
    <div className="crud-cont">
      <h1>Create a Product</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          placeholder="title"
          required
        />
        <input
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          type="text"
          placeholder="description"
          required
        />
        <input
          name="img"
          value={formData.img}
          onChange={handleChange}
          type="text"
          placeholder="image"
          required
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          type="text"
          placeholder="price"
          required
        />
        <input
          name="categories"
          value={formData.categories}
          onChange={handleChange}
          type="text"
          placeholder="categories"
          required
        />
        <input
          name="size"
          value={formData.size}
          onChange={handleChange}
          type="text"
          placeholder="size"
          required
        />
        <input
          name="color"
          value={formData.color}
          onChange={handleChange}
          type="text"
          placeholder="color"
          required
        />

        <p>Fill everything to create a product</p>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
