// Importing the necessary modules 
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import threadImage from '../Images/car-type-thread-image.jpg'
import { Header, Button, Image, Message } from "semantic-ui-react";
import '../Css/App.css'; 

// Creating the function componenet 
class Dashboard extends Component {
    // State 
    state = {} 

    // Rendering 
    render() {
        // Return the jsx 
        return (
            <Fragment> 
                {/* Adding the Navbar */}
                <Navbar />

                <div className="users-info-div"> 
                    <img className="profile-image" circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> 
                    <p className="users-name-details"> Mbonu Chinedum</p>
                </div>

                {/* Adding the main div */}
                <div className="dashboard-section"> 
                    <div className="ui segment description-main-div"> 
                        <img className="upload-image-display" src={threadImage} />
                        <div className="upload-image-file-div">                 
                        <Message>
                            <Message.Header> Car Tyre Thread Analysis</Message.Header>
                            <Message.Content>
                                Forensic tire tread evidence records and analyzes impressions 
                                of vehicle tire treads for use in legal proceedings to help 
                                prove the identities of persons at a crime scene. Every tire 
                                will show different amounts of tread wear, and different amounts 
                                of damage in the form of tiny cuts and nicks.
                            </Message.Content>
                        </Message>
                        </div>
                    </div>

                    <div className="ui segment dashboard-main-div"> 
                        <img className="upload-image" src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />
                        <br/> 
                        <div className="upload-image-file-div">                 
                            <label for="embedpollfileinput" className="ui green left floated button green-button">
                                <i class="ui upload icon"></i> 
                                Upload image
                            </label> 
                        
                            <input type="file" class="inputfile" id="embedpollfileinput" />
                        </div> <br /> 
                        <div className="perform-analysis-button-div"> 
                        <Button className="perform-analysis"> Perform Analysis </Button>
                        </div>
                            
                    </div>

                    <div className="results-div"> 
                        
                    </div>
                </div>

            </Fragment>
        )
    }
}

// Exporting the dashboard page 
export default Dashboard; 
