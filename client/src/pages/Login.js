import React, { useState} from "react";
import { Container, Row, Col  } from "react-bootstrap";
import {Link} from 'react-router-dom';
import API from "../utils/API";


const Login =() => {


    return (
        <div>
        <Container fluid>
          <Col xs={12} md={6}>
          <form className="login" >
              <div className="form-group">
                <label className="white" htmlFor ="exampleInputEmail1">Email Address</label>
                <input name="email"   className="form-control"  placeholder="Email"/>
              </div>
              <div className="form-group">
                <label className="white" htmlFor ="exampleInputPassword1">Password</label>
                <input name="password" type ="password"  className="form-control"  placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-info white">Login</button>
            </form>
            <p>
              Or Sign Up
              <Link className="nav-link" to='/signup'>here</Link>
            </p>
          </Col>
        </Container>
      </div>
    );
}

export default Login;