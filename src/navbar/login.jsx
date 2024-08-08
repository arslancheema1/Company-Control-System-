import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'arslan12@gmail.com' && password === 'arslan') {
      navigate('/dasem');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-2 mb-0">Email</p>
          </div>
          <MDBInput 
            wrapperClass='mb-4' 
            label='' 
            id='formControlLg' 
            type='email' 
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-2 mb-0">Password</p>
          </div>
          <MDBInput 
            wrapperClass='mb-4' 
            label='' 
            id='formControlLg' 
            type='password' 
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mb-0">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleLogin}>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link className="link-danger" to="/signup">Register</Link></p>
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
};

export default Login;
