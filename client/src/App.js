  
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import CreateMemePage from "./pages/CreateMemePage";
import LikedMemePage from "./pages/LikedMemePage";

function App() {
  return (
      <div>
        <Navbar />
        <Router>
          <AuthProvider>
              <Switch>
                <Route path="/signup" component={Signup} />
                <PrivateRoute exact path ="/profile" component={Profile} />
                <Route path="/login" component={Login} />
                <Route path ="/forgot-password" component={ForgotPassword} />
                <Route path="/update_profile" component={UpdateProfile} />
                <Route path ="/homepage" component={HomePage} />
                <Route path ="/create" component={CreateMemePage} />
                <Route path="/liked" component={LikedMemePage} />
              </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;