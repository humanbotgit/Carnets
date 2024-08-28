const db = require('../../config/db')
const getPabellones = async (campus_id) =>{
    try {
        const [rows] = await db.query('SELECT * FROM pabellon WHERE campus_id = ?',campus_id);
        return rows
    } catch (error) {
        throw new Error('Error fetching data: ' + err.message);
    }
}
module.exports = {
    getPabellones
}