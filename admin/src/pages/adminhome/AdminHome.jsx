import React from "react";
import { useNavigate } from "react-router-dom";
import './adminhome.css'

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-container">
      <div className="admin-options">
        <h1>Create Products</h1>
        <h3>Here you can create new products for your website</h3>
        <button
          onClick={() => navigate("/admin/home/options/crud/create")}
          className="admin-btn"
        >
          Create
        </button>
      </div>
      <div className="admin-options">
        <h1>Edit a Product</h1>
        <h3>Here you can Edit a product for your website</h3>
        <button
          onClick={() => navigate("/admin/home/options/crud/edit")}
          className="admin-btn"
        >
          Edit
        </button>
      </div>
      <div className="admin-options">
        <h1>Delete a Product</h1>
        <h3>Here you can delete a product for your website</h3>
        <button
          onClick={() => navigate("/admin/home/options/crud/delete")}
          className="admin-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
