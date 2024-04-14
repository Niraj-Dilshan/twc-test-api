const contactService = require('../services/contactService');

exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, gender } = req.body;
        const userId = req.user.id;
        const contact = await contactService.createContact(userId, { name, email, phone, gender });
        res.json(contact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const userId = req.user.id;
        const contacts = await contactService.getContacts(userId);
        res.json(contacts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getContact = async (req, res) => {
    try {
        const userId = req.user.id;
        const contactId = req.params.id;
        const contact = await contactService.getContact(userId, contactId);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const userId = req.user.id;
        const contactId = req.params.id;
        const { name, email, phone, gender } = req.body;
        const updatedContact = await contactService.updateContact(userId, contactId, { name, email, phone, gender });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(updatedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const userId = req.user.id;
        const contactId = req.params.id;
        const deletedContact = await contactService.deleteContact(userId, contactId);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};