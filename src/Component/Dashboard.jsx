// Importing the necessary modules
import React, { ChangeEvent, Component, Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import uploadImage from "../Images/image.png";
import profileImage from "../Images/profile-image.png"; 
import { AuthContext } from "../Auth/AuthContext"; 
import threadImage from '../Images/car-type-thread-image.jpg'
import { Button, Message } from "semantic-ui-react";
import '../Css/App.css';

// Creating the function componenet
class Dashboard extends Component {
    // State
    state = {
        firstname: "", 
        lastname: "", 
        selectedFile: null, 
    }

    // Getting the Auth context 
    static contextType = AuthContext; 

    // On file select (from the pop up)
    onFileChange = (event) => {
        // console.log('file change')
        // Update the state 
        this.setState({
            selectedFile: event.target.files[0] 
        })

        event.target.files = null
    }

    // On file upload (click the upload button)
    onFileUpload = () => {
        // Create an object of formData 
        const formData = new FormData(); 

        // Update the formData object 
        formData.append(
            "image", 
            this.state.selectedFile, 
            this.state.selectedFile.name
        ); 

        // Details of the uploaded file 
        axios.post("http://localhost:3001/uploadImage", formData, {
            headers: {
                // 'Content-Type': 'application/json', 
                'x-auth-token': localStorage.getItem("x-auth-token"), 
            }
        })
        .then((request) => {
            console.log(request); 
        });
    }
    // 
    componentDidMount() {
        // Making a fetch request to the server, with the 
        // x-auth-token to render the logged in user, with 
        // his/her details 
        fetch('http://localhost:3001/user-details', {
            method: 'POST', 
            body: null, 
            headers: {
                'Content-type': 'application/json; charset=UTF-8', 
                'x-auth-token': this.context.xAuthToken, 
            }
        })
        // On success, convert the response into a json object 
        .then(response => response.json())
        .then(data => {

            // console.log(data)

            // Setting the state 
            this.setState({
                firstname: data["firstname"], 
                lastname: data["lastname"]
            })
        })
    }

    // Rendering
    render() {
        // 
        if (this.state.selectedFile) {
            // Return the jsx
        return (
            <Fragment>
                {/* Adding the Navbar */}
                <Navbar />

                <div className="users-info-div">
                    <img className="profile-image" circular src={profileImage} alt="profile-image"/>
                    <p className="users-name-details"> {this.state.firstname} {this.state.lastname} </p>
                </div>

                {/* Adding the main div */}
                <div className="dashboard-section">
                    <div className="ui segment description-main-div">
                        <img className="upload-image-display" src={threadImage} alt="upload-image-display"/>
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
                        <img className="upload-image" alt="upload-image" src={uploadImage} wrapped />
                        <br/>
                        <div className="upload-image-file-div">
                            <label for="embedpollfileinput" className="ui green left floated button green-button"
                                onClick={this.onFileUpload}>
                                <i className="ui upload icon"></i>
                                Upload image
                            </label>


                            <input type="file" className="" id="" onChange={this.onFileChange}/>
                        </div> <br />
                        <div className="perform-analysis-button-div">
                        <Button className="perform-analysis" onClick={this.onFileUpload}> Perform Analysis </Button>
                        </div>

                    </div>

                    <div className="results-div">

                    </div>
                </div>

                {/* Adding the footer */}
                <Footer /> 
            </Fragment>
        )

        }

        // 
        else {
            // Return the jsx
            return (
                <Fragment>
                    {/* Adding the Navbar */}
                    <Navbar />

                    <div className="users-info-div">
                        <img className="profile-image" circular src={profileImage} alt="profile-image"/>
                        <p className="users-name-details"> {this.state.firstname} {this.state.lastname} </p>
                    </div>

                    {/* Adding the main div */}
                    <div className="dashboard-section">
                        <div className="ui segment description-main-div">
                            <img className="upload-image-display" src={threadImage} alt="upload-image-display"/>
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
                            <img className="upload-image" alt="upload-image" src={uploadImage} wrapped />
                            <br/>
                            <div className="upload-image-file-div">
                                {/* <label for="embedpollfileinput" className="ui green left floated button green-button"
                                    onClick={this.uploadImage}>
                                    <i className="ui upload icon"></i>
                                    Upload image
                                </label> */}


                                <input type="file" className="" id="" onChange={this.onFileChange}/>
                            </div> <br />
                            <div className="perform-analysis-button-div">
                            <Button className="perform-analysis"> Perform Analysis </Button>
                            </div>

                            </div>

                            <div className="results-div">

                            </div>
                        </div>

                    {/* Adding the footer */}
                    <Footer /> 
                </Fragment>
            )
        }
    }
}    
        

// Exporting the dashboard page
export default Dashboard;


// console.log(this.context)
// console.log(localStorage.getItem("x-auth-token"))
// console.log('Testing the component did mount')
