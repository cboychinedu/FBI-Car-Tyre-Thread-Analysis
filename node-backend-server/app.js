// Importing the necessary modules
const fs = require('fs'); 
const express = require('express'); 
const session = require('express-session'); 
const cookieParser = require('cookie-parser'); 
const fileupload = require('express-fileupload'); 
const path = require('path'); 
const bodyParser = require('body-parser'); 
const { ObjectId } = require('mongodb'); 
const mongodb = require('mongoose'); 
const morgan = require('morgan'); 

// Setting the data base URI 
const databaseURI = "mongodb://localhost/"

// Building the express application
const app = express();

// Creating one week session interval
// const oneWeekSession = 1000 * 60 *  60 * 7*24;
// app.use(session({
//   secret: "api-secret",
//   saveUninitilized: true,
//   resave: true,
//   store: store,
//   unset: 'destroy',
//   cookie: { maxAge: oneWeekSession },
// }));
app.use(cookieParser());
app.use(express.json());
app.use(fileupload())
app.use(express.static('static'));
app.use(express.static('./static/javascript'));
app.use(express.static('./static/templates'));
app.use(express.static('./static/css'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// Setting the views 
app.set('view engine', 'ejs'); 
app.set('views', './views'); 

// Using the environment variable for HOST, and PORT 
const PORT = process.env.PORT || 3001; 
const HOST = process.env.HOST || 'localhost'; 

// Importing the required routes 
const home = require('./routes/homeRoute.js'); 

// Setting the routes configurations 
app.use('/', home); 

// Running the nodjs server 
app.listen(PORT, HOST, () => {
    // Displaying the connection status 
    console.log(`The server is running on ${HOST + ':' + PORT}`); 
})