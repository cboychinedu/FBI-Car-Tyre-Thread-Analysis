// Importing the necessary modules 
const express = require('express'); 
const session = require('express-session'); 
const mongodb_session = require('connect-mongodb-session')(session); 
const path = require('path'); 
const jwt = require('jsonwebtoken'); 
const joi = require('joi'); 
const bcrypt = require('bcrypt'); 

// Creating the router object 
const router = express.Router(); 

// Creating a session variable 
let sess; 

// Setting the login route 
router.get('/login', async (req, res) => {
    return res.json({
        "Message": "Hello"
    })
})

// Exporting the home router
module.exports = router; 