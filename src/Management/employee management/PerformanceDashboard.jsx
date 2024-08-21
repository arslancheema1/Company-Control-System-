import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from 'recharts';
import { Button } from 'react-bootstrap';

const PerformanceDashboard = ({ employees, deleteEmployee }) => {
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);

  const handleSelectChange = (e) => {
    const selectedIndex = e.target.value;
    setSelectedEmployeeIndex(selectedIndex);
  };

  const selectedEmployee = selectedEmployeeIndex !== null ? employees[selectedEmployeeIndex] : null;

  const chartData = selectedEmployee
    ? [
        {
          name: selectedEmployee.name,
          performance: parseFloat(selectedEmployee.performance),
          attendance: parseFloat(selectedEmployee.attendance),
          leaveBalance: parseFloat(selectedEmployee.leaves),
          tasksCompleted: parseFloat(selectedEmployee.tasks),
        },
      ]
    : [];

  return (
    <div>
  <h2 className="">
  Performance Dashboard
</h2>




      
      {/* Dropdown Menu for Employee Selection */}
      <select onChange={handleSelectChange} value={selectedEmployeeIndex || ''}>
        <option value="" disabled>Select an Employee</option>
        {employees.map((employee, index) => (
          <option key={index} value={index}>
            {employee.name}
          </option>
        ))}
      </select>

      {/* BarChart to Display Selected Employee Data */}
      {selectedEmployee && (
        <BarChart width={600} height={300} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" />
          <Bar dataKey="performance" fill="#8884d8" />
          <Bar dataKey="attendance" fill="#82ca9d" />
          <Bar dataKey="leaveBalance" fill="#ffc658" />
          <Bar dataKey="tasksCompleted" fill="#d84b6b" />
        </BarChart>
      )}

      {/* List of Employees with Delete Option */}
      <ul style={{ marginTop: '20px' }}>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} - Performance: {parseFloat(employee.performance || 0).toFixed(2)}%, 
            Attendance: {parseFloat(employee.attendance || 0).toFixed(2)}%, 
            Tasks: {parseFloat(employee.tasks || 0).toFixed(0)}
            <Button variant="danger" onClick={() => deleteEmployee(index)} className="ms-2">Delete</Button>
              
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceDashboard;
