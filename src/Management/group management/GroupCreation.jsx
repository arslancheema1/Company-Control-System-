import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function GroupCreation() {
    const [name, setName] = useState('');
    const [members, setMembers] = useState('');
    const [roles, setRoles] = useState('');
    const [project, setProject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const group = {
            name,
            members: members.split(',').map(member => member.trim()),
            roles: roles.split(',').map(role => role.trim()),
            project,
        };
        console.log('Group Created:', group);
        // Logic to save group or update state
        setName('');
        setMembers('');
        setRoles('');
        setProject('');
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col md={8} lg={6} className="mx-auto">
                    <Card className="shadow-lg border-0 rounded-lg">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4 text-dark">Create a New Group</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Group Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter group name" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Members (comma-separated)</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter members" 
                                        value={members} 
                                        onChange={(e) => setMembers(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Roles (comma-separated)</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter roles" 
                                        value={roles} 
                                        onChange={(e) => setRoles(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Project Association</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter project association" 
                                        value={project} 
                                        onChange={(e) => setProject(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                                <Button 
                                    type="submit" 
                                    className="w-100 btn-primary"
                                    style={{ borderRadius: '5px' }}
                                >
                                    Create Group
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default GroupCreation;
