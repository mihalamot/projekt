const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    total_score: {
        type: Number,
        default: 0
    }}, { timestamps: true });

    module.exports = mongoose.model('User', userSchema);