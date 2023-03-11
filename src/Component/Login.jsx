// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { Checkbox, Form, Button } from 'semantic-ui-react';
import fbiBadge from "../Images/fbi-badge.png"; 
import { AuthContext } from "../Auth/AuthContext"; 
import withRouter from "./WithRouter"; 
import { sweetAlert } from './SweetAlert'; 
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
            // Using swee Alert to display the info 
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

        // Using Fetch request 
        fetch('http://localhost:3001/login', {
            method: 'POST', 
            body: data, 
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        })
        // Convert the response data into a json object
        .then(response => response.json())
        .then(data => {
            // Checking if the user was validated 
            if (data.status === "success") {
                // Getting the function for setting the token 
                // and loggedIn value to be true 
                let { setToken } = this.context; 
                localStorage.setItem("x-auth-token", data['x-auth-token']);
                setToken(data["x-auth-token"])

                setTimeout(() => {
                    // Navigating the user 
                    this.props.router.navigate('/dashboard')
                    window.location.reload(); 

                }, 3000)

                // Using swal alert 
                Swal.fire({
                    title: "Login Successful!",
                    text: "You are now logged in!",
                    icon: "success",
                    button: "Okay..",
                })
                
                .then((result) => {
                    // 
                    if (result.isConfirmed) {
        
                        setTimeout(() => {
                            // Navigating the user 
                            this.props.router.navigate('/dashboard')
                            window.location.reload(); 

                        }, 200)

                    }

                    // 
                    else {
                        // Navigating the user 
                        // this.props.router.navigate('/dashboard')
                        window.location.reload();
                    }

                })

            } 

            // Else if the user was not validated 
            else {
                // alert("Invalid email or password")
                sweetAlert('error', 'Invalid email or password', 'Invalid email or password')
                
            }
    
        })

        // On error
        .catch(error => {
            console.log(error); 
        })

        // console.log('email', email); 
        // console.log('password', password); 
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