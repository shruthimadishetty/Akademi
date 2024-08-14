import React from "react";
import "./Main.css";
import img from "../MainComponent/mainAssets/Search.png";
import img1 from "../../../Components/Sidebar/SidebarAssets/Student.png";
import img2 from "../../../Components/Sidebar/SidebarAssets/Teacher.png";
import img3 from "../../../Components/Sidebar/SidebarAssets/Calendar.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import FinanceBarChart from "./FinanceBarChart/FinanceBarChart";
import UnpaidStudents from "./UnpaidStudents/UnpaidStudents";
import Calender from "./Calendar/Calender";

const Main = () => {
  const data = [
    { name: "Jan", ThisWeek: 30, LastWeek: 50 },
    { name: "Feb", ThisWeek: 40, LastWeek: 55 },
    { name: "Mar", ThisWeek: 70, LastWeek: 60 },
    { name: "Apr", ThisWeek: 60, LastWeek: 65 },
    { name: "May", ThisWeek: 50, LastWeek: 75 },
    { name: "Jun", ThisWeek: 70, LastWeek: 85 },
    { name: "Jul", ThisWeek: 80, LastWeek: 90 },
    { name: "Aug", ThisWeek: 60, LastWeek: 75 },
    { name: "Sep", ThisWeek: 65, LastWeek: 80 },
    { name: "Oct", ThisWeek: 75, LastWeek: 85 },
    { name: "Nov", ThisWeek: 90, LastWeek: 100 },
    { name: "Dec", ThisWeek: 80, LastWeek: 70 },
  ];

  return (
    <>
      <div className="main-component">
        <div className="heading">
          <h1>Dashboard</h1>
          <div className="search">
            <img src={img} alt="" />
            <input type="text" placeholder="search here..." />
          </div>
        </div>
        <div className="overview">
          <div className="overview-items">
            <div className="overview-icons blue">
              <img src={img1} alt="" />
            </div>
            <div className="overview-rate">
              <p>students</p>
              <h1>940</h1>
            </div>
          </div>
          <div className="overview-items">
            <div className="overview-icons-orange">
              <img src={img2} alt="" />
            </div>
            <div className="overview-rate">
              <p>Teachers</p>
              <h1>540</h1>
            </div>
          </div>
          <div className="overview-items">
            <div className="overview-icons-yellow">
              <img src={img3} alt="" />
            </div>
            <div className="overview-rate">
              <p>Events</p>
              <h1>40</h1>
            </div>
          </div>
        </div>
        <div className="rechart">
          <h3>School Performance</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="LastWeek"
                stroke="#FF6363"
                strokeWidth={3}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
                fillOpacity={1}
                fill="url(#colorLastWeek)"
              />
              <Line
                type="monotone"
                dataKey="ThisWeek"
                stroke="#FFA940"
                strokeWidth={3}
                dot={false}
                fillOpacity={1}
                fill="url(#colorThisWeek)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="Events-container">
            <div className="calendar-container">
            <h3>School Calendar</h3>
              <Calender/>
            </div>
            <div className="FinanceBarChart">
              <h3>School Finance</h3>
              <FinanceBarChart/>
            </div>
        </div>
        <div className="unpaid-students-data">
          <UnpaidStudents/>
        </div>
      </div>
    </>
  );
};

export default Main;
