import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskCreation() {
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
            New Task
            </h2>
          </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="taskDescription" className="form-label">Task Description:</label>
                                    <input 
                                        type="text" 
                                        id="taskDescription"
                                        className="form-control" 
                                        placeholder="Enter task description" 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="priority" className="form-label">Priority:</label>
                                    <select id="priority" className="form-select">
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="deadline" className="form-label">Deadline:</label>
                                    <input 
                                        type="date" 
                                        id="deadline"
                                        className="form-control" 
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Create Task</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskCreation;
