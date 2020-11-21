import React from 'react';
import { Link } from 'react-router-dom';
function Offlinenav() {
return (
  <nav>
  <Link className="navbar-brand" to="/" id="logo">William May</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    {/* Collect the nav links, forms, and other content for toggling */}
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
    
  </nav>
)
}
export default Offlinenav;