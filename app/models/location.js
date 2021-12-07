const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zip: {
        type: Number,
        required: false
    },
    country: {
        type: String,
        required: false
    } 
});

const location = mongoose.model('locations', locationSchema);

module.exports = location;