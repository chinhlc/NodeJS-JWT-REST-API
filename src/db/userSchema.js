var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    user_name: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true, index: { unique: true } },
    password: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now }
});
