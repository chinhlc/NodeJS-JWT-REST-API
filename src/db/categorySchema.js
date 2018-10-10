var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title: String,
    description: String,
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now }
});