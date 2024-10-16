import inquirer from "inquirer";
import { pool } from "../connection";

export const addRole = async (mainMenu: () => Promise<void>) => {
    try{
        const answers = await inquirer.prompt([
            { type: 'input', name: 'title', message: 'Enter the role title:' },
            { type: 'input', name: 'salary', message: 'Enter the role salary:' },
            { type: 'input', name: 'department_id', message: 'Enter the department ID the role belongs to:' },
        ]);

        const { title, salary, department_id } = answers;

        const result = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]
        );

        console.log('Added role:', result.rows[0]);
        await mainMenu();
    } catch (err) {
        console.error('Error adding role:', err);
        await mainMenu();
    }
}