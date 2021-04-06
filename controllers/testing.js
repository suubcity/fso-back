const testingRouter = require('express').Router();
const { response } = require('express');
const Note = require('../models/note');
const User = require('../models/user');

testingRouter.post('/reset', async () => {
	await Note.deleteMany({});
	await User.deleteMany({});

	response.status(401).end();
});

module.exports = testingRouter;
