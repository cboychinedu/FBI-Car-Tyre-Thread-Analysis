// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Checkbox, Form, Button } from 'semantic-ui-react';
import fbiBadge from "../Images/fbi-badge.png"; 
import "../Css/App.css"; 


// Creating the class based component 
class Login extends Component {
    // Setting the state 
    state = {

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
                        <img src={fbiBadge} className="fbi-badge-image" /> 
                    </div>
                    <div className="center-div">  
                        <Form>
                            <Form.Field>
                                <label className="label-tag">First Name</label>
                                <input placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <label className='label-tag'>Last Name</label>
                                <input placeholder='Password' type="password" />
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
export default Login; 