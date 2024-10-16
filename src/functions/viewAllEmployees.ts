import { pool } from '../connection';

export const viewAllEmployees = async () => {
    try {
        const result = await pool.query('SELECT * FROM employee');
        console.table(result.rows);
    } catch (err) {
        console.error('Error querying database for employees:', err);
    }
};