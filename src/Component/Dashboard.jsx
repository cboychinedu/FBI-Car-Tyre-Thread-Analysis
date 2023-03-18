// Importing the necessary modules
import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import ErrorImage from "../Images/errorImage.jpg";
import uploadImage from "../Images/image.png";
import profileImage from "../Images/profile-image.png";
import { AuthContext } from "../Auth/AuthContext";
import threadImage from '../Images/car-type-thread-image.jpg'
import { Button, Message } from "semantic-ui-react";
import '../Css/App.css';

// Creating the class componenet
class Dashboard extends Component {

    // Setting the state
    state = {
        firstname: "",
        lastname: "",
        email: "",
        selectedFile: null,
        imageName: "",
        imagePath: uploadImage || "",
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

        // event.target.files = null
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
            // Checking request
            if (request.data.status === "success") {
                // Getting the image name
                let imageName = request.data.imagePath;
                imageName = imageName.split("/uploads/")[1];
                imageName = imageName.trimEnd();

                // Setting the state
                this.setState({
                    //
                    imagePath: `http://localhost:3001/${imageName}`,
                    imageName: imageName,
                })
            }

        });
    }

    // Creating a function for performing the analysis
    performAnalysis = async (event) => {
        // Setting the image name
        let imageName = this.state.imageName;
        let data = JSON.stringify({
            "image_path": imageName,
            "email": this.state.email, 
        })

        // Connect to the python server on port 5001
        await fetch('http://localhost:5001', {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'x-auth-token': this.context.xAuthToken,
            }
        })
        // On success,
        .then(response => response.json())
        .then(data => {
          // data = JSON.parse(data);
          // If the data status is success
          if (data.status === "success") {
            // SweetAlert
            Swal.fire({
              title: 'Thread Results',
              icon: "success",
              html: `
                <head>
                    <style>
                        .container {
                            margin: auto;
                            display: flex;
                            margin-top: 0px;
                            height: 149px;
                            width: 370px;
                        }
                    </style>
                </head>
                <div class="container">

                  <ul>
                    <li style="list-style: none; font-size: 27px; padding-bottom: 19px; color: #712424;"> Thread Analysis: ${data['AnalysisResult']} </li>
                    <li style="list-style: none; font-size: 18px; padding-bottom: 19px;"> Tyre Type: <b> ${data['ThreadType']} </b> </li>
                    <li style="list-style: none;"> Status: ${data['status']} </li>
                </div>

              `,
            })

          }
        })
        .catch((error) => {
            // Displaying the error alert
            Swal.fire({
                title: "Error connecting to database",
                icon: "error",
                html: `
                    <head>
                        <style>
                            .container {
                              margin: auto;
                              display: flex;
                              margin-top: 0px;
                              height: 149px;
                              width: 396px;
                            }
                            .container ul {
                              list-style-type: none;
                            }
                            .error {
                              color: red;
                            }
                        </style>
                    </head>
                    <div class="container">
                      <p>
                          <div> <img src=${ErrorImage} class="database-error-image"/>
                          <div>
                          <span class="error"> TypeError: Failed to obtain data from the database network <br>
                          Reasons: <b> CONNECTION REFUSED </b>  <br>
                          Please contact your admin...
                      </p>
                    </div>
                `
            })
        })
    }
    // Execute the block of code if the component mounts
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

            // Setting the user email
            this.context.setUserEmail(data["email"])

            // Setting the state
            this.setState({
                firstname: data["firstname"],
                lastname: data["lastname"],
                email: data["email"]
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
                        <img className="upload-image" alt="upload-image" src={this.state.imagePath} wrapped />
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
                        <Button className="perform-analysis" onClick={this.performAnalysis}> Perform Analysis </Button>
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
