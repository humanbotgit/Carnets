const ambientesSoftware = require('../models/ambientesSoftware.Model');

exports.getPabellones = async (req, res) => {
    try {
        const data = await ambientesSoftware.getPabellones();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};