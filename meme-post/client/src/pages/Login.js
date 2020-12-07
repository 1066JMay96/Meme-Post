import React, { useState} from "react";
import {useHistory} from 'react-router-dom'
import { Container, Row, Col  } from "react-bootstrap";
import {Link} from 'react-router-dom';
import API from "../utils/API";


const Login =() => {
  const [formState, setFormState] = useState({email: "", password: ""});

  const history = useHistory()
  const handleChange =(event) =>{
    // console.log(event.target, "TEST");
    const {name,value}=event.target;
    setFormState ({
      ...formState, 
      [name]: value
    })

  }
  const  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event, "COOL")
    
    API.postlogin(
      {email: formState.email,
         password: formState.password
      }
    ).then(res => {
      console.log(res);
      history.push("/homepage")
      
    })
  }

    return (
        <div>
        <Container fluid>
          <Col xs={12} md={6}>
          <form className="login" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="white" htmlFor ="exampleInputEmail1">Email Address</label>
                <input name="email"  onChange={handleChange} className="form-control"  value={formState.email} placeholder="Email"/>
              </div>
              <div className="form-group">
                <label className="white" htmlFor ="exampleInputPassword1">Password</label>
                <input name="password" type ="password" onChange={handleChange} className="form-control"  value={formState.password} placeholder="Password"/>
              </div>
              {/* <div className="form-group">
                <label className="white" htmlFor ="exampleInputPassword1">Username</label>
                <input name="username" onChange={handleChange} className="form-control"  value={formState.username} placeholder="Username"/>
              </div> */}
              <button type="submit" className="btn btn-info white">Login</button>
            </form>
            <p>
              Or Signup
              <Link className="nav-link" to='/signup'>here</Link>
            </p>
          </Col>
        </Container>
      </div>
    );
}

export default Login;