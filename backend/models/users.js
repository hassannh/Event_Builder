import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    password: String,
    role: { type: Boolean, default: false },
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;

