import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
import './RegistrationForm.css'

function Login() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (Username.length === 0) {
      setUsernameError(true);
      hasError = true;
    }

    if (Password.length === 0) {
      setPasswordError(true);
      hasError = true;
    }

    setError(hasError);

    if (!hasError) {
      const data = {
        username: Username,
        password: Password,
      };

      
    }
  };

  return (
    <div className="Registration">
      <Form className="form" onSubmit={handleSubmit}>
        <div>
          <Form.Group controlId="formGridlabel" id="reg-head" className="col col-sm-20">
            <h3>LOGIN</h3>
          </Form.Group>
          <br />
          
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Label className="input">Username</Form.Label>
              <Form.Control
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && Username.length <= 0  ?  (
                <Form.Label className="error">Username can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>
          <Form.Label className="input">Password</Form.Label>
          <Row className="mb-3">
            <Form.Group controlId="formBasicEmail" className="col col-sm-10">
              <Form.Control
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && Password.length <= 0 ? (
                <Form.Label className="error">Password can't be empty</Form.Label>
              ) : ''}
            </Form.Group>
          </Row>

          <center>
            <Link to="/"><button id="button" className="me-1 btn btn btn-lg">
              Submit
            </button></Link>
          </center>
        </div>
        <center><Link to='/register'>Don't have an account? Register here.</Link></center>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;