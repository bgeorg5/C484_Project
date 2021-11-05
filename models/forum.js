const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    action: {
	type: String,
	required: [true, 'text field is required']
    },
});

const forum = mongoose.model('forumBoard', forumSchema);

module.exports = forum;
