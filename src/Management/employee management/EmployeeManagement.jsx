import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PerformanceDashboard from './PerformanceDashboard';
import { Button, Form, Table, Container, Row, Col,Card } from 'react-bootstrap';

const EmployeeManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [employeeData, setEmployeeData] = useState({
    name: '',
    role: '',
    startingDate: '',
    endingDate: '',
    attendance: '',
    leaves: '',
    tasks: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [showAddForm, setShowAddForm] = useState(true); // State to toggle forms

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const addEmployee = () => {
    if (editingIndex === null) {
      setEmployees([...employees, employeeData]);
    } else {
      const updatedEmployees = employees.map((employee, index) =>
        index === editingIndex ? employeeData : employee
      );
      setEmployees(updatedEmployees);
      setEditingIndex(null);
    }
    setEmployeeData({
      name: '',
      role: '',
      startingDate: '',
      endingDate: '',
      attendance: '',
      leaves: '',
      tasks: '',
    });
  };

  const editEmployee = (index) => {
    setEmployeeData(employees[index]);
    setEditingIndex(index);
    setShowAddForm(true); // Show the form when editing
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    if (editingIndex === index) {
      setEditingIndex(null);
      setEmployeeData({
        name: '',
        role: '',
        startingDate: '',
        endingDate: '',
        attendance: '',
        leaves: '',
        tasks: '',
      });
    }
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
              <button className="btn btn-black ms-3"></button> {/* Change this to a valid class or remove */}
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
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-light"
              to="#"
              id="EmployeeManagementDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-users me-2 text-warning" style={{ color: '#FF5733' }}></i>Employe Managment
            </Link>
            <ul className="dropdown-menu" aria-labelledby="EmployeeManagementDropdown" style={{ backgroundColor: '#003135' }}>
              <li>
                <Link
                  className="dropdown-item text-light"
                  to="#"
                  style={{ backgroundColor: '#343a40' }} // Adjust background color
                  onMouseOver={(e) => e.target.style.backgroundColor = '#495057'} // Hover color
                  onMouseOut={(e) => e.target.style.backgroundColor = ''} // Default background color
                  onClick={() => setShowAddForm(true)} // Show Add Employee Form
                >
                  Add Employee
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-light"
                  to="#"
                  style={{ backgroundColor: '#343a40' }} // Adjust background color
                  onMouseOver={(e) => e.target.style.backgroundColor = '#495057'} // Hover color
                  onMouseOut={(e) => e.target.style.backgroundColor = ''} // Default background color
                  onClick={() => setShowAddForm(false)} // Show View Employee Form
                >
                  View Employee
                </Link>
              </li>
            </ul>
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
      <Container style={{ marginLeft: isSidebarOpen ? '215px' : '0', paddingTop: '90px' }}>
      
        <div className="d-flex justify-content-center mb-4">
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
            Employee Management
          </h2>
        </div>
        <Row>
          <Col md={12}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                {showAddForm ? (
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="name" 
                            placeholder="Enter employee name" 
                            value={employeeData.name}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Role</Form.Label>
                          <Form.Control 
                            type="text" 
                            name="role" 
                            placeholder="Enter role" 
                            value={employeeData.role}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Starting Date</Form.Label>
                          <Form.Control 
                            type="date" 
                            name="startingDate" 
                            value={employeeData.startingDate}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Ending Date</Form.Label>
                          <Form.Control 
                            type="date" 
                            name="endingDate" 
                            value={employeeData.endingDate}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="text-center">
                        <Button 
                          variant="primary" 
                          onClick={addEmployee}
                        >
                          {editingIndex === null ? 'Add Employee' : 'Update Employee'}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                ) : (
                  <>
                    <Table striped bordered hover className="mt-4">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Role</th>
                          <th>Starting Date</th>
                          <th>Ending Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((employee, index) => (
                          <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.role}</td>
                            <td>{employee.startingDate}</td>
                            <td>{employee.endingDate}</td>
                           
                            <td>
                              <Button variant="warning" onClick={() => editEmployee(index)}>Edit</Button>
                              <Button variant="danger" onClick={() => deleteEmployee(index)} className="ms-2">Delete</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>

                    <PerformanceDashboard employees={employees} deleteEmployee={deleteEmployee} />
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeeManagement;
