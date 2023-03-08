// Importing the necessary modules 
import './Css/App.css'; 
import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import { AuthContext } from "./Auth/AuthContext"; 


// Setting the token if present 
let tokenValue = localStorage.getItem("x-auth-token") || null;

// Rendering the App component 
class App extends Component {
  // Getting the Auth context 
  static contextType = AuthContext; 

  // Rendering the App component 
  render() { 
    const { isLoggedIn, xAuthToken, setToken } = this.context; 

    // 
    setToken(tokenValue);  

    // If the token value, and isLoggedIn condition is true, 
    // and present, redirect the user's 
    // to the dashboard page 
    if (isLoggedIn && xAuthToken) {
      return (
        <Fragment> 
          <BrowserRouter> 
            {/* Setting the Routs configurations */}
            <Routes> 
                <Route exact path="/" element={<Dashboard />} /> 
                <Route path="/dashboard" element={<Dashboard />} /> 
                <Route path="*" element={<Dashboard />} /> 
            </Routes>
            </BrowserRouter>
        </Fragment>
      );

    }

    // If the conditions are false. 
    else {
      // Return the default non-login page 
      return (
        <Fragment> 
          <BrowserRouter> 
              {/* Setting the Routes configurations */}
              <Routes>
                  <Route exact path="/" element={<Home />} /> 
                  <Route path="*" element={<Home />} /> 
              </Routes>
          </BrowserRouter>
        </Fragment>
      )
    }
  }
}

// Exporting the default App 
export default App;
