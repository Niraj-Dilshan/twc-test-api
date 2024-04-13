const authService = require('../auth/authService');

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.json({ token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};