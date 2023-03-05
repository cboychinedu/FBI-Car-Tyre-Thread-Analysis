// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Container, Label, Form, Button } from "semantic-ui-react";
import "../Css/App.css"; 
import fbiSeal from "../Images/fbi.png"; 

// Creating the functional component 
let Navbar = (props) => {
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
                        <a to="#" className="item"> News Feed </a>
                        <a to="#" className="item"> Logout </a>

                    </nav>
                </div>

                <div className="ui inverted segment left-nav"> 
                    <div className="ui action input">
                        <input type="text" placeholder="Search..."/>
                        <button className="ui button">Search</button>
                    </div>
                
                </div>
            </div>            
        </Fragment>
    )

}

// Exporting the Navbar page 
export default Navbar;