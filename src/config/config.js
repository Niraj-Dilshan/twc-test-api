require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost/abc',
    secretKey: process.env.SECRET_KEY
};