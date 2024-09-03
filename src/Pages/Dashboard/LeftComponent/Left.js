import React from "react";
import "./Left.css";
import studentData from "../MainComponent/Data/data.json";
import { FaUser } from "react-icons/fa";
import img1 from "../LeftComponent/leftAssets/Email.png";
import { useState } from "react";

const Left = ({ data }) => {

    const [visibleCount, setVisibleCount] = useState(7);
  
    const handleViewMore = () => {
      setVisibleCount((prevCount) => prevCount + 5);
    };
  
  return (
    <div className="leftComponent">
      {/* recent student details */}
      <div className="recent-student">
      <div className="recent-student-heading">
        <h3>Recent Students</h3>
        <p>You have {studentData.length} students</p>
      </div>
      {studentData.slice(0, visibleCount).map((item, index) => (
        <div key={index} className="recent-student-details">
          <div className="recent-student-img">
            <FaUser className="recent-student-icon" />
          </div>
          <div className="student-names">
            <h3>{item.name}</h3>
            <p>{item.class}</p>
          </div>
          <div className="student-email">
            <img src={img1} alt={item.name} />
          </div>
        </div>
      ))}
      {visibleCount <studentData.length && (
        <button className="view-more-button" onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>

    </div>
  );
};
export default Left;
