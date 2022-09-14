const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    title: {type: String, required: true},
    options: [{option: {type:String} , votes: {type: Number}}]
});

const Poll = mongoose.model('Poll',pollSchema);
module.exports = Poll;
