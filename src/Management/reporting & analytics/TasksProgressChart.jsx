import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Completed", value: 65 },
  { name: "In Progress", value: 20 },
  { name: "Pending", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const TasksProgressChart = () => {
  return (
    <div className="chart-container" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', height: '200px', width: '100%' }}>
      <h4 style={{ fontSize: '18px', marginBottom: '10px' }}>Tasks Progress</h4> {/* Adjusted font size here */}
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius="72%" // Adjusted radius to fit the container better
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TasksProgressChart;
