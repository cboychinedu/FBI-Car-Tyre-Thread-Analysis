// Importing the necessary modules
import React, { Fragment } from 'react';
import { Link  } from 'react-router-dom';
import Login from './Login';
import Footer from './Footer';
import fbiSeal from "../Images/fbi.png";
import "../Css/App.css";

// Creating the functional component
let Home = (props) => {
    // Rendering
    return (
        <Fragment>
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

            {/* Adding the login Component */}
            <Login />

            {/* Adding the footer */}
            <Footer />   
        </Fragment>
    )
}

// Exporting the home page
export default Home;
