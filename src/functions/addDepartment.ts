import inquirer from "inquirer";
import { pool } from "../connection";

export const addDepartment = async (mainMenu: () => Promise<void>) => {
    try{
        const answers = await inquirer.prompt([
            { type: 'input', name: 'department_name', message: 'Enter the department name:' },
        ]);

        const { department_name } = answers;

        const result = await pool.query('INSERT INTO department (department_name) VALUES ($1) RETURNING *', [department_name]
        );

        console.log('Added department:', result.rows[0]);
        await mainMenu();
    } catch (err) {
        console.error('Error adding department:', err);
        await mainMenu();
    }
};