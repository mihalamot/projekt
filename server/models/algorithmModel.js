const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const algorithmSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    input: {
        type: String,
        required: true
    },
    output: {
        type: String,
        required: true
    }/*,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }*/
}, { timestamps: true });

module.exports = mongoose.model('Algorithm', algorithmSchema);