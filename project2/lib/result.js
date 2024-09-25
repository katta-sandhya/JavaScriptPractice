const mongoose = require('mongoose');

const customerReportSchema = new mongoose.Schema({
    "Date" : String,
    "Description" : String,
    "Deposits": String,
    "withdrawls": String,
    "Balance": String,
}, { collection: 'Admin' });


// Create the model
const Admin = mongoose.model('Admin', customerReportSchema);

module.exports = Admin;
