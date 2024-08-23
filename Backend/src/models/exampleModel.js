// models/exampleModel.js
const db = require('../../config/db'); // Asegúrate de que la ruta sea correcta

const getExampleData = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM carnet');
        return rows;
    } catch (err) {
        throw new Error('Error fetching data: ' + err.message);
    }
};

module.exports = {
    getExampleData
};
