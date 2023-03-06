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
        // xAuthToken: "token-value" 
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

    // Rendering the AuthContextProvider 
    render() {
        // Return the AuthContext Provider 
        return(
            <Fragment> 
                <AuthContext.Provider value={{ ...this.state, setToken: this.setToken }} >
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
