const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
}, { collection: 'signUp' });

// Create the model
const Admin = mongoose.model('signUp', adminSchema);

module.exports = Admin;