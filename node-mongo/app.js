const mongoose = require('mongoose');

let Schema = mongoose.schema; 

let User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost/myappdatabase');

let userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
	var currentDate = new Date();

	this.updated_at = currentDate;

	if(!this.created_at) {
		this.created_at = currentDate;

		next();
	}
});

 User = User({
	name: 'Barry Alan',
	username: 'Flash',
	password: 'password',
	admin: true
});

newUser.save(function(err) {
	if(err) throw err;

	console.log('User Created!!');
});

User.find({}, function(err, users) {
	if(err) throw err;

	console.log(users);
});



module.exports = User;



mongoose.listen(3000);