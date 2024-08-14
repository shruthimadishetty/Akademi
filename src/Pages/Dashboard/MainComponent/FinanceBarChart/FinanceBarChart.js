import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Mon', ThisWeek: 85, LastWeek: 65,
  },
  {
    name: 'Tue', ThisWeek: 55, LastWeek: 45,
  },
  {
    name: 'Wed', ThisWeek: 60, LastWeek: 50,
  },
  {
    name: 'Thu', ThisWeek: 40, LastWeek: 55,
  },
  {
    name: 'Fri', ThisWeek: 50, LastWeek: 20,
  },
  {
    name: 'Sat', ThisWeek: 80, LastWeek: 75,
  },
  {
    name: 'Sun', ThisWeek: 70, LastWeek: 60,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const income = payload[0].value;
    const percentage = Math.round((income / 100) * 100); // Adjust percentage as needed
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#6358E1', color: '#fff', padding: '10px', borderRadius: '5px' }}>
        <p className="label">{`${percentage}%`}</p>
        <p className="intro">{`${income} Income`}</p>
      </div>
    );
  }

  return null;
};

const FinanceBarChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="right" />
          <Bar dataKey="ThisWeek" fill="#FFB800" radius={[10, 10, 0, 0]} />
          <Bar dataKey="LastWeek" fill="#FF5C5C" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
        <div style={{ marginRight: '20px' }}>
          <span style={{ backgroundColor: '#FFB800', borderRadius: '50%', display: 'inline-block', width: '10px', height: '10px', marginRight: '5px' }}></span>
          <span>This Week</span>
          <p>1.245</p>
        </div>
        <div>
          <span style={{ backgroundColor: '#FF5C5C', borderRadius: '50%', display: 'inline-block', width: '10px', height: '10px', marginRight: '5px' }}></span>
          <span>Last Week</span>
          <p>1.356</p>
        </div>
      </div> */}
    </div>
  );
};

export default FinanceBarChart;
