import { pool } from '../connection';

export const viewAllRoles = async () => {
    try {
        const result = await pool.query('SELECT * FROM role');
        console.table(result.rows);
    } catch (err) {
        console.error('Error querying database for roles:', err);
    }
};