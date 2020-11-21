import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-light bg-light justify-content-center web-nav">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <Link className="nav-link " href="memes">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="create">Create Meme</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="liked">Liked Meme</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="users">Meme Creators</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
  )
}
export default Navbar;