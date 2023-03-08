// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import { AuthContext } from "../Auth/AuthContext"; 
import Home from './Home'; 
import withRouter from './WithRouter'; 

// Creating a class component 
class Logout extends Component {
    // Getting the Auth context 
    static contextType = AuthContext; 

    // Rendering 
    render() {
        // Clearing the local storage 
        localStorage.clear(); 
        
        // Redirect the user 
        const { removeToken, isLoggedIn, xAuthToken } = this.context; 
        isLoggedIn = false; 
        xAuthToken = null;  

        // this.props.router.navigate('/home'); 
        window.location.reload(); 

        // Return the home page 
        return (
            <Fragment>
            </Fragment> 
        )
    }
}

// Exporting the Logout route 
export default withRouter(Logout); 