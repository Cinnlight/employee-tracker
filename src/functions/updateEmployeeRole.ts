import inquirer from "inquirer";
import { pool } from "../connection";

export const updateEmployeeRole = async (mainMenu: () => Promise<void>) => {
    try {
        // Get all employees to display in the list of choices
        const employeesResult = await pool.query('SELECT id, first_name, last_name FROM employee');
        const employees = employeesResult.rows;

        if (employees.length === 0) {
            console.log('No employees found. Please add an employee before trying to update one.');
            await mainMenu();
            return;
        }

        // Prompt user to select an employee
        const { employeeId } = await inquirer.prompt([
            {
            type: 'list',
            name: 'employeeId',
            message: 'Select an employee to update:',
            choices: employees.map(employee => ({
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id,
            })),
            },
        ]);

        // Prompt user to update the employee's role
        const { roleId } = await inquirer.prompt([
            {
            type: 'input',
            name: 'roleId',
            message: 'Enter the employee\'s new role ID:',
            },
        ]);

        // Update the employee's role in the db
        await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [roleId, employeeId]);

        console.log('Employee role successfully updated.');
        await mainMenu();
    } catch (err) {
        console.error('Error updating employee role:', err);
        await mainMenu();
    }
};