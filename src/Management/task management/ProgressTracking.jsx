import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Task 1', Completed: 80, Pending: 20 },
    { name: 'Task 2', Completed: 50, Pending: 50 },
    { name: 'Task 3', Completed: 90, Pending: 10 },
];

function ProgressTracking() {
    return (
        <div>
            <div className="d-flex justify-content-center mb-3">
            <h2 className="text-center"
              style={{
                fontSize: '2rem',
                color: '#ffffff',
                background: 'linear-gradient(to right, #007bff, #00d2ff)',
                padding: '10px 20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                fontWeight: 'bold',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                display: 'inline-block'
              }}
            >
            Progress Tracking
            </h2>
          </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Completed" fill="#8884d8" />
                    <Bar dataKey="Pending" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ProgressTracking;
