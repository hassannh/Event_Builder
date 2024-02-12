import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
    firstName: { type: String},
    email: { type: String},
    password: { type: String },
    role:{type:Boolean ,default: false}
});
const users = model('users', usersSchema);

export default users;