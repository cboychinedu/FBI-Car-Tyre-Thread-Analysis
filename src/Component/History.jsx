// Importing the necessary modules
import React, { Component, Fragment } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/App.css';

// Creating the class component
class History extends Component {
    // Setting the state
    state = {
        historyList: null,
        activeItem: 'a',
        analysisResult: '',
        message: 'Welcome ',
        date: '',
        imagePath: '',
        userEmail: '',
        userId: '',
    }

    // Creating a function for handling the click events
    handleItemClick = (e, { name, objectData, activeItem } ) => {

        //
        this.setState({
          analysisResult: objectData.analysisResult,
          date: objectData.date,
          imagePath: objectData.imagePath,
          userEmail: objectData.userEmail,
          userId: objectData.userId,
          activeItem: activeItem

        })

    }

    // Component did mount
    componentDidMount (event) {
        // Using fetch request
        fetch('http://localhost:3001/get-history', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'x-auth-token': localStorage.getItem("x-auth-token")
          },
        })
        // Convert the response data into a json object
        .then(response => response.json())
        .then(data => {
          // Saving the history list
           // this.state.historyList.push(data);
           this.state.historyList = [data];
        })
    }

    // Rendering the history component
    render() {
      // Checking for the user's history list
      if (!this.state.historyList) {
          // Return the jsx
          return (
            <Fragment>
                {/* Adding the navbar */}
                <Navbar />
                    <p> Test </p>

                {/* Adding the footer */}
                <Footer />
            </Fragment>
          )


      }

      // Else
      else {
        // Return the jsx
        const { historyList } = this.state;
        return (
          <Fragment>
              {/* Adding the navbar */ }
              <Navbar />

              {/* Adding the history container */}
              <section className="history-container">
              <Grid>
                <Grid.Column width={4}>
                  <Menu fluid vertical tabular menu-container>
                    {
                      //
                      this.state.historyList[0].map((element, index) => {
                        console.log(element);
                        return (
                          <Fragment>
                            <Menu.Item
                              name={element.imagePath}
                              keyValue={element.analysisResult}
                              activeItem={element.date}
                              objectData={element}
                              active={this.state.activeItem === element.date}
                              onClick={this.handleItemClick}
                            />
                          </Fragment>

                        )
                      })

                    }
                  </Menu>
                </Grid.Column>
                <Grid.Column stretched width={12}>
                  <Segment className="message-segment">
                    <div className="history-image-div">
                    </div>
                    <div className="result-div">
                        <p> {this.state.message} </p>
                        <ul>
                            <li> Car Tyre Analysis: {this.state.analysisResult} </li>
                            <li> Date: {this.state.date} </li>
                            <li> ImagePath: {this.state.imagePath} </li>
                            <li> UserEmail: {this.state.userEmail} </li>
                            <li> UserId: {this.state.userId} </li>
                        </ul>
                    </div>
                  </Segment>
                </Grid.Column>
              </Grid>
              </section>



              {/* Adding the footer */ }
              <Footer />
          </Fragment>
        )
      }
    }
}

// Exporting the history page
export default History;
