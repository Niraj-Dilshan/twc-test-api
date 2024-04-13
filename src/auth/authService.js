const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { validateEmail } = require('../utils/validation');

exports.register = async ({ email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    return await user.save();
};

exports.login = async ({ email, password }) => {

    if (!validateEmail(email)) {
        throw new Error('Invalid email format');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found or Invalid password');
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error('User not found or Invalid password');
    }

    const token = jwt.sign({ id: user._id }, config.secretKey, { expiresIn: '1h' });
    return token;
};


