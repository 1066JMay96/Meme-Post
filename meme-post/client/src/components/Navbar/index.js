import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function Navbar() {
  return (
    <div className="row">

          <div className="col-lg-12">
            <nav className="navbar navbar-light bg-light  web-nav">
              <ul className="navbar-links">
                
                <li className="nav-item">
                
                  <Link className="nav-link " href="memes">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="create">Create Meme</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="liked">Liked Meme</Link>
                </li>
              <h1>Meme Post</h1>
                  <img src="/images/Trollface.png"/>
                <li className="nav-item">
                  <Link className="nav-link" href="users">Meme Creators</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="./pages/AccountForm">Create Account</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
  )
}
export default Navbar;