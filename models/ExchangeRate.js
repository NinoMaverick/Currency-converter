const mongoose = require("mongoose");
const MoneySchema = require("./MoneySchema");

const exchangeRateSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    uppercase: true,
    length: 3,
  },
  to: {
    type: String,
    required: true,
    uppercase: true,
    length: 3,
  },
  rate: {
    type: Number,
    required: true,
    min: 0,
  },
  source: {
    type: String,
    enum: ["CurrencyFreaks", "Frankfurter"],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  originalAmount: MoneySchema,
  convertedAmount: MoneySchema,
});

module.exports = mongoose.model("ExchangeRate", exchangeRateSchema);
