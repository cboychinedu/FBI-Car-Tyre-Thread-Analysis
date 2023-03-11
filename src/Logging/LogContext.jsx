// Importing the necessary modules 
import React, { Component, createContext, Fragment } from 'react'; 

// Creating the logging context object 
const LoggingContext = createContext(); 

// Creating the class LoggingContextProvider 
class LoggingContextProvider extends Component {
    // Setting the logging state 
    state = {
        route: "", 
        xAuthToken: null, 
        userEmail: "", 
    }

    // Logging the user 
    LoggingUser = (route, xAuthToken, email, username) => {
        // Saving to database 

        // Saving to disk 
        return; 

    }

    // Rendering the LoggingContextProvider 
    render() {
        // Return 
        return (
            <Fragment> 
                <LoggingContext.Provider value={{
                    ...this.state, 
                    loggingUser: this.loggingUser
                }}>
                    {this.props.children}
                </LoggingContext.Provider>
            </Fragment>
        )
    }
}

// Exporting the LogginContextProvider
export {
    LoggingContext, 
    LoggingContextProvider
}