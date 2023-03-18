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
        activeItem: 'a',
        message: "First Car tyre thread, 97%...",
        keyValue: "a"
    }

    //
    handleItemClick = (e, { name, message, keyValue } ) => {
        this.setState({ keyValue: keyValue , message: message })


    }

    // Rendering the history component
    render() {
      // Return the jsx component
      return (
          <Fragment>
              {/* Adding the Navbar */}
              <Navbar />


              <section className="history-container">
                  <Grid>
                    <Grid.Column width={4}>
                      <Menu fluid vertical tabular menu-container>
                        <Menu.Item
                          name='Car tyre thread A'
                          keyValue="a"
                          message="Bio First Car tyre thread, 97%..."
                          active={this.state.keyValue === 'a'}
                          onClick={this.handleItemClick}
                        />
                        <Menu.Item
                          name='Car tyre thread B'
                          keyValue="b"
                          message="Pics First Car tyre thread, 98%..."
                          active={this.state.keyValue === 'b'}
                          onClick={this.handleItemClick}
                        />
                        <Menu.Item
                          name='Car tyre thread C'
                          keyValue="c"
                          message="Companies First Car tyre thread, 9%..."
                          active={this.state.keyValue === 'c'}
                          onClick={this.handleItemClick}
                        />
                        <Menu.Item
                          name='Car tyre thread D'
                          keyValue = "d"
                          message="Links First Car tyre thread, 59%..."
                          active={this.state.keyValue === 'd'}
                          onClick={this.handleItemClick}
                        />
                      </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                      <Segment className="message-segment">
                        {this.state.message}
                      </Segment>
                    </Grid.Column>
                </Grid>
                </section>






              {/* Adding the footer */}
              <Footer />
          </Fragment>
      )
    }
}

// Exporting the history page
export default History;
