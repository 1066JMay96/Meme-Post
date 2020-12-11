  
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"
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
          <AuthProvider>
          <Router>
            <Navbar />
                <Route exact path ="/" component={HomePage} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path ="/profile" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route exact path ="/forgot-password" component={ForgotPassword} />
                <Route exact path="/update_profile" component={UpdateProfile} />
                <Route exact path ="/homepage" component={HomePage} />
                <Route exact path ="/create" component={CreateMemePage} />
                <Route exact path="/liked" component={LikedMemePage} />
            </Router>
          </AuthProvider>
      </div>
  );
}

export default App;