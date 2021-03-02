const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/user');

loginRouter.post('/', async (request, response) => {
	const body = request.body;
	//body is assigned the value sent from the front end

	const user = await User.findOne({ username: body.username });
	//the User model is searched using data from the body and a user is returned from the database and stored in user.

	const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.passwordHash);

	//if there is no user false is stored in passwordCorrect, if there is a user bcrupt.compare is used to test the password sent in the body against the userHash stored in user.

	if (!(user && passwordCorrect)) {
		return response.status(401).json({
			error: 'invalid username or password',
		});
	}
	//the return here exits the function
	const userForToken = {
		username: user.username,
		id: user._id,
	};

	const token = jwt.sign(userForToken, process.env.SECRET);

	response.status(200).send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;
