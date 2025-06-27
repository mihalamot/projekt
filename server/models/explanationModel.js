const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const explanationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    explanation: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    /*userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },*/
    algorithmID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Algorithm',
        required: true
    }}, { timestamps: true });

    module.exports = mongoose.model('Explanation', explanationSchema);