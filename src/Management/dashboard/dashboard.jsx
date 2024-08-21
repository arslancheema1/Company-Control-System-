import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
      <div className={`d-flex ${isSidebarOpen ? 'd-block' : 'd-none'}`} style={{ backgroundColor: '#003135', position: 'fixed', top: '70px', left: '0', width: '215px', height: '100vh', zIndex: '900' }}>
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
          <li className="nav-item">
            <Link className="nav-link text-light" to="/report">
              <i className="fas fa-chart-pie me-2 "style={{ color: '#6a5acd'}}></i>Reporting & Analytics
            </Link>
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
      <div className="container" style={{ marginTop: '90px', marginLeft: isSidebarOpen ? '215px' : '0', transition: 'margin-left 0.3s ease' }}>
        {/* Two Sections in a Row */}
        <div className="row mb-4">
          {/* KPI Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-chart-line me-2 text-primary"></i>Overall Project Progress</h5>
                <div className="progress" style={{ height: '30px', borderRadius: '15px' }}>
                  <div className="progress-bar bg-success" style={{ width: '70%' }}>70% Complete</div>
                </div>
              </div>
            </div>
          </div>

          {/* Task Completion Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-tasks me-2 text-primary"></i>Today's Task Completion Rates</h5>
                <ul className="list-unstyled" style={{ paddingLeft: '1rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <i className="fas fa-check-circle text-success me-2"></i>Department A: 80% tasks completed.
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <i className="fas fa-check-circle text-success me-2"></i>Department B: 65% tasks completed.
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-success me-2"></i>Department C: 90% tasks completed.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts and Announcements */}
        <div className="row">
          {/* Alerts Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-exclamation-circle me-2 text-warning"></i>Critical Alerts</h5>
                <ul className="list-unstyled" style={{ paddingLeft: '1rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <i className="fas fa-exclamation-triangle text-danger me-2"></i>Project deadline approaching.
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <i className="fas fa-exclamation-triangle text-danger me-2"></i>Employee performance needs improvement.
                  </li>
                  <li>
                    <i className="fas fa-exclamation-triangle text-danger me-2"></i>Pending approval for leave requests.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Announcements Section */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-bullhorn me-2 text-info"></i>Announcements</h5>
                <ul className="list-unstyled" style={{ paddingLeft: '1rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <i className="fas fa-bullhorn text-dark me-2"></i>Team meeting scheduled for Friday.
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <i className="fas fa-bullhorn text-dark me-2"></i>New project kick-off next Monday.
                  </li>
                  <li>
                    <i className="fas fa-bullhorn text-dark me-2"></i>Performance review session next week.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
