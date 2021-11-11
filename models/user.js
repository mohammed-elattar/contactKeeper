const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    requited: true,
  },
  email: {
    type: String,
    requited: true,
    unique: true,
  },
  password: {
    type: String,
    requited: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('user', UserSchema);
