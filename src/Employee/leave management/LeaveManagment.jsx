import React, { useState } from 'react';
import { Button, Form, ProgressBar, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LeaveManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('applyLeave'); // Default section is 'applyLeave'

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleShowApplyLeave = () => setActiveSection('applyLeave');
  const handleShowLeaveBalance = () => setActiveSection('leaveBalance');

  // Dummy data for leave balance
  const totalLeave = 30;
  const takenLeave = 10;
  const remainingLeave = totalLeave - takenLeave;

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
        className="d-flex" 
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
          display: isSidebarOpen ? 'block' : 'none'
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
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-light"
              to="#"
              id="LeaveDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={(e) => e.preventDefault()} // Prevent default action
            >
              <i className="fas fa-calendar-alt me-2 text-warning"></i>Leave
            </Link>
            <ul className="dropdown-menu" aria-labelledby="LeaveDropdown" style={{ backgroundColor: '#003135' }}>
              <li>
                <a
                  className={`dropdown-item text-light ${activeSection === 'applyLeave' ? 'active' : ''}`}
                  href="#"
                  style={{ 
                    backgroundColor: '#343a40',
                
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#495057'}
                  onMouseOut={(e) => e.target.style.backgroundColor = ''}
                  onClick={handleShowApplyLeave}
                >
                  Apply leave
                </a>
              </li>
              <li>
                <a
                  className={`dropdown-item text-light ${activeSection === 'leaveBalance' ? 'active' : ''}`}
                  href="#"
                  style={{ 
                    backgroundColor: '#343a40',
                   
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#495057'}
                  onMouseOut={(e) => e.target.style.backgroundColor = ''}
                  onClick={handleShowLeaveBalance}
                >
                  Leave Balance Chart
                </a>
              </li>    
            </ul>
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

      {/* Main Content */}
      <div 
        className="leave-management" 
        style={{ 
          marginLeft: isSidebarOpen ? '215px' : '0', 
          padding: '20px', 
          paddingTop: '90px', // Additional padding to avoid overlap with navbar
          background: '#ffffff',
          transition: 'margin-left 0.3s ease'
        }}
      >    

        {activeSection === 'applyLeave' && (
          <Row className='mb-4 mt-3'>
            <Col>
              <div className="p-4 border rounded bg-light">
                <h4>Apply for Leave</h4>
                <Form>
                  <Form.Group controlId="formLeaveDates">
                    <Form.Label>Dates</Form.Label>
                    <Form.Control type="date" placeholder="Select dates" />
                  </Form.Group>
                  <Form.Group controlId="formLeaveReason">
                    <Form.Label>Reason</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter reason for leave" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-3">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        )}

        {activeSection === 'leaveBalance' && (
          <Row className='mb-4 mt-3'>
            <Col>
              <div className="p-4 border rounded bg-light">
                <h4>Leave Balance Chart</h4>
                <h5>Total Leave: {totalLeave}</h5>
                <h5>Taken Leave: {takenLeave}</h5>
                <h5>Remaining Leave: {remainingLeave}</h5>
                <ProgressBar>
                  <ProgressBar variant="success" now={(takenLeave / totalLeave) * 100} label={`${takenLeave}`} key={1} />
                  <ProgressBar variant="warning" now={(remainingLeave / totalLeave) * 100} label={`${remainingLeave}`} key={2} />
                </ProgressBar>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default LeaveManagement;
