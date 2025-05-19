const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, unique: true, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Person', personSchema);
