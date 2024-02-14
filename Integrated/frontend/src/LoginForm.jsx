import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
import './RegistrationForm.css'
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [error, setError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (username.length === 0) {
      setUsernameError(true);
      hasError = true;
    }

    if (password.length === 0) {
      setPasswordError(true);
      hasError = true;
    }

    setError(hasError);
    axios.post("http://127.0.0.1:8081/api/v1/auth/login", { email:username, password: password})
          .then((response) => {
              console.log(response);
              // SetResponse(response);
              navigate("/")
          })
          .catch((error) => {
              // Handle error here, for example:
              console.error('Error registering user:', error);
              alert("Wrong User")
              // You can also update state to display a user-friendly error message
          });
      console.log('Form submitted:', { username, password });
    // if (!hasError) {
    //   // Perform authentication logic here and set user role
    //   const data = {
    //     username,
    //     password,
    //     role,
    //   };
    //   if (role === 'user') {
    //     navigate('/');
    //   } else if (role === 'admin') {
    //     navigate('/adminhome');
    //   }

      // Redirect based on user type
      // navigate('/');
    
  };

  return (
    <div className="Registration">
      
      <Form className="form" onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="reg-head" className="col col-sm-20">
            <h3>LOGIN</h3>
          </Form.Group>
          <Row className="mb-3">
            <Form.Group controlId="formBasicUsername" className="col col-sm-10">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && username.length <= 0 ? (
                <Form.Label className="error">Username can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="formBasicPassword" className="col col-sm-10">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && password.length <= 0 ? (
                <Form.Label className="error">Password can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>

          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Role
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="User"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
              />
              <Form.Check
                type="radio"
                label="Admin"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
              />
            </Col>
          </Form.Group> */}

          <center>
            <button className="me-1 btn btn btn-lg" style={{ backgroundColor: "darksalmon" }}>
              Submit
            </button>
          </center>
        </div>
        <center>Don't have an account? <Link to='/register'>Register here.</Link></center>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;