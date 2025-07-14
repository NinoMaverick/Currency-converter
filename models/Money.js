const mongoose = require('mongoose');

const MoneySchema = new mongoose.Schema({
        amount: {
            type: Number,
            required: true,
            min: 0,
        },
        currency: {
            type: String,
            required: true,
            uppercase: true,
            length: 3,
        },
});

module.exports = MoneySchema;