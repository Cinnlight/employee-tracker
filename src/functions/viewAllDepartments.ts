import { pool } from '../connection';

export const viewAllDepartments = async () => {
    try {
        const result = await pool.query('SELECT * FROM department');
        console.table(result.rows);
    } catch (err) {
        console.error('Error querying database for departments:', err);
    }
};