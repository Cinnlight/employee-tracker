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
exports.mainMenu = void 0;
// Package imports
const inquirer_1 = __importDefault(require("inquirer"));
// Local imports
const connection_1 = require("./connection");
const viewAllEmployees_1 = require("./functions/viewAllEmployees");
const viewAllRoles_1 = require("./functions/viewAllRoles");
const viewAllDepartments_1 = require("./functions/viewAllDepartments");
const addEmployee_1 = require("./functions/addEmployee");
const addRole_1 = require("./functions/addRole");
const addDepartment_1 = require("./functions/addDepartment");
const updateEmployeeRole_1 = require("./functions/updateEmployeeRole");
// Function using connectToDb to prompt pg to attempt a connection to the database
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.connectToDb)();
        console.log('Connected to the database.');
        yield (0, exports.mainMenu)();
    }
    catch (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
    }
});
// Starts the database connection with pg
startApp();
// Main Inquirer menu for the application
const mainMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield inquirer_1.default.prompt([
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
            yield (0, viewAllEmployees_1.viewAllEmployees)();
            yield (0, exports.mainMenu)();
            break;
        case 'View all roles':
            yield (0, viewAllRoles_1.viewAllRoles)();
            yield (0, exports.mainMenu)();
            break;
        case 'View all departments':
            yield (0, viewAllDepartments_1.viewAllDepartments)();
            yield (0, exports.mainMenu)();
            break;
        case 'Add employee':
            yield (0, addEmployee_1.addEmployee)(exports.mainMenu);
            yield (0, exports.mainMenu)();
            break;
        case 'Add role':
            yield (0, addRole_1.addRole)(exports.mainMenu);
            yield (0, exports.mainMenu)();
            break;
        case 'Add department':
            yield (0, addDepartment_1.addDepartment)(exports.mainMenu);
            yield (0, exports.mainMenu)();
            break;
        case 'Update employee role':
            yield (0, updateEmployeeRole_1.updateEmployeeRole)(exports.mainMenu);
            yield (0, exports.mainMenu)();
            break;
        case 'Exit':
            yield process.exit(0);
            break;
        default:
            console.log('Invalid choice, perhaps the choice you made is improperly set up in index.js.');
    }
});
exports.mainMenu = mainMenu;
