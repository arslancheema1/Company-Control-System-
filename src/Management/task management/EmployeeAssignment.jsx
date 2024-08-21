import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmployeeAssignment() {
    return (
        <div className="container mt-4">
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
            Assign Task
            </h2>
          </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="employeeSelect" className="form-label">Select Employee:</label>
                                    <select id="employeeSelect" className="form-select">
                                        <option value="employee1">Employee 1</option>
                                        <option value="employee2">Employee 2</option>
                                        <option value="team">Assign to Team</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="prioritySelect" className="form-label">Priority:</label>
                                    <select id="prioritySelect" className="form-select">
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Assign Task</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeAssignment;
