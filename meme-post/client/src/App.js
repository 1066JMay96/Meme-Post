import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from './pages/HomePage';
function App() {
  return (
  
    <Router>
      <div>  
        <Navbar/>
        <Switch>
          <Route exact path ={['/',"/homepage"]}>
            <Homepage/>
          </Route>
        </Switch>
      </div>
      
    </Router>

  );
}

export default App;
