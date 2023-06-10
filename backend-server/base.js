// Importing the necessary modules
const path = require('path');
const winston = require('winston');

// Getting the base path "root path"
let rootPath = path.join(__dirname);

// Creating the winston logger object
const logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: "car-tyre-thread-analysis"},
    transports: [
        new winston.transports.File({ filename: './logs/errorLog.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/GeneralLog.log', level: 'info' }),
    ]
});

// Creating the error logger
const errorLogger = (errorMessage) => {
    // Logging the error message
    logger.log({
        level: 'error',
        message: `${errorMessage}`,
    })
}

// Creating the route logger
const routeLogger = (props) => {
  // Loggig each routes
  logger.log({
    level: 'info',
    message: `${props.route + ', ' + props.image_name + ', ' + props.analysis_status}`

  });
}

// Exporting the router
module.exports.rootPath = rootPath;
module.exports.errorLogger = errorLogger;
module.exports.routeLogger = routeLogger;
