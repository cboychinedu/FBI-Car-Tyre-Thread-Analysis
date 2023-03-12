// Importing the necessary modules
import React, { Component, createContext, Fragment } from 'react';

// Creating the the AuthContext Object
const AuthContext = createContext();

// Creating the class AuthContextProvider
class AuthContextProvider extends Component {
    // Setting the Auth state
    state = {
        isLoggedIn: false,
        xAuthToken: null,
        route: "",
        userEmail: "",
        imageName: "",
        imagePath: "",
        analysisResult: "",
        ipAddress: "",
        // xAuthToken: "token-value"
    }

    // Creating a function for setting the useremail
    setUserEmail = (email) => {
      //
      this.setState({
        userEmail: email,
      })
    }

    // Creating a functon for loging out the user
    removeToken = () => {
        // Changing the state
        this.setState({
            isLoggedIn: false,
            xAuthToken: null,
        })
    }

    // Creating a function for changing the state
    setToken = (xTokenValue) => {
        // Setting the state if the user's token
        // was validated
        this.setState({
            isLoggedIn: true,
            xAuthToken: xTokenValue,
        })

    }

    // Creating a function for logging the users for
    // each visited route
    /**
     * The user data would always be sent to the backend
     * server, for every trigger.
     * and the ip, route, and user's email who performed the analysis
     * would be stored, along side the image exact path, for further
     * references.
     */
    LogUserRoute = (data) => {
      // Using fetch request
      fetch('http://localhost:3001/logging', {
        method: 'POST',
        body: data,
        headers: {
          'Context-type': 'application/json; charset=UTF-8',
        }
      })
    }

    // Rendering the AuthContextProvider
    render() {
        // Return the AuthContext Provider
        return(
            <Fragment>
                <AuthContext.Provider value={
                    {
                        ...this.state,
                        setToken: this.setToken,
                        removeToken: this.removeToken,
                        setUserEmail: this.setUserEmail,
                        LogUserRoutes: this.LogUserRoute
                    }} >

                    { this.props.children }
                </AuthContext.Provider>
            </Fragment>
        )
    }
}

// Exporting the AuthContext, and the AuthContextProvider
export {
    AuthContext,
    AuthContextProvider
}
