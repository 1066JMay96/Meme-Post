  
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
  
    <Router>
      <div>  
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      
    </Router>

  );
}

export default App;