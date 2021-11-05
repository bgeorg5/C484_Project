const express = require('express');
const router = express.Router();
const forum = require('../models/forum');

router.get('/forum', (req, res, next) => {
    forum.find({}, 'action')
	.then((data) => res.json(data))
	.catch(next);
});

router.post('/forum', (req, res, next) => {
    if (req.body.action){
	forum.create(req.body)
	    .then((data) => res.json(data))
	    .catch(next);
    } else {
	res.json({
	    error: 'The input field is empty',
	});
    }
});

router.delete('/forum/:id', (req, res, next) => {
    forum.findOneAndDelete ({ _id: req.params.id })
	.then((data) => res.json(data))
	.catch(next);
});

module.exports = router;
