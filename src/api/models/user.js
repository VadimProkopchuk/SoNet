const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userScheme);
