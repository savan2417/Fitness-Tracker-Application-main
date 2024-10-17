const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add the user name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter the email address'],
      unique: [
        true,
        'Email address already registerd, please enter a different email.',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password.'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
