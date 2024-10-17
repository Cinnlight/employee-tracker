// Package imports
import inquirer from 'inquirer';

// Local imports
import { connectToDb, pool } from './connection';
import { viewAllEmployees } from './functions/viewAllEmployees';
import { viewAllRoles } from './functions/viewAllRoles';
import { viewAllDepartments } from './functions/viewAllDepartments';
import { addEmployee } from './functions/addEmployee';
import { addRole } from './functions/addRole';
import { addDepartment } from './functions/addDepartment';
import { updateEmployeeRole } from './functions/updateEmployeeRole';

// Function using connectToDb to prompt pg to attempt a connection to the database
const startApp = async () => {
    try {
        await connectToDb();
        console.log('Connected to the database.');
        await mainMenu();
    } catch (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
    }
};

// Starts the database connection with pg
startApp();


// Main Inquirer menu for the application
export const mainMenu = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View all employees', 
                'View all roles', 
                'View all departments', 
                'Add employee', 
                'Add role', 
                'Add department', 
                'Update employee role', 
                'Exit'],
        },
    ]);

    switch (answer.choice) {
        case 'View all employees':
            await viewAllEmployees();
            await mainMenu();
            break;
        case 'View all roles':
            await viewAllRoles();
            await mainMenu();
            break;
        case 'View all departments':
            await viewAllDepartments();
            await mainMenu();
            break;
        case 'Add employee':
            await addEmployee(mainMenu);
            await mainMenu();
            break;
        case 'Add role':
            await addRole(mainMenu);
            await mainMenu();
            break;
        case 'Add department':
            await addDepartment(mainMenu);
            await mainMenu();
            break;
        case 'Update employee role':
            await updateEmployeeRole(mainMenu);
            await mainMenu();
            break;
        case 'Exit':
            await process.exit(0);
            break;
        default:
            console.log('Invalid choice, perhaps the choice you made is improperly set up in index.ts');
    }
};



        
