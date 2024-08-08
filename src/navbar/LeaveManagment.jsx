import React, { useState } from 'react';
import { Modal, Button, Form, ProgressBar } from 'react-bootstrap';
import './LeaveManagment.css';
import { Link } from 'react-router-dom';

const LeaveManagment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showApplyLeaveModal, setShowApplyLeaveModal] = useState(false);
  const [showLeaveBalanceModal, setShowLeaveBalanceModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleShowApplyLeaveModal = () => setShowApplyLeaveModal(true);
  const handleCloseApplyLeaveModal = () => setShowApplyLeaveModal(false);

  const handleShowLeaveBalanceModal = () => setShowLeaveBalanceModal(true);
  const handleCloseLeaveBalanceModal = () => setShowLeaveBalanceModal(false);

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
        <div className="d-flex flex-wrap">
          <Button 
            variant="primary" 
            onClick={handleShowApplyLeaveModal} 
            className="me-2 btn-lg rounded" 
            style={{ 
              padding: '10px 20px', 
              fontSize: '1.2rem', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
              backgroundColor: '#007bff',
              border: 'none'
            }}
          >
            Apply for Leave
          </Button>
          <Button 
            variant="info" 
            onClick={handleShowLeaveBalanceModal} 
            className="btn-lg rounded" 
            style={{ 
              padding: '10px 20px', 
              fontSize: '1.2rem', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
              backgroundColor: '#17a2b8',
              border: 'none'
            }}
          >
            Leave Balance Chart
          </Button>
        </div>

        {/* Apply for Leave Modal */}
        <Modal show={showApplyLeaveModal} onHide={handleCloseApplyLeaveModal}>
          <Modal.Header closeButton>
            <Modal.Title>Apply for Leave</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formLeaveDates">
                <Form.Label>Dates</Form.Label>
                <Form.Control type="date" placeholder="Select dates" />
              </Form.Group>
              <Form.Group controlId="formLeaveReason">
                <Form.Label>Reason</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter reason for leave" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Leave Balance Modal */}
        <Modal show={showLeaveBalanceModal} onHide={handleCloseLeaveBalanceModal}>
          <Modal.Header closeButton>
            <Modal.Title>Leave Balance Chart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="leave-balance-chart">
              <h5>Total Leave: {totalLeave}</h5>
              <h5>Taken Leave: {takenLeave}</h5>
              <h5>Remaining Leave: {remainingLeave}</h5>
              <ProgressBar>
                <ProgressBar variant="success" now={(takenLeave / totalLeave) * 100} label={`${takenLeave}`} key={1} />
                <ProgressBar variant="warning" now={(remainingLeave / totalLeave) * 100} label={`${remainingLeave}`} key={2} />
              </ProgressBar>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default LeaveManagment;
