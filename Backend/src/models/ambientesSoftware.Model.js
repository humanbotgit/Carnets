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
const postAmbientePabellon = async (pabellon_id, ambiente_nombre) => {
    try {
        await db.query(
            'INSERT INTO ambiente (pabellon_id, ambiente_nombre) VALUES (?, ?)',
            [pabellon_id, ambiente_nombre]
        );
        const [rows] = await db.query(
            'SELECT * FROM ambiente WHERE pabellon_id = ? AND ambiente_nombre = ? ORDER BY ambiente_id DESC LIMIT 1',
            [pabellon_id, ambiente_nombre]
        );
        return rows[0];
    } catch (error) {
        throw new Error('Error posting data: ' + error.message);
    }
};
const getSoftwareAmbientes = async (ambiente_id) =>{
    try {
        const [rows] = await db.query(
            'SELECT * FROM ambiente_software INNER JOIN software where ambiente_software.ambiente_id = ?',
            [ambiente_id] 
        )
        return rows;
    } catch (error) {
        throw new Error('Error posting data: ' + error.message);
    }
}
const postSoftwareAmbiente = async (software, ambiente_id) => {
    try {
        await db.query(
            'INSERT INTO software (software_nombre, software_exe) VALUES (?, ?)', 
            [software.software_nombre, software.software_exe]
        );
        const [rows] = await db.query(
            'SELECT software_id FROM software WHERE software_nombre = ? ORDER BY software_id DESC LIMIT 1',
            [software.software_nombre] 
        );
        return rows[0];
    } catch (error) {
        throw new Error('Error posting data: ' + error.message);
    }
}

module.exports = {
    getPabellones,
    postPabellon,
    postAmbientePabellon,
    getSoftwareAmbientes,
    postSoftwareAmbiente
}