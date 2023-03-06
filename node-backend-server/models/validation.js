// Importing the required modules 
const { ObjectId } = require('mongodb'); 
const mongodb = require('mongoose'); 

// Creating a schema for the users transactions 
const usersSchema = new mongodb.Schema({
    firstname: { type: String, required: true, minlength: 3, maxlength: 100 }, 
    lastname: { type: String, required: true, minlength: 3, maxlength: 100}, 
    email: { type: String, required: true, minlength: 3, maxlength: 100 }, 
    password: { type: String, required: true, minlength: 3 }, 
    date: { type: Date, default: Date.now }, 
    versionKey: false, 
}); 

// Connecting the user collection 
const USERS = mongodb.model('users', usersSchema); 

// Exporting the module 
module.exports.USERS = USERS; 