const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(config.mongodb_uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// log mongoDB URI 
console.log(`MongoDB URI: ${config.mongodb_uri}`);

// log port
console.log(`Port :${config.port}`)

// Routes
app.use('/auth', authRoutes);
app.use('/contacts', contactRoutes);

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
