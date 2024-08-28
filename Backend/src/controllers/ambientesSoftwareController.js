const ambientesSoftware = require('../models/ambientesSoftware.Model');

exports.getCampus = async (req, res) => {
    try {
        const data = await campusModel.getCampus();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
exports.postCampus = async (req, res) => {
    try {
        const campus = req.body.campus
        const data = await campusModel.postCampus(campus);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to post data' });
    }
};
