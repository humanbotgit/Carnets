const db = require('../../config/db');
const getPabellones = async (campus_id) => {
    try {
          const [pabellones] = await db.query(
            'SELECT * FROM pabellon WHERE campus_id = ?', [campus_id]
        );
        const [ambientesxpabellon] = await db.query(
            `SELECT pabellon.pabellon_id, pabellon.pabellon_nombre, 
                    ambiente.ambiente_id, ambiente.ambiente_nombre 
             FROM pabellon 
             JOIN ambiente ON pabellon.pabellon_id = ambiente.pabellon_id 
             WHERE pabellon.campus_id = ? 
             ORDER BY pabellon.pabellon_id, ambiente.ambiente_nombre ASC`,
            [campus_id]
        );
        const pabellonesMap = pabellones.map(pabellon => ({
            ...pabellon,
            ambientes: ambientesxpabellon
                .filter(amb => amb.pabellon_id === pabellon.pabellon_id)
                .map(amb => ({
                    ambiente_id: amb.ambiente_id,
                    ambiente_nombre: amb.ambiente_nombre
                }))
        }));
        return { pabellones: pabellonesMap };
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
const postAmbientePabellon = async (pabellon_id,ambiente_nombre)=>{
    try {
        const [rows] = await db.query(
            'INSERT INTO ambiente(pabellon_id,ambiente_nombre) VALUES (?,?)',[pabellon_id,ambiente_nombre]);
        return [rows]
    } catch (error) {
        throw new Error('Error posting data: ' + error.message);
    }
}
module.exports = {
    getPabellones,
    postPabellon,
    postAmbientePabellon
}