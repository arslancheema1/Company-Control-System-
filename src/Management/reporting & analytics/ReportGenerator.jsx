import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const ReportGenerator = () => {
  const [timeFrame, setTimeFrame] = useState('Weekly');
  const [department, setDepartment] = useState('All');
  const [kpi, setKpi] = useState('Task Completion');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Report Generated with:', { timeFrame, department, kpi });
  };

  return (
    <Container fluid className="p-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm border-0 rounded-lg" style={{ background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)' }}>
            <Card.Body className="p-4">
              <h2 className="text-center mb-4" style={{ color: '#333' }}>Generate Report</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label style={{ fontWeight: '600' }}>Time Frame</Form.Label>
                  <Form.Control 
                    as="select" 
                    value={timeFrame} 
                    onChange={(e) => setTimeFrame(e.target.value)} 
                    required
                    style={{ borderRadius: '8px', padding: '12px', borderColor: '#ced4da' }}
                  >
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                  </Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label style={{ fontWeight: '600' }}>Department</Form.Label>
                  <Form.Control 
                    as="select" 
                    value={department} 
                    onChange={(e) => setDepartment(e.target.value)} 
                    required
                    style={{ borderRadius: '8px', padding: '12px', borderColor: '#ced4da' }}
                  >
                    <option>All</option>
                    <option>Sales</option>
                    <option>HR</option>
                    <option>Engineering</option>
                  </Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label style={{ fontWeight: '600' }}>KPI</Form.Label>
                  <Form.Control 
                    as="select" 
                    value={kpi} 
                    onChange={(e) => setKpi(e.target.value)} 
                    required
                    style={{ borderRadius: '8px', padding: '12px', borderColor: '#ced4da' }}
                  >
                    <option>Task Completion</option>
                    <option>Employee Performance</option>
                    <option>Project Progress</option>
                  </Form.Control>
                </Form.Group>

                <Button 
                  type="submit" 
                  className="w-100" 
                  style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: '#fff', borderRadius: '8px', padding: '12px' }}
                >
                  Generate Report
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReportGenerator;
