import React from "react";
import img1 from "../Sidebar/SidebarAssets/logo.png";
import img2 from "../Sidebar/SidebarAssets/Home.png";
import img3 from "../Sidebar/SidebarAssets/Student.png";
import img4 from "../Sidebar/SidebarAssets/Teacher.png";
import img5 from "../Sidebar/SidebarAssets/Chat.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const useName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <>
      <aside className="sidebar_container">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <img src={img1} alt="" className="img-icon" />
            <p>Akademi</p>
          </div>
        </div>

        <div className="sidebar-list">
          <div className="sidebar-list-item">
            <img src={img2} alt="" />
            <Link to="/dashboard" className="navigation-link">
              <p>Dashboard</p>
            </Link>
          </div>
          <div className="sidebar-list-item">
            <img src={img3} alt="" />
            <Link to="/students" className="navigation-link">
              <p>Students</p>
            </Link>
          </div>
          <div className="sidebar-list-item">
            <img src={img4} alt="" />
            <Link to="/teachers" className="navigation-link">
              <p>Teachers</p>
            </Link>
          </div>
          <div className="sidebar-list-item">
              <img src={img5} alt="" />
              <Link to="/contact" className="navigation-link">
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div className="sidebar-info">
          <p>Akademi - <br />School Admission Dashboard</p>
        </div>
        <div className="menu-container">
        <div className="user-info">
          <p className="username">Welcome</p>
          <p>{useName.name}</p>
        </div>
        <button className="button_logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      </aside>
    </>
  );
};

export default Sidebar;
