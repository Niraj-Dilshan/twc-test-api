const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {
    authenticateToken: (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ message: 'Token is required' });

        const token = authHeader.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Token is malformed' });

        jwt.verify(token, config.secretKey, (err, user) => {
            if (err) return res.status(403).json({ message: 'Invalid token' });
            req.user = user;
            next();
        });
    }
};