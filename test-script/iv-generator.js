// Importing the necessary modules 
const crypto = require('crypto-js'); 

// Generate random IV values 
let generateRandomIV = () => {
    // Generate a random IV with 16 bytes (128 bits) 
    let iv = crypto.lib.WordArray.random(16); 
    iv = iv.toString(); 

    console.log(iv); 
}

// Calling the function 
generateRandomIV(); 