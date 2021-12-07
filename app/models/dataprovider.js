const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataProviderSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Locations: { //Array of location objects, if possible
        type: Array,
        "default": [],
        required: false
    }, 
});

const dataprovider = mongoose.model('dataprovider', dataProviderSchema);

module.exports = dataprovider;
