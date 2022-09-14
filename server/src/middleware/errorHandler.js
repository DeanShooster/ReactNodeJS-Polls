class PollError extends Error{
    constructor(message,status){
        super(message);
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Generic error handler.
 * @param {Error} error 
 * @param {Request} req 
 * @param {Result} res 
 * @param {Callback} next 
 */
 const ErrorHandler = (error,req,res,next) => {
    const ErrorOb = { Message: error.message , status: error.status };
    if(!error.status) error.status = 400;
    res.status(error.status).send( ErrorOb );
};

module.exports = {PollError,ErrorHandler};