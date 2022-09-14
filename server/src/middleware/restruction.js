const {PollError} = require('../middleware/errorHandler');

/**
 * Restruction of req.body Poll model to the Schema model.
 * @param {request} req 
 * @param {respond} res 
 * @param {forward next middleware} next 
 */
const restruction = (req,res,next) =>{
    try{
        const poll = {title: req.body.title, options: req.body.options};
        if(poll.options.length !== 3) next(new PollError('Too many options, must be 3',400));
        if(poll.title === '' ) next(new PollError('Title must be specified',400));
        req.body = poll;
        next();
    }
    catch{ next(e); }
}

module.exports = restruction;