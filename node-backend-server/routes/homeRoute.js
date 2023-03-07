// Importing the necessary modules
const express = require('express');
const session = require('express-session');
const mongodb_session = require('connect-mongodb-session')(session);
const path = require('path');
const jwt = require('jsonwebtoken');
const { USERS } = require('../models/validation.js');
const joi = require('joi');
const bcrypt = require('bcrypt');

// Creating the router object
const router = express.Router();

// Creating a session variable
let sess;

// Setting up a route to fetch the logged in user 
// details 
router.post('/user-details', async (req, res) => {
    // Getting the user's token from the header
    let token = req.header('x-auth-token')

    // Using try, catch block 
    try {
        // Decoding the token
        let userData = jwt.decode(token)

        // Searching the database to see if the user with the specified email 
        // address from the token is registered on the databae 
        let user = await USERS.findOne({
            email: userData.email
        })
        .select({id: 1, firstname: 1, lastname: 1, email: 1})

        // If the user is present on the database, execute the 
        // block of code below 
        if (user) {
            // Send back the user 
            return res.send(JSON.stringify(user)); 
        }

        // Else 
        else {
            // Create an error message 
            let errorMessage = JSON.stringify({
                "message": "User not found on the database", 
                "status": "error"
            })

            // Sending back the message 
            return res.send(errorMessage); 
        }
    }

    // On error connecting to the database, and decoding the 
    // token data, execute the block of code below 
    catch (error) {
        // Catch, and log the error 
        console.log(error); 

        // Create an error message, and send it to the user 
        let errorMessage = JSON.stringify({
            "message": "User not found on the database", 
            "status": "error"
        })

        // Sending back the error message 
        return res.send(errorMessage); 
    }

})

// Setting the login route
router.post('/login', async (req, res) => {
    // Searching the database to see if the user with the specified email
    // address is registered on the database
    let user = await USERS.findOne({
        email: req.body.email
    })

    // console.log(req.header("x-auth-token"))

    // If the email address specified was not found on the database,
    // execute the block of code below
    if (!user) {
        // Create an error message
        let errMessage = JSON.stringify({
            "message": "Invalid email or password.",
            "status": "error"
        })

        // Sending the error message
        return res.send(errMessage);
    }

    // If the email address is found
    else {
        // Execute the block of code below if the specified email address is
        // found on the database server
        let userPassword = req.body.password;
        let hashedPassword = user.password;

        // Checking if the hashed value is correct
        let passwordCondition = await bcrypt.compare(userPassword, hashedPassword);

        // Sending back a response if the password is validated
        if (passwordCondition) {
            // Create a JWT token
            let token = jwt.sign({
                email: user.email,
                isLoggedIn: true,
                id: user._id
            }, process.env.JWT_SECRET,
            {
                expiresIn: '250 days'
            });

            // Sending back the JWT token
            // process.env.JWT_SECRET
            // Setting the header ----
            /** We are here currently...  */
            // res.set('x-auth-token', token);
            let successMessage = JSON.stringify({
                "message": "Logged in successfully", 
                "status": "success", 
                "x-auth-token": token, 
            })

            // Sending back the success message
            return res.send(successMessage);
        }

        // Else if the password is not validated
        else {
            // Create an error message for the not validated password
            let errMessage = JSON.stringify({
                "message": "Invalid email or password",
                "status": "error",
            })

            // Sending back the error message to the client
            return res.send(errMessage);
        }
    }
})

// Creating the register route
router.post('/register', async (req, res) => {
    // Searching the database to see if the user with the specified email
    // address is registered on the database
    let registeredUser = await USERS.findOne({ email: req.body.email });

    // If the user exists exit the block of code below
    if (registeredUser) {
        // If the email is found create a response JSON message
        let errMessage = JSON.stringify({
            "message": "The user with the email address is registered",
            "status": "user_registered"
        })

        // Sending the error message
        return res.send(errMessage);
    }

    // If the email for the user is not found, execute the block of code
    // below
    else {
        // Encrypt the password, connect to the database and save the user
        let salt = await bcrypt.genSalt(5);
        hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Saving the new registered user
        let newUser = await new USERS({
            firstname: req.body.email,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPassword
        });

        // Saving the new user on the database
        try {
            // Save the new user, and return a successful message
            let result = await newUser.save();
            let successMessage = JSON.stringify({
                "message": "User registered",
                "status": "success"
            });

            // Return the success message
            return res.send(successMessage);
        }
        // On error connecting to the database, log the error and return
        // an error message
        catch (error) {
            // Logging the error
            console.log(error);
            let errMessage = JSON.stringify({
                "message": "error saving the data",
                "status": "error"
            })

            // Sending the error message
            return res.send(errMessage);
        }
    }

})

// Exporting the home router
module.exports = router;
