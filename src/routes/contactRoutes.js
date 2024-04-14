const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');
const middleware = require('../middlewares/middleware');

router.post('/', middleware.authenticateToken, contactController.createContact);
router.get('/', middleware.authenticateToken, contactController.getContacts);
router.get('/:id', middleware.authenticateToken, contactController.getContact);
router.put('/:id', middleware.authenticateToken, contactController.updateContact);
router.delete('/:id', middleware.authenticateToken, contactController.deleteContact);

module.exports = router;