const exampleModel = require('../models/exampleModel');

exports.getExample = async (req, res) => {
    try {
        const data = await exampleModel.getExampleData();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
