import inquirer from "inquirer";
import { pool } from "../connection";

export const addEmployee = async (mainMenu: () => Promise<void>) => {
    try{
        const answers = await inquirer.prompt([
            { type: 'input', name: 'first_name', message: 'Enter the employee\'s first name:' },
            { type: 'input', name: 'last_name', message: 'Enter the employee\'s last name:' },
            { type: 'input', name: 'role_id', message: 'Enter the employee\'s role ID:' },
            { type: 'input', name: 'manager_id', message: 'Enter the employee\'s manager ID:' },
        ]);

        const { first_name, last_name, role_id, manager_id } = answers;

        const result = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id || null]
        );

        console.log('Added employee:', result.rows[0]);
        await mainMenu();
    } catch (err) {
        console.error('Error adding employee:', err);
        await mainMenu();
    }
};