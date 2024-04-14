const Contact = require('../models/contact');

exports.createContact = async (userId, { name, email, phone, gender }) => {
    const contact = new Contact({ user: userId, name, email, phone, gender });
    return await contact.save();
};

exports.getContacts = async (userId) => {
    return await Contact.find({ user: userId });
};

exports.getContact = async (userId, contactId) => {
    return await Contact.findOne({ _id: contactId, user: userId });
};

exports.updateContact = async (userId, contactId, { name, email, phone, gender }) => {
    return await Contact.findOneAndUpdate({ _id: contactId, user: userId }, { name, email, phone, gender }, { new: true });
};

exports.deleteContact = async (userId, contactId) => {
    return await Contact.findOneAndDelete({ _id: contactId, user: userId });
};
