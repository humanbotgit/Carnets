const db = require('../../config/db')
const getPabellones = async (campus_id) =>{
    try {
        const [rows] = await db.query('SELECT * FROM pabellon WHERE campus_id = ?',campus_id);
        return rows
    } catch (error) {
        throw new Error('Error fetching data: ' + err.message);
    }
}
const postPabellon = async (values) => {
    try {
        const [rows] = await db.query(
            'INSERT INTO campus(campus_id,pabellon_nombre) VALUES (?,?)',values.campus_id,values.pabellon_nombre);
        return [rows]
    } catch (error) {
        throw new Error('Error posting data: ' + err.message);
    }
}
module.exports = {
    getPabellones,
    postPabellon
}