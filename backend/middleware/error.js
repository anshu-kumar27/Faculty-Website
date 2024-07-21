const ErrorHandler = require('../utils/errorHandler')

module.exports = (err , req, res , next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server error";
    
    // Invalid Mongo Id
    if(err.name === 'CastError'){
        const message = `resource not found, Invalid ${err.path}`
        err = new ErrorHandler(message,400)
    }

    // Duplicate key Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Error`;
        err = new ErrorHandler(message,400)
    }

    // Invalid JWT Token
    if(err.name === 'JsonWebTokenError'){
        const message = `Invalid jwt token, try again`
        err = new ErrorHandler(message,400)
    }

    // Expired JWT Token
    if(err.name === 'TokenExpiredError'){
        const message = `Token Expired, try again`
        err = new ErrorHandler(message,400)
    }
    
    res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
}