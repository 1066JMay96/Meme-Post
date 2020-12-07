import React, { useState} from "react";
import { Container, Row, Col  } from "react-bootstrap";
import {Link} from 'react-router-dom';
import API from "../utils/API";


const Signup =() => {


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
              <button type="submit" className="btn btn-info white">Sign-Up</button>
            </form>
            <p>
              Or Login
              <Link className="nav-link" to='/login'>here</Link>
            </p>
          </Col>
        </Container>
      </div>
    );
}

export default Signup;