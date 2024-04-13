const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');
const middleware = require('../middlewares/middleware');

router.post('/create', middleware.authenticateToken, contactController.createContact);
router.get('/', middleware.authenticateToken, contactController.getContacts);
router.get('/contact/:id', middleware.authenticateToken, contactController.getContact);
router.put('/contact/:id', middleware.authenticateToken, contactController.updateContact);
router.delete('/contact/:id', middleware.authenticateToken, contactController.deleteContact);

module.exports = router;