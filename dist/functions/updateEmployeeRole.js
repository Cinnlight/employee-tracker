"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeeRole = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const connection_1 = require("../connection");
const updateEmployeeRole = (mainMenu) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get all employees to display in the list of choices
        const employeesResult = yield connection_1.pool.query('SELECT id, first_name, last_name FROM employee');
        const employees = employeesResult.rows;
        if (employees.length === 0) {
            console.log('No employees found. Please add an employee before trying to update one.');
            yield mainMenu();
            return;
        }
        // Prompt user to select an employee
        const { employeeId } = yield inquirer_1.default.prompt([
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
        const { roleId } = yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'roleId',
                message: 'Enter the employee\'s new role ID:',
            },
        ]);
        // Update the employee's role in the db
        yield connection_1.pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [roleId, employeeId]);
        console.log('Employee role successfully updated.');
        yield mainMenu();
    }
    catch (err) {
        console.error('Error updating employee role:', err);
        yield mainMenu();
    }
});
exports.updateEmployeeRole = updateEmployeeRole;
