import React from "react";
import "../../styles/Navbar.css";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark meme-navbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/homepage">Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/create">Create</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/liked">Saved</a>
                </li>
            </ul>
            <ul className="navbar-nav justify-content-center mr-auto">
                <a className="navbar-brand" href="/homepage">Meme-Post
                    <img src="pictures/Trollface.png" alt="troll-face" className="d-inline-block ml-1" style={{width: "50px"}}></img>
                </a>
            </ul>
            <ul className="navbar-nav justify-content-end">
                <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Account
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/signup">Sign-Up</a>
                            <a className="dropdown-item" href="/login">Login</a>
                        </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default NavBar;