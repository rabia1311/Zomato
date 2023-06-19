import React, { useState } from 'react';
import "../pages/signup.css";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    });

    const json = response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    
    <div className="container">
      
      <div className="form-wrapper">
      <h2 className="signup-heading">SIGN UP HERE</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="geolocation" className="form-label">
              Location
            </label>
            <input type="text" className="form-control" id="geolocation" name='geolocation' value={credentials.geolocation} onChange={onChange} />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
