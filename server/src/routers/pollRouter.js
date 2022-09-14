require('../db/mongoose');
const express = require('express');
const Auth = require('../middleware/authentication');
const restruction = require('../middleware/restruction');
const {PollError} = require('../middleware/errorHandler');
const Poll = require('../db/model/poll');

const router = express.Router();

/**
 * Returns set polls according to client page.
 */
router.get('/polls/:page',async(req,res,next)=>{
    try{
        const page = req.params.page;
        const polls = await Poll.find({}).limit(3).skip((page-1)*3);
        res.send(polls);
    }
    catch(e){next(e);}
});

/**
 * Creates a new Poll , can be done only with an APIkey validation.
 */
router.post('/create',Auth,restruction,async(req,res,next)=>{
    try{
        const poll = req.body;
        const newPoll = new Poll(poll);
        await newPoll.save();
        res.send(newPoll);
    }
    catch(e){ next(e);}
});

/**
 * Submits a vote to a specified poll.
 */
router.patch('/submit',async(req,res,next)=>{
    try{
        const submittedPoll = {id: req.body.id, answer: req.body.answer};
        const poll = await Poll.findOneAndUpdate({ _id: submittedPoll.id }, {$inc: {"options.$votes": 1}});
        if(!poll) next(new PollError('Poll does not exist',400));
        await poll.save();
        res.send({Message: 'Submitted'});
    }
    catch(e){ next(e);}
});

/**
 * Returns all polls results.
 */
router.get('/results',async(req,res,next)=>{
    try{
        const polls = await Poll.find({});
        res.send(polls);
    }
    catch(e){next(e);}
});


module.exports = router;