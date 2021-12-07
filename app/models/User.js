const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
     /* id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },  */
    fullName: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        /* unique: true */
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "roles"
    }] 
});

const user = mongoose.model('users', userSchema);

module.exports = user;
