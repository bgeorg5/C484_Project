const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
    temperature: {
        type: String,
        required: false
    },
    uv_radiation: { //UV index is from 0-11
        type: Number,
        required: false
    }, 
    wind: { //assumed to be in mph
        type: Number, 
        required: false
    }, 
    precipitation: {
        type: Number,
        required: false
    },
    precipitation_type: {
        type: String,
        required: false
    }
});

const weather = mongoose.model('weatherModel', weatherSchema);

module.exports = weather;