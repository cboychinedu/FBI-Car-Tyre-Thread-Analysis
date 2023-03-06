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

// Setting the login route 
router.post('/login', async (req, res) => {
    // Searching the database to see if the user with the specified email 
    // address is registered on the database 
    let user = await USERS.findOne({
        email: req.body.email
    })

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