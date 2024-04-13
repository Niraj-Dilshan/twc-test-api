const Contact = require('../models/contact');

exports.createContact = async ({ name, email, phone, gender }) => {
    const contact = new Contact({ name, email, phone, gender });
    return await contact.save();
};

exports.getContacts = async () => {
    return await Contact.find();
};

exports.getContact = async (id) => {
    return await Contact.findById(id);
}

exports.updateContact = async (id, { name, email, phone, gender }) => {
    return await Contact.findByIdAndUpdate(id, { name , email, phone, gender }, { new: true });
}

exports.deleteContact = async (id) => {
    return await Contact.findByIdAndDelete(id);
}