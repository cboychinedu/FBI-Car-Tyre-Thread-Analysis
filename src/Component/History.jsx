// Importing the necessary modules
import React, { Component, Fragment } from 'react';
import { Grid, Menu, Segment, Button, Pagination } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/App.css';

// Creating the class component
class History extends Component {
    // Setting the state
    state = {
        historyList: null,
        activeItem: '',
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

           //
           this.setState({
              activeItem: data[0].date,
              analysisResult: data[0].analysisResult,
              date: data[0].date,
              imagePath: data[0].imagePath,
              userEmail: data[0].userEmail,
              userId: data[0].userId,
           })
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
                      <img src={"http://localhost:3001/" + this.state.imagePath} className="history-image-display"/>
                      <Button className="history-download-image"> Download image </Button>
                    </div>
                    <div className="result-div">
                        <p> {this.state.message} </p>
                        <ul>
                            <li className="results-lists"> Car Tyre Analysis: <b> {this.state.analysisResult} </b> </li>
                            <li className="results-lists"> Date: <b> {this.state.date} </b> </li>
                            <li className="results-lists"> ImagePath: <b> {this.state.imagePath} </b> </li>
                            <li className="results-lists"> UserEmail: <b> {this.state.userEmail} </b> </li>
                            <li className="results-lists"> UserId: <b> {this.state.userId} </b> </li>
                        </ul>

                    </div>
                  </Segment>
                </Grid.Column>
              </Grid>
                  {/* Adding the pagnation */ }
                  <div className="history-pagnation">
                    <Pagination
                      boundaryRange={0}
                      defaultActivePage={1}
                      ellipsisItem={null}
                      firstItem={null}
                      lastItem={null}
                      siblingRange={1}
                      totalPages={5}
                    />
                  </div>
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
