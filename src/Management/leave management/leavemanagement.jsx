import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Container, Row, Col, Table, Modal, Form } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LeaveManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [view, setView] = useState('review');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleSelectApplication = (application) => {
    setSelectedApplication(application);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  // Example Data
  const pendingApplications = [
    { id: 1, name: 'M-Saim', leaveType: 'Sick Leave', startDate: '2024-08-15', endDate: '2024-08-18', remainingLeaves: 10 },
    { id: 2, name: 'Arslan', leaveType: 'Vacation', startDate: '2024-09-01', endDate: '2024-09-10', remainingLeaves: 5 },
  ];

  const leaveHistory = [
    { year: '2024', taken: 12 },
    { year: '2023', taken: 15 },
    { year: '2022', taken: 10 },
  ];

  const leaveData = {
    labels: leaveHistory.map(entry => entry.year),
    datasets: [
      {
        label: 'Leaves Taken',
        data: leaveHistory.map(entry => entry.taken),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light shadow-sm"
        style={{
          position: 'fixed',
          width: '100%',
          top: '0',
          zIndex: '900',
          padding: '0.8rem 0.3rem',
          fontSize: '1.2rem',
          backgroundColor: '#003135',
        }}
      >
        <button className="btn btn-outline-secondary me-2" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h3 style={{ marginLeft: '11rem', color: '#ffffff' }}>Manager</h3>
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
                    color: '#ffffff',
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
      <div
  className={`d-flex ${isSidebarOpen ? 'd-block' : 'd-none'}`}
  style={{
    backgroundColor: '#003135',
    position: 'fixed',
    top: '70px',
    left: '0',
    width: '215px',
    height: '100vh',
    zIndex: '900',
  }}
>
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
    <li className="nav-item dropdown">
  <Link
    className="nav-link dropdown-toggle text-light"
    to="#"
    id="leaveManagementDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <i className="fas fa-calendar-alt me-2" style={{ color: '#FF5733' }}></i>Leave Management
  </Link>
  <ul className="dropdown-menu " 
  aria-labelledby="leaveManagementDropdown" 
  style={{ backgroundColor: '#003135' }}
  >
    <li>
      <Link
        className="dropdown-item text-light"
        to="#"
        onClick={() => handleViewChange('review')}
        style={{ backgroundColor: '#343a40' }} // Adjust background color
        onMouseOver={(e) => e.target.style.backgroundColor = '#495057'} // Hover color
        onMouseOut={(e) => e.target.style.backgroundColor = ''} // Default background color
      >
        Leave Application Review
      </Link>
    </li>
    <li>
      <Link
        className="dropdown-item text-light"
        to="#"
        onClick={() => handleViewChange('analytics')}
        style={{ backgroundColor: '#343a40' }} // Adjust background color
        onMouseOver={(e) => e.target.style.backgroundColor = '#495057'} // Hover color
        onMouseOut={(e) => e.target.style.backgroundColor = ''} // Default background color
      >
        Leave Analytics
      </Link>
    </li>
  </ul>
</li>

    <li className="nav-item">
      <Link className="nav-link text-light" to="/report">
        <i className="fas fa-chart-pie me-2" style={{ color: '#6a5acd' }}></i>Reporting & Analytics
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
      <Container style={{ marginLeft: isSidebarOpen ? '215px' : '0', marginTop: '75px' }}>
        <Row>
          <Col>
            {view === 'review' && (
              <div className="leave-review">
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
             Pending Leaves
            </h2>
          </div>
          <Table striped bordered hover className="bg-light">
  <thead>
    <tr>
      <th>Name</th>
      <th>Leave Type</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Remaining Leaves</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {pendingApplications.map((app) => (
      <tr key={app.id}>
        <td>{app.name}</td>
        <td>{app.leaveType}</td>
        <td>{app.startDate}</td>
        <td>{app.endDate}</td>
        <td>{app.remainingLeaves}</td>
        <td>
          <Button
            variant="success"
            onClick={() => handleSelectApplication(app)}
            className="mx-1"
          >
            Approve
          </Button>
          <Button
            variant="danger"
            onClick={() => handleSelectApplication(app)}
            className="mx-1"
          >
            Reject
          </Button>
          <Button
            variant="warning"
            onClick={() => handleSelectApplication(app)}
            className="mx-1"
          >
            Request Info
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>


              </div>
            )}
           {view === 'analytics' && (
  <div className="leave-analytics">
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
       Leave Analytics
      </h2>
    </div>
    <div style={{ width: '50%', margin: '0 auto' }}> {/* Adjust the width here */}
      <Bar data={leaveData} options={{
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += context.parsed.y;
                }
                return label;
              }
            }
          }
        }
      }} />
    </div>
  </div>
)}

          </Col>
        </Row>

        {/* Modal for additional actions */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Leave Application Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedApplication && (
              <div>
                <p>
                  <strong>Name:</strong> {selectedApplication.name}
                </p>
                <p>
                  <strong>Leave Type:</strong> {selectedApplication.leaveType}
                </p>
                <p>
                  <strong>Start Date:</strong> {selectedApplication.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {selectedApplication.endDate}
                </p>
                <p>
                  <strong>Remaining Leaves:</strong> {selectedApplication.remainingLeaves}
                </p>
                <Form.Group controlId="additionalInfo">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default LeaveManagement;
