// Importing the necessary modules
import React, { Component, Fragment } from 'react';
import { NavLink  } from 'react-router-dom';
import Login from './Login';
import Footer from './Footer';
import fbiSeal from "../Images/fbi.png";
import "../Css/App.css";
import {
    Input,
    Container,
    Checkbox,
    Form,
    Button
} from "semantic-ui-react";

// Creating the functional component
let Home = (props) => {
    // Rendering
    return (
        <Fragment>
            <div className="ui inverted segment navbar-container">
                <div className="ui inverted secondary menu">
                    <nav className="left-nav">
                        <a>
                            <div style={{paddingTop: '7px'}}>
                                <img src={fbiSeal} className="fbi-seal-image" />
                            </div>
                        </a>
                        <NavLink to="#" className="active item">Home</NavLink>
                        <a to="#" className="item">Register</a>
                        <a to="#" className="item">Login</a>
                        <a to="#" className="item"> News Feed </a>
                    </nav>
                </div>

                <div className="ui inverted segment left-nav">
                    <div className="ui action input">
                        <input type="text" placeholder="Search..."/>
                        <button className="ui button">Search</button>
                    </div>

                </div>
            </div>

            {/* Adding the login Component */}
            <Login />

            {/* Adding the footer */}
            <Footer />   
        </Fragment>
    )
}

// Exporting the home page
export default Home;
