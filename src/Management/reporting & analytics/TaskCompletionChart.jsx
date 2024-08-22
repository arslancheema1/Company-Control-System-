import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", tasks: 30, employees: 20 },
  { name: "Feb", tasks: 20, employees: 18 },
  { name: "Mar", tasks: 27, employees: 23 },
  { name: "Apr", tasks: 18, employees: 19 },
  { name: "May", tasks: 23, employees: 21 },
  { name: "Jun", tasks: 34, employees: 25 },
];

const TaskCompletionChart = () => {
  return (
    <div className="chart-container" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '15px', height: '250px' }}>
      <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>Task Completion & Employees</h4>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="tasks" fill="#8884d8" />
          <Bar dataKey="employees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskCompletionChart;
