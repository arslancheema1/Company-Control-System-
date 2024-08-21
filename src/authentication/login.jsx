import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import img from "./logoo.png";


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'arslan12@gmail.com' && password === 'arslan') {
      navigate('/dasem');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white' 
    }}>
      <Container>
        <Row className='justify-content-center'>
          <Col md="8" lg="6" xl="4">
            <Card className='text-white' style={{ borderRadius: '1rem', backgroundColor: '#333' }}>
              <CardBody className='p-5'>
             
              <div className="text-center mb-4">
              <img src={img}
                style={{width: '90px'}} alt="logo" />
                </div>

                <Form onSubmit={handleLogin}>
                  <FormGroup className='mb-4'>
                    <Label for='email' className='text-white'>Email address</Label>
                    <Input 
                      type='email' 
                      id='email' 
                      placeholder='Email address' 
                      size="lg" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </FormGroup>

                  <FormGroup className='mb-4'>
                    <Label for='password' className='text-white'>Password</Label>
                    <Input 
                      type='password' 
                      id='password' 
                      placeholder='Password' 
                      size="lg" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                  </FormGroup>

                  <div className="text-center">
                    <Button type="submit" color='primary' className='px-4' size='lg'>Login</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
