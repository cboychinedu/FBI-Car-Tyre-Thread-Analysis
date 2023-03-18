// Importing the necessary modules
import './Css/App.css';
import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import ErrorPage from './Component/Error404';
import History from './Component/History';
import Register from './Component/Register';
import { AuthContext } from "./Auth/AuthContext";

// Setting the token if present
let tokenValue = localStorage.getItem("x-auth-token") || null;

// Rendering the App component
class App extends Component {
  // Getting the Auth context
  static contextType = AuthContext;

  // Logging
  LoggingUsers = (component, route) => {
    // Getting the date
    let date = Date().split("GMT")[0].trimEnd();

    // Setting up some data
    let data = JSON.stringify({
      route: route,
      date: date,
    })

    // Setting the LogUserRoute
    this.context.LogUserRoutes(data)

    // Returning the component
    return component
  }

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
                <Route exact path="/" element={<Dashboard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/history" element={<History /> } /> 
                <Route path="/login" element={<Dashboard /> } />
                <Route path="*" exact={true} element={<ErrorPage />} />
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
                  <Route path="/login" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" exact={true} element={<ErrorPage />} />
              </Routes>
          </BrowserRouter>
        </Fragment>
      )
    }
  }
}

// Exporting the default App
export default App;
