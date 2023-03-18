// Importing the necessary modules
import React, { Fragment, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Css/App.css";
import { AuthContext } from '../Auth/AuthContext';
import { Button } from 'semantic-ui-react';
import fbiSeal from "../Images/fbi.png";
import { sweetAlert } from './SweetAlert';


// Creating the functional component
let Navbar = (props) => {

    //
    const navigate = useNavigate();

    //
    const { userEmail } = useContext(AuthContext);

    // Rendering
    return (
        <Fragment>
            <div className="ui inverted segment navbar-container">
                <div className="ui inverted secondary menu">
                    <nav className="left-nav">
                        <Link to="#">
                            <div style={{paddingTop: '7px'}}>
                                <img src={fbiSeal} className="fbi-seal-image" alt="fbi-seal" />
                            </div>
                        </Link>
                        <Link to="/" className="item">Home</Link>
                        <Link to="#" className="item"> News Feed </Link>
                        <Link to="/dashboard" className="item"> Dashboard </Link>
                        <Link to="/history" className="item" > History </Link>
                        <Button className="logout-button" onClick={
                          () => {
                            // Clearing the local storage
                            localStorage.clear();

                            // Sweet Alert
                            sweetAlert('success', `User ${userEmail} logged out..`)

                            //
                            setTimeout(() => {
                              navigate('/login');
                              window.location.reload();

                            }, 2000);

                          }
                        }> Logout </Button>


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
