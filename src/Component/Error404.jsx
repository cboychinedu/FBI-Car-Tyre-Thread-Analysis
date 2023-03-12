// Importing the necessary modules
import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Input, Form } from 'semantic-ui-react';
import '../Css/App.css';

// Creating the class component
class ErrorPage extends Component {

  // Rendering the component
  render() {
    // Return the jsx component
    return (
      <Fragment>
         {/* Adding the Navbar */}
         <Navbar />

         <div className="error-div">
            <h1 className="error-heading">
                4 0 4
            </h1>
            <p> You didn't break the internet, but we can't find what you are
                looking for.

                <br />
                <Form className="error-form">
                  <Form.Field>
                    <Input action='Search' className="error-search" placeholder="Search..." />
                  </Form.Field>
                </Form>

            </p>

         </div>

         <Footer />
      </Fragment>
    )
  }
}

// Exporting the ErrorPage
export default ErrorPage;
