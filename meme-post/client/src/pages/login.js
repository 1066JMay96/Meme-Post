import React from "react";
import { Link } from 'react-router-dom';
function LoginPage() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Enter email or Username.:<input type="text" name="email username" value={this.state.email || this .state.username} onChange={this.handleChange} />
      </label>
      <label>
          password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <li className="nav-item">
                  <Link className="nav-link" to="AccountForm">dont have an Account? Click her to create One!</Link>
                </li>
    </form>







  )
}
export default LoginPage;