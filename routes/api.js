const express = require('express');
const router = express.Router();
const forum = require('../models/forum');
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {

	const saltPassword = await bcrypt.genSalt(10);
	const securePassword = await bcrypt.hash(req.body.password, saltPassword);

	const user = new User({
		fullName:req.body.fullName,
		email:req.body.email,
		username:req.body.username,
		password:securePassword
	})
	user.save()
	.then(data =>{
		res.json(data)
	})
	.catch(error =>{
		res.json(error)
	})
});

router.get('/login', async (req, res, next) => {
	const { username, password } = req.body;

	User.findOne({ username }).then((user) => {
		if (!user) return res.status(400).json("Incorrect Username or Password");

		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch) return res.status(400).json("Incorrect Username or Password");

			return res.status(204).json("User logged in");
		})
	})
});

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
