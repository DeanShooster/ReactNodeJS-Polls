const {PollError} = require('../middleware/errorHandler');

/**
 * Authenticates the given APIkey.
 * @param {request} req 
 * @param {respond} res 
 * @param {forward middleware chain} next 
 */
const Auth = async (req,res,next) => {
    try{
        const APIkey = req.headers.apikey;
        const decoded = (APIkey === process.env.AUTH_KEY);
        if(!decoded) next(new PollError('Invalid API Key',401));
        next();
    }
    catch(e){ next(e);}
};

module.exports = Auth;