// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { Checkbox, Form, Button } from 'semantic-ui-react';
import fbiBadge from "../Images/fbi-badge.png"; 
import { AuthContext } from "../Auth/AuthContext"; 
import withRouter from "./WithRouter"; 
import { sweetAlert } from './SweetAlert'; 
import axios from 'axios';
import Swal from 'sweetalert2';
import "../Css/App.css"; 


// Creating the class based component 
class Login extends Component {
    // Getting the Auth context 
    static contextType = AuthContext; 

    // Creating a function for handling the forms 
    // when submitted 
    handleSubmit = (event) => {
        // Getting the forms for email and password
        let email = event.target[0].value; 
        let password = event.target[1].value; 

        // Checking if the forms are valid 
        if (email === '') {
            // Using sweet Alert to display the info 
            sweetAlert('info', 'Email required', 'Please fill in your email address'); 
            return; 
        }

        // Checking for password 
        else if (password === '') {
            // Using sweet alert to display the info 
            sweetAlert('info', 'Password required', 'Please fill in your password'); 
            return; 
        }

        // creating a json object 
        let data = JSON.stringify({
            email: email,
            password: password
        })

        // Setting the headers 
        const config = {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*', // Replace with your desired allowed origin
              'Access-Control-Allow-Methods': 'POST', // Specify allowed methods
              'Access-Control-Allow-Headers': 'Content-Type', // Specify allowed headers
            },
        };

        // Using Axios to make request to the server 
        axios.post('http://localhost:3001/login', data, config)
        .then(response => {
            // Handle the response data 
            console.log(response); 

            // Checking if the user data was validate 
            if (response.data.status === "success") {
                // Execute the block of code below if the status was successful 
                // And set the loggedIn value to be true 
                let { setToken } = this.context; 
                localStorage.setItem("x-auth-token", response.data["x-auth-token"]); 
                setToken(response.data["x-auth-token"])

                // Delay the login duration for 3000 miniseconds 
                setTimeout(() => {
                    // Navigating the user 
                    this.props.router.navigate('/dashboard')
                    window.location.reload(); 
                }, 3000)

                // Using swal alert 
                Swal.fire({
                    title: "Login Successfully!", 
                    text: "You are now logged in!", 
                    icon: "Success", 
                    button: "Okay...", 
                })
                .then((result) => {
                    // If the user clicked the button okay 
                    if (result.isConfirmed) {
                        // Delay, and redirect the user to the dashboard page 
                        setTimeout(() => {
                            // Navigating the user 
                            this.props.router.navigate("/dashboard"); 
                            window.location.reload(); 
                        }, 200)

                    }
                    // Else if the user did not click 
                    else {
                        // Navigating the user 
                        this.props.router.navigate('/dashboard'); 
                        window.location.reload();
                    }
                })
            }

            // Else if the data from the request was an error 
            else {
                // Using sweetAlert 
                sweetAlert('error', 'Invalid email or password', 'Invalid email or password')
            }
        })
        // On error connecting to the database server, execute the 
        // line of code below 
        .catch(error => {
            // Handle any errors 
            console.log(error); 
        })
    }

    // Rendering 
    render() {
        // Return the jsx 
        return (
            <Fragment> 
                <div>
                <div className="ui fluid container-heading">
                <div className="bg-image"></div>
                <div className="bg-text">
                    <div style={{textAlign: 'center'}}> 
                        <img src={fbiBadge} className="fbi-badge-image" alt="fbi-badge-image" /> 
                    </div>
                    <div className="center-div">  
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label className="label-tag"> Email Address </label>
                                <input placeholder='Email address...' />
                            </Form.Field>
                            <Form.Field>
                                <label className='label-tag'> Password </label>
                                <input placeholder='Password...' type="password" />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox className="label-tag" label='I agree to the Terms and Conditions' />
                            </Form.Field>
                            <Button className="submit-button" type='submit'>Submit</Button>
                        </Form>
                    </div>
                </div>
                </div>
                </div>
            </Fragment>
        )
    }
    
}

// Exporting the Login Component 
export default withRouter(Login); 