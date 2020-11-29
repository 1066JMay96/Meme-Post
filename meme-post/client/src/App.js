import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from './pages/HomePage';
import AccountForm from './pages/AccountForm';
function App() {
  return (
  
    <Router>
      <div>  
        <Navbar/>
        <Switch>
          <Route exact path ={['/',"/homepage"]}>
            <Homepage/>
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
