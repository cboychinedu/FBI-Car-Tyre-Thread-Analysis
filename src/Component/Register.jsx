// Importing the necessary modules
import React, { Component, Fragment } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { sweetAlert } from './SweetAlert';
import { Link } from 'react-router-dom';
import Footer from './Footer'; 
import fbiSeal from '../Images/fbi.png'; 
import withRouter from './WithRouter';
import '../Css/App.css'; 

// Creating the class component 
class Register extends Component {
    // Creating the state 
    state = {
        message: "",
        display: ""
    }

    // Creating a form for handling the forms when submitted 
    handleSubmit = (event) => {
        // Prevent default submission 
        event.preventDefault(); 

        // Getting the users data 
        let firstname = event.target[0].value; 
        let lastname = event.target[1].value; 
        let emailAddress = event.target[2].value; 
        let password = event.target[3].value; 

        // Checking if the data is valid and creating the form 
        // and sending it to the server. 
        if (firstname === '') { 
            // Setting the state as "To fill all the fields" 
            this.setState({
                message: 'Please fill in your firstname ...', 
                display: "grid", 
            });

            // Displaying the sweet alert 
            sweetAlert('info', 'Firstname required', 'Please fill in your firstname'); 
            return; 
        } 

        else if ( lastname === '' ) {
            // Setting the state as "To fill all the fields" 
            this.setState({
                message: 'Please fill in your lastname ...', 
                display: "grid", 
            });

            // Displaying the sweet alert 
            sweetAlert('info', 'Lastname required', 'Please fill in your lastname'); 
            return; 
        }

        else if ( emailAddress === '' ) {
            // Setting the state as "To fill all the fields" 
            this.setState({
                message: 'Please fill in your email ...', 
                display: "grid", 
            });

            // Displaying the sweet alert 
            sweetAlert('info', 'Email address required', 'Please fill in your email');
            return; 
        }

        else if ( password === '' ) {
            // Setting the state as "To fill all the fields" 
            this.setState({
                message: 'Please fill in your password ...', 
                display: "grid", 
            });

            // Displaying the sweet alert 
            sweetAlert('info', 'Password required', 'Please fill in your password'); 
            return; 
        }

        // Else 
        else {
            // Setting the state to empty 
            this.setState({
                message: '', 
                display: "none", 
            });

            // Sending the data to the server. 
            let data = JSON.stringify({
                firstname: firstname, 
                lastname: lastname, 
                email: emailAddress, 
                password: password, 
            })

            // Using Fetch request 
            fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: data
            })
            // Convert the response data into a json object 
            .then(response => response.json())
            .then(data => {
                // Checking if the user was registered 
                if (data.status === "user_registered") {
                    // Execute the block of code below 
                    Swal.fire({
                        title: "User Already Registered...", 
                        text: data.message, 
                        icon: "info", 
                        confirmButtonText: "Click Here To Login...", 
                    }) 
                    .then((result) => {
                        if (result.isConfirmed) {
                            // Setting the timeout for 3seconds, and then 
                            // navigate the user to the login route. 
                            setTimeout(() => {
                                // Navigating the user 
                                this.props.router.navigate('/login')

                            }, 2000)
                           
                        }
                    });
                }

                // Else if the data status returned an error value 
                else if (data.status === "error") {
                    // Execute the block of code below 
                    Swal.fire({
                        title: "Error connecting to the database...", 
                        text: data.message, 
                        icon: 'error', 
                        confirmButtonText: "Exit..", 
                    })
                    .then((result) => {
                        // If the click exit 
                        if (result.isConfirmed) {
                            // Reload the screen 
                            window.location.reload(); 
                        }
                    })
            
                }
                // Else return the user to the login page 
                else {
                    // Execute the block of code below 
                    Swal.fire({
                        title: "User Registered", 
                        text: data.message, 
                        icon: "success", 
                        confirmButtonText: "Click Here To Login...", 
                    }) 
                    .then((result) => {
                        if (result.isConfirmed) {
                            // Setting the timeout for 3seconds, and then 
                            // navigate the user to the login route. 
                            setTimeout(() => {
                                // Navigating the user 
                                this.props.router.navigate('/login')

                            }, 3000)
                            
                        }
                    });

                }
               
            })
        }
    }

    // Rendering 
    render() {
        // Return the jsx component 
        return(
            <Fragment> 
                {/* Adding the navbar */}
                <div className="ui inverted segment navbar-container">
                    <div className="ui inverted secondary menu">
                        <nav className="left-nav">
                            <Link to="#">
                                <div style={{paddingTop: '7px'}}>
                                    <img src={fbiSeal} className="fbi-seal-image" alt="fbi-seal-image" />
                                </div>
                            </Link>
                            <Link to="/" className="item">Home</Link>
                            <Link to="/register" className="item">Register</Link>
                            <Link to="/login" className="item">Login</Link>
                            <Link to="#" className="item"> News Feed </Link>
                        </nav>
                    </div>

                    <div className="ui inverted segment left-nav">
                        <div className="ui action input">
                            <input type="text" placeholder="Search..."/>
                            <button className="ui button">Search</button>
                        </div>

                    </div>
                </div>

                {/* Alert message */}
                <div className="alert-div"> 
                    <Message className="alert-message" style={{display: this.state.display}}>
                        {this.state.message}
                    </Message>
                </div>

                {/* Adding the registration forms */}
                    <Form className="register-form" onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name...' type="text" onChange={(event) => {
                                if (event.target.value === "") {
                                    this.setState({
                                        display: "", 
                                    })
                                }

                                else {
                                    this.setState({
                                        display: "grid", 
                                        message: event.target.value,
                                    })
                                }
                            }}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name...' type="text" onChange={(event) => {
                                if (event.target.value === "") {
                                    this.setState({
                                        display: "", 
                                    })
                                }

                                else {
                                    // Changing the state 
                                    this.setState({ 
                                        message: event.target.value, 
                                        display: "grid", 
                                    }); 
                                }
                                
                            }}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Email Address</label>
                            <input placeholder='Email...' type="email" onChange={(event) => {
                                if (event.target.value === "") {
                                    this.setState({
                                        display: "", 
                                    })
                                }
                                else {
                                    // Changing the state 
                                    this.setState({ 
                                        message: event.target.value, 
                                        display: "grid", 
                                });

                                }

                            }}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password' type="password" />
                        </Form.Field>
                        <Form.Field className='checkbox-div'>
                            <input type='checkbox' className="checkbox-field" />
                            <label> I agree to the Terms and Conditions </label>
                        </Form.Field>
                        <Button type='submit' className="register-button">Submit</Button>
                    </Form>

                {/* Adding the footer  */}
                <Footer /> 
            </Fragment>
        )
    }
}

// Exporting the register component 
// this.props.register(firstname, lastname, emailAddress, password);
export default withRouter(Register); 
