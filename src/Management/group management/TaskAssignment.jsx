import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function TaskAssignment() {
    const [groupId, setGroupId] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleAssignTask = (e) => {
        e.preventDefault();
        const task = { groupId, description: taskDescription };
        console.log('Task Assigned:', task);
        // Logic to save task or update state
        setGroupId('');
        setTaskDescription('');
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={8} lg={6} className="mx-auto">
                    <Card className="shadow-lg border-0 rounded-lg">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4 text-dark">Assign Task to Group</h2>
                            <Form onSubmit={handleAssignTask}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Group ID</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter group ID" 
                                        value={groupId} 
                                        onChange={(e) => setGroupId(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Task Description</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter task description" 
                                        value={taskDescription} 
                                        onChange={(e) => setTaskDescription(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Button 
                                    type="submit" 
                                    className="w-100 btn-primary"
                                    style={{ borderRadius: '5px' }}
                                >
                                    Assign Task
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default TaskAssignment;
