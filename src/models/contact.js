const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        match: [/^[A-Za-z.\s]+$/, 'Name can only contain A-Z, a-z, ., and spaces']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10}$|^\+\d{1,2}\s?\d{9}$/, 'Phone number must be 10 digits or in the format +00000000000']
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    }
});

module.exports = mongoose.model('Contact', contactSchema);