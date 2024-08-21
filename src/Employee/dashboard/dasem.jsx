import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dasem = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
   
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
        <i className="fas fa-sign-out-alt me-2 text-danger"></i>logout
      </Link>
    </li>
  </ul>
</div>

      <div
        className="container "
        style={{
            marginTop: '90px', 
            marginLeft: isSidebarOpen ? '215px' : '0',
            transition: 'margin-left 0.3s ease',
          }}
      >
       
        <div className="d-flex flex-column ">
         
<div className="row mb-4">
  <div className="col-md-6 mb-4">
    <div
      className="card border-0 shadow-lg"
      style={{
        borderRadius: '15px',
        background: '#ffffff',
      }}
    >
      <div className="card-body">
        <h5 className="card-title mb-4 d-flex align-items-center">
          <i className="fas fa-chart-line me-2 text-primary" style={{ fontSize: '1.2rem' }}></i>
          Project Progress
        </h5>
        <div className="progress" style={{ height: '30px', borderRadius: '15px' }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: '70%', borderRadius: '15px' }}
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            70% Complete
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="col-md-6 mb-4">
    <div
      className="card border-0 shadow-lg"
      style={{ borderRadius: '15px', background: '#ffffff' }}
    >
      <div className="card-body">
        <h5 className="card-title mb-4 d-flex align-items-center">
          <i className="fas fa-clock me-2 text-warning" style={{ fontSize: '1.2rem' }}></i>
          Today's Spent Time
        </h5>
        <p className="card-text" style={{ fontSize: '1.1rem' }}>
          You have spent <span className="fw-bold text-primary">5 hours</span> today.
        </p>
      </div>
    </div>
  </div>
</div>

         
          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                className="card border-0 shadow-lg"
                style={{ borderRadius: '15px', background: '#ffffff' }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-4 d-flex align-items-center">
                    <i className="fas fa-star me-2 text-warning" style={{ fontSize: '1.2rem' }}></i>
                    Management Reviews
                  </h5>
                  <div className="review-list">
                    <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                      <img
                        src="https://www.w3schools.com/w3images/avatar2.png"
                        alt="Manager"
                        className="rounded-circle me-3"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                      <div>
                        <p className="mb-1">
                          <strong>Manager:</strong> "Great job on the latest project!"
                        </p>
                        <p className="mb-0 text-muted">
                          <small>2 hours ago</small>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://www.w3schools.com/w3images/avatar6.png"
                        alt="Team Lead"
                        className="rounded-circle me-3"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                      <div>
                        <p className="mb-1">
                          <strong>Team Lead:</strong> "Keep up the excellent work."
                        </p>
                        <p className="mb-0 text-muted">
                          <small>1 day ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div
                className="card border-0 shadow-lg"
                style={{ borderRadius: '15px', background: '#ffffff' }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-4 d-flex align-items-center">
                    <i className="fas fa-bullhorn me-2 text-danger" style={{ fontSize: '1.2rem' }}></i>
                    Announcements
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center">
                      <i className="fas fa-calendar-check me-2 text-success" style={{ fontSize: '1.2rem' }}></i>
                      <span>Team meeting scheduled for Friday.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-rocket me-2 text-primary" style={{ fontSize: '1.2rem' }}></i>
                      <span>New project kick-off next Monday.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasem;
