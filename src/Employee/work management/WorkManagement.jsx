import React, { useState } from "react";
import ProjectDropdown from "./ProjectDropdown";
import EmployeeDropdown from "./EmployeeDropdown";
import ModuleList from "./ModuleList";
import ProgressGraph from "./ProgressGraph";
import { Link } from 'react-router-dom';

const WorkManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Employee1",
      modules: [
        { name: "Module 1", completed: false, percentage: 0 },
        { name: "Module 2", completed: false, percentage: 0 },
        { name: "Module 3", completed: false, percentage: 0 },
      ],
    },
    {
      id: 2,
      name: "Employee2",
      modules: [
        { name: "Module 1", completed: false, percentage: 0 },
        { name: "Module 2", completed: false, percentage: 0 },
        { name: "Module 3", completed: false, percentage: 0 },
      ],
    },
    {
      id: 3,
      name: "Employee3",
      modules: [
        { name: "Module 1", completed: false, percentage: 0 },
        { name: "Module 2", completed: false, percentage: 0 },
        { name: "Module 3", completed: false, percentage: 0 },
      ],
    },
  ]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleEmployeeSelect = (employeeId) => {
    const employee = employees.find((emp) => emp.id === parseInt(employeeId));
    setSelectedEmployee(employee);
  };

  const handleModuleUpdate = (index, updatedModule) => {
    if (selectedEmployee) {
      const updatedModules = selectedEmployee.modules.map((module, idx) =>
        idx === index ? updatedModule : module
      );

      const updatedEmployee = {
        ...selectedEmployee,
        modules: updatedModules,
      };

      const updatedEmployees = employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      );

      setEmployees(updatedEmployees);
      setSelectedEmployee(updatedEmployee);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm"
        style={{
          position: 'fixed',
          width: '100%',
          top: '0',
          zIndex: '900',
          padding: '0.8rem 0.3rem',
          fontSize: '1.2rem',
          backgroundColor: '#003135'
        }}>
        <button className="btn btn-outline-secondary me-2" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h3 style={{ marginLeft: '11rem', color: '#ffffff' }}>Employee Management</h3>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item position-relative">
              <a className="nav-link" href="#">
                <i className="fas fa-bell" style={{ color: '#ffffff' }}></i>
                <span
                  className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
                  style={{
                    fontSize: '0.75rem',
                    width: '1.5rem',
                    height: '1.5rem',
                    lineHeight: '1rem',
                    zIndex: 1200,
                    color: '#ffffff'
                  }}
                >
                  2
                </span>
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary ms-3">Start</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`d-flex ${isSidebarOpen ? 'd-block' : 'd-none'}`}
        style={{
          width: '215px',
          minHeight: '100vh',
          marginTop: '70px',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '900',
          transition: 'transform 0.3s ease',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          backgroundColor: '#003135',
        }}
      >
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dasem">
              <i className="fas fa-tachometer-alt me-2 text-primary"></i>Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/WorkManagement">
              <i className="fas fa-briefcase me-2 text-success"></i>Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/LeaveManagment">
              <i className="fas fa-calendar-alt me-2 text-warning"></i>Leave
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/chat">
              <i className="fas fa-comments me-2 text-info"></i>Communication
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              <i className="fas fa-sign-out-alt me-2 text-danger"></i>Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div
        className="container mt-5"
        style={{
          marginLeft: isSidebarOpen ? '215px' : '0',
          transition: 'margin-left 0.3s ease',
          padding: '20px',
        }}
      >
        {/* Select Employee Box */}
        <div className="mb-4 p-4 border rounded" style={{ backgroundColor: '#f8f9fa' }}>
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
              Work Management
            </h2>
          </div>
          <EmployeeDropdown employees={employees} onSelect={handleEmployeeSelect} />
        </div>
        
        {selectedEmployee && (
          <div>
            {/* Selected Project and Progress Graph */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="p-4 border rounded" style={{ backgroundColor: '#f8f9fa' }}>
                  <ProjectDropdown onSelect={handleProjectSelect} />
                  {selectedProject && (
                    <>
                      <ModuleList
                        modules={selectedEmployee.modules}
                        onModuleUpdate={handleModuleUpdate}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="p-4 border rounded" style={{ backgroundColor: '#f8f9fa', height: '328px' }}>
                  <ProgressGraph modules={selectedEmployee.modules} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkManagement;
