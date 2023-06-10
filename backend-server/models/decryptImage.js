// Importing the necessary modules 
const crypto = require('crypto-js'); 
const { enc } = crypto; 

// Creating a function for decrypting the image using AES, 
// then decode the image using base64 encoding 
let decryptImageBlob = (encryptedData, key, iv) => {
    // Create the decipher hash 
    // encryptedData = Buffer.from(encryptedData, 'base64'); 

    const decipher = crypto.AES.decrypt({ ciphertext: enc.Base64.parse(encryptedData.toString()) }, key, {
        iv: enc.Hex.parse(iv), 
    });

    // Convert the decrypted data to a buffer 
    const decryptedBuffer = Buffer.from(decipher.toString(enc.Latin1), 'latin1')
    // let decryptedData = decipher.toString(crypto.enc.Hex); 
    // let imageBuffer = Buffer.from(decryptedData, 'base64');

    // Decrypting the data, then decode the image using base64 encoding 
    // let decryptedData = decipher.update(encryptedData, 'base64', 'utf8'); 
    // decryptedData += decipher.final('utf8'); 

    // Return the decrypted data 
    return decryptedBuffer; 

}

// Exporting the function 
module.exports.decryptImageBlob = decryptImageBlob; 