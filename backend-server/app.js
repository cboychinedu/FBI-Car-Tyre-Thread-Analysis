// Importing the necessary modules
const express = require('express');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const mongodb = require('mongoose');
const morgan = require('morgan');
const chalk = require('chalk');

// Loading the env variables 
require('dotenv').config(); 

// Setting the data base URI
const databaseURI = "mongodb://localhost:27017/car_tyre_analysis";

// Connecting to the mongodb database
mongodb.connect(databaseURI).then(() => {
    // Connection details
    let databaseMessage = chalk.red("Connected to mongodb database server.")
    console.log(databaseMessage);
})
// On error
.catch((error) => {
    // On failure to connect to the database server
    console.log(error);
})


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
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'], 
    credentials: true, 
    optionsSuccessStatus: 200, 
    allowedHeaders: [
        'Content-Type', 'Authorizaton', 
        'Access-Control-Allow-Methods', 
        'access-control-allow-orign', 
        'Access-Control-Allow-Origin', 
        'Access-Control-Allow-Headers', 
        'x-auth-token', 
    ]
}))

app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(fileupload())
app.use(express.static('static'));
app.use(express.static('./static/uploads')); 
app.use(express.static('./static/javascript'));
app.use(express.static('./static/templates'));
app.use(express.static('./static/css'));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
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
    let serverMessage = chalk.green.bold(`The server is running on ${'http://'+ HOST + ':' + PORT}`)
    console.log(serverMessage);
})
