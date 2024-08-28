const db = require('../../config/db')
const getPabellones = async (campus_id) => {
    try {
        const [pabellones] = await db.query('SELECT * FROM pabellon WHERE campus_id = ?', [campus_id]);
        const [ambientesxpabellon] = await db.query(
            'SELECT COUNT(*) AS ambientes_count FROM pabellon WHERE campus_id = ?', [campus_id]
        );
        const pabellon = {
            pabellones: pabellones,
            ambientes: ambientesxpabellon[0].ambientes_count
        };
        return pabellon;
    } catch (error) {
        throw new Error('Error fetching data: ' + error.message);
    }
}

const postPabellon = async (values) => {
    try {
        const [rows] = await db.query(
            'INSERT INTO pabellon(campus_id,pabellon_nombre) VALUES (?,?)',[values.campus_id,values.pabellon_nombre]);
        return [rows]
    } catch (error) {
        throw new Error('Error posting data: ' + error.message);
    }
}
module.exports = {
    getPabellones,
    postPabellon
}