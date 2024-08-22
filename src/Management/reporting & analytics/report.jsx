import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReportGenerator from './ReportGenerator'; // Import the ReportGenerator component
import TaskCompletionChart from './TaskCompletionChart'; // Import the TaskCompletionChart component
import TasksProgressChart from './TasksProgressChart'; // Import the TasksProgressChart component

const Report = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState('generateReport'); // Default to 'generateReport'

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownChange = (component) => {
    setActiveComponent(component);
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
        <h3 style={{ marginLeft: '11rem', color: '#ffffff' }}> Manager</h3>
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
              <button className="btn btn-black ms-3"></button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`d-flex ${isSidebarOpen ? 'd-block' : 'd-none'}`} style={{ backgroundColor: '#003135', position: 'fixed', top: '70px', left: '0', width: '215px', height: 'calc(100vh - 70px)', zIndex: '900' }}>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/dashboard">
              <i className="fas fa-tachometer-alt me-2 text-primary"></i>Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/TaskManagement">
              <i className="fas fa-tasks me-2 text-success"></i>Task Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/EmployeeManagement">
              <i className="fas fa-users me-2 text-warning"></i>Employe Managment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/GroupManagement">
              <i className="fas fa-users-cog me-2 text-info"></i>Group Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/Leave">
              <i className="fas fa-calendar-alt me-2" style={{ color: '#FF5733' }}></i>Leave Management
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-light"
              to="#"
              id="reportDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fas fa-chart-pie me-2 " style={{ color: '#6a5acd' }}></i>Reporting & Analytics
            </Link>
            <ul className="dropdown-menu show" aria-labelledby="reportDropdown" style={{ backgroundColor: '#003135' }}>
              <li>
                <a
                  className="dropdown-item text-white"
                  href="#"
                  style={{ backgroundColor: '#343a40' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#495057'}
                  onMouseOut={(e) => e.target.style.backgroundColor = ''}
                  onClick={() => handleDropdownChange('generateReport')}
                >
                  Generate Report
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-white"
                  href="#"
                  style={{ backgroundColor: '#343a40' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#495057'}
                  onMouseOut={(e) => e.target.style.backgroundColor = ''}
                  onClick={() => handleDropdownChange('taskStatus')}
                >
                  Task Status
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/communication">
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

      {/* Main Content */}
      <div style={{ marginLeft: isSidebarOpen ? '215px' : '0', padding: '2rem', minHeight: '100vh', marginTop: '70px', boxSizing: 'border-box' }}>
        {activeComponent === 'generateReport' && <ReportGenerator />}
        {activeComponent === 'taskStatus' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TaskCompletionChart />
            <TasksProgressChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
