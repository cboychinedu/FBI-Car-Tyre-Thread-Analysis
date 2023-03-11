// Importing the necessary modules 
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import "../Css/App.css"; 
import { Button } from 'semantic-ui-react';
import fbiSeal from "../Images/fbi.png"; 

// 
const logout = () => {
    // Clearing the sessions 
    localStorage.clear() 
    window.location.reload(); 
    console.log('logout')
}

// Creating the functional component 
let Navbar = (props) => {
    // Rendering 
    return (
        <Fragment> 
            <div className="ui inverted segment navbar-container"> 
                <div className="ui inverted secondary menu">
                    <nav className="left-nav"> 
                        <NavLink to="#">
                            <div style={{paddingTop: '7px'}}>
                                <img src={fbiSeal} className="fbi-seal-image" alt="fbi-seal" /> 
                            </div>
                        </NavLink>
                        <NavLink to="#" className="active item">Home</NavLink>
                        <NavLink to="#" className="item"> News Feed </NavLink>
                        <Button className="logout-button" onClick={logout}> Logout </Button> 
                        <Button className="logout-button" > History </Button>

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