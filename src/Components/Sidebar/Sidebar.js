import React from "react";
import img1 from "../Sidebar/SidebarAssets/logo.png";
import img2 from "../Sidebar/SidebarAssets/Home.png";
import img3 from "../Sidebar/SidebarAssets/Student.png";
import img4 from "../Sidebar/SidebarAssets/Teacher.png";
import img5 from "../Sidebar/SidebarAssets/Chat.png";
import img6 from "../Sidebar/SidebarAssets/Calendar.png";
import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar_container">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <img src={img1} alt="" className="img-icon" />
            <p>Akademi</p>
          </div>
          {/* <span className='icon close_icon' onCdivck={OpenSidebar}>X</span> */}
        </div>

        <div className="sidebar-list">
          <div className="sidebar-list-item">
            <img src={img2} alt="" />
            <Link to="/" className="navigation-link">
              <p>Dashboard</p>
            </Link>
          </div>
          <div className="sidebar-list-item">
            <img src={img3} alt="" />
            <Link to="/Students" className="navigation-link">
              <p>Students</p>
            </Link>
          </div>
          <div className="sidebar-list-item">
            <img src={img4} alt="" />
            <Link to="/Teachers" className="navigation-link">
              <p>Teachers</p>
            </Link>
          </div>
          <div className="sidebar-list-item">
              <img src={img6} alt="" />
              <Link to="/Events" className="navigation-link">
              <p>Events</p>
            </Link>
          </div>
          <div className="sidebar-list-item">
              <img src={img5} alt="" />
              <Link to="/Chats" className="navigation-link">
              <p>Chats</p>
            </Link>
          </div>
        </div>
        <div className="sidebar-info">
          <p>Akademi - School Admission Dashboard</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
