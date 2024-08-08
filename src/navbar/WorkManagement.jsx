import React, { useState } from "react";
import ProjectDropdown from "./ProjectDropdown";
import EmployeeDropdown from "./EmployeeDropdown";
import ModuleList from "./ModuleList";
import ProgressGraph from "./ProgressGraph";
import { Link } from 'react-router-dom';
import "../App.css";

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
          padding: '0.8rem 0.3rem', // Adjust padding to increase height
          fontSize: '1.2rem',
          backgroundColor: '#003135' // Set navbar background color
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
                    zIndex: 1200, // Ensures it's above other elements
                    color: '#ffffff' // Set badge text color to white
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
          marginTop: '70px', // Adjust to avoid overlap with the navbar
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '900',
          transition: 'transform 0.3s ease',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          backgroundColor: '#003135', // Set sidebar background color
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
              <i className="fas fa-tachometer-alt me-2 text-success"></i>Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/LeaveManagment">
              <i className="fas fa-tachometer-alt me-2 text-warning"></i>Leave
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-light" to="/chat">
        <i className="fas fa-tachometer-alt me-2 text-info"></i>Communication
      </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-light" to="/login">
        <i className="fas fa-tachometer-alt me-2 text-danger"></i>logout
      </Link>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div
        className="container App"
        style={{
          marginTop: '90px', // Adjust this value based on the height of your navbar
          marginLeft: isSidebarOpen ? '215px' : '0',
          transition: 'margin-left 0.3s ease',
          padding: '20px', // Adjust padding to match App styling
        }}
      >
        {/* Content */}
        <h1 className="text-center">Work Management</h1>
        <div className="project-dropdown mb-3">
          <ProjectDropdown onSelect={handleProjectSelect} />
        </div>

        <div className="employee-dropdown mb-3">
          <EmployeeDropdown employees={employees} onSelect={handleEmployeeSelect} />
        </div>

        <h2 className="mt-4">Selected Project: {selectedProject}</h2>
        {selectedEmployee && (
          <>
            <h2>Employee: {selectedEmployee.name}</h2>
            <div className="module-list mb-4">
              <ModuleList
                modules={selectedEmployee.modules}
                onModuleUpdate={handleModuleUpdate}
              />
            </div>
            <div className="progress-graph">
              <ProgressGraph modules={selectedEmployee.modules} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkManagement;
