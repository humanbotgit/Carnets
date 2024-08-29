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
exports.postPabellon = async (req, res) => {
    try {
        const values = req.body.values
        const data = await ambientesSoftware.postPabellon(values);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to post data'+err });
    }
};
exports.postAmbiente = async (req, res) => {
    try {
        const pabellon_id = req.body.pabellon_id
        const ambiente_nombre = req.body.ambiente_nombre
        const data = await ambientesSoftware.postAmbientePabellon(pabellon_id,ambiente_nombre);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to post data'+err });
    }
};