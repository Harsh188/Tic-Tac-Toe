const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    wins: Number,
    losses: Number,
    ratio: Number,
    total: Number,
});

const User = mongoose.model('user', userSchema);
module.exports = User;