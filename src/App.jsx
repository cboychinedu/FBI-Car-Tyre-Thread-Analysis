// Importing the necessary modules 
import './Css/App.css'; 
import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';

// Rendering the App component 
class App extends Component {
  // Creating the state 
  state = {} 

  // Rendering the App component 
  render() { 
    return (
      <Fragment> 
        <BrowserRouter> 
          {/* Setting the Routs configurations */}
          <Routes> 
              <Route exact path="/" element={<Home /> } /> 
              <Route path="/dashboard" element={<Dashboard />} /> 
          </Routes>
          </BrowserRouter>
      </Fragment>
    );
  }
}

// Exporting the default App 
export default App;
