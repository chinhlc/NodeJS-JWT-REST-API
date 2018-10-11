var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    user_name: { 
        type: String,
        trim: true,
        required: true
    },
    email: { 
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    password: { 
        type: String, 
        required: true 
    },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now }
});
