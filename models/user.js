const { Schema, model } = require('mongoose');
const userSchema = require('./user');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    password: {
      type: String,
      required: true,
      max_length: 50,
      required: function() {
        return this.password.length > 6;
      }
    },
    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
