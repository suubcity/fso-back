const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
	},
	name: String,
	passwordHash: String,
	notes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Note',
			//Note references the model?

			//populate uses populate('notes') to come to this section. it knows from the ref that it should use the Note model. It takes all the id's stored in notes searches through the Note model and replaces all ids with the note entries from the db?
		},
	],
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
		// the passwordHash should not be revealed
		delete returnedObject.passwordHash;
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
