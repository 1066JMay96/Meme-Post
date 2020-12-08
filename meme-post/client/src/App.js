import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/HomePage';
import AccountForm from './pages/AccountForm';
function App() {
  return (
  
    <Router>
      <div>  
        <Navbar/>
        <Switch>
          <Route exact path ={['/',"/homepage"]}>
            <Home/>
          </Route>
          <Route exact path ={['/AccountForm']}>
            <AccountForm/>
          </Route>
        </Switch>
      </div>
      
    </Router>

  );
}

export default App;
