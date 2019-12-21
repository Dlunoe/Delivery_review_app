const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    name: String,
    address: String,
    frontLoad: Boolean,
    dock: Number
})

module.exports = mongoose.model('Business', BusinessSchema);