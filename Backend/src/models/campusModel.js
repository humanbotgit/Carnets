const db = require('../../config/db')

const getCampus = async () =>{
    try {
        const [rows] = await db.query('SELECT * FROM campus');
        return [rows]
    } catch (error) {
        throw new Error('Error fetching data: ' + err.message);
    }
}
const postCampus = async (campus) => {
    try {
        const [rows] = await db.query('INSERT INTO campus(campus_nombre) VALUES (?)',campus);
        return [rows]
    } catch (error) {
        throw new Error('Error posting data: ' + err.message);
    }
}
module.exports = {
    getCampus,
    postCampus
}