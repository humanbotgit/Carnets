const ambientesSoftware = require('../models/ambientesSoftware.Model');

exports.getPabellones = async (req, res) => {
    try {
        const campus_id = req.params.campus_id
        const data = await ambientesSoftware.getPabellones(campus_id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};