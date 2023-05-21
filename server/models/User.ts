const mongoose = require('mongoose');

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: false
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  photo: {
    type: String,
    required: false,
    default: ""
  }
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema); 