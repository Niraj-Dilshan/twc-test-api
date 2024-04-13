const contactService = require('../services/contactService');

exports.createContact = async (req, res) => {
    try {
        const contact = await contactService.createContact(req.body);
        res.json(contact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await contactService.getContacts();
        res.json(contacts);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.getContact = async (req, res) => {
    try {
        const contact = await contactService.getContact(req.params.id);
        res.json(contact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.updateContact = async (req, res) => {
    try {
        const contact = await contactService.updateContact(req.params.id, req.body);
        res.json(contact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.deleteContact = async (req, res) => {
    try {
        const contact = await contactService.deleteContact(req.params.id);
        res.json(contact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

