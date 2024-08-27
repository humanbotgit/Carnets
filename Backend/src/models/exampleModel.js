const db = require('../../config/db');

const getExampleData = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM ambiente');
        return rows;
    } catch (err) {
        throw new Error('Error fetching data: ' + err.message);
    }
};

module.exports = {
    getExampleData
};
