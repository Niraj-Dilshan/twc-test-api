const authService = require('../auth/authService');

exports.register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.json(user);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        else {
            return res.status(400).json({ message: err.message });
        }
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