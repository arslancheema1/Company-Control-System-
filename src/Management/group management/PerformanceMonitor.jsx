import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function PerformanceMonitor() {
    const [filter, setFilter] = useState(''); // State to manage filter input
    const groupPerformance = [
        { groupId: '101', tasksCompleted: 5, tasksPending: 2 },
        { groupId: '102', tasksCompleted: 7, tasksPending: 1 },
        { groupId: '103', tasksCompleted: 3, tasksPending: 4 },
    ];

    // Filter performance data based on user input
    const filteredData = groupPerformance.filter(group => 
        group.groupId.includes(filter)
    );

    // Calculate total tasks and performance percentage for each group
    const performanceData = filteredData.map(group => {
        const totalTasks = group.tasksCompleted + group.tasksPending;
        const performancePercentage = (group.tasksCompleted / totalTasks) * 100;
        return {
            ...group,
            performancePercentage: performancePercentage.toFixed(2) // rounded to 2 decimal places
        };
    });

    return (
        <Container className="mt-5">
            <Row>
                <Col md="6">
                    <h2 className="text-primary">Group Performance Monitor</h2>
                </Col>
                <Col md="6">
                    <Form inline className="justify-content-end">
                        <FormGroup>
                            <Label for="groupFilter" className="mr-2">Filter by Group ID:</Label>
                            <Input
                                type="text"
                                name="filter"
                                id="groupFilter"
                                placeholder="Enter Group ID"
                                value={filter}
                                onChange={e => setFilter(e.target.value)}
                                className="mr-2"
                            />
                        </FormGroup>
                        
                    </Form>
                </Col>
            </Row>
            <ResponsiveContainer width="100%" height={400} className="mt-4">
                <BarChart
                    data={performanceData}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="groupId" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="tasksCompleted" fill="#8884d8" name="Tasks Completed" />
                    <Bar dataKey="tasksPending" fill="#82ca9d" name="Tasks Pending" />
                    <Bar dataKey="performancePercentage" fill="#ffc658" name="Performance (%)" />
                </BarChart>
            </ResponsiveContainer>
            <div className="mt-4">
                <h4>Group Performance Summary</h4>
                <ul className="list-unstyled">
                    {performanceData.map((group, index) => (
                        <li key={index} className="mb-2">
                            <strong>Group {group.groupId}:</strong> {group.performancePercentage}% tasks completed
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}

export default PerformanceMonitor;
