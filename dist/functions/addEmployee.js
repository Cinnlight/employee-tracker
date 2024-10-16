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
exports.addEmployee = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const connection_1 = require("../connection");
const addEmployee = (mainMenu) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answers = yield inquirer_1.default.prompt([
            { type: 'input', name: 'first_name', message: 'Enter the employee\'s first name:' },
            { type: 'input', name: 'last_name', message: 'Enter the employee\'s last name:' },
            { type: 'input', name: 'role_id', message: 'Enter the employee\'s role ID:' },
            { type: 'input', name: 'manager_id', message: 'Enter the employee\'s manager ID:' },
        ]);
        const { first_name, last_name, role_id, manager_id } = answers;
        const result = yield connection_1.pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id || null]);
        console.log('Added employee:', result.rows[0]);
        yield mainMenu();
    }
    catch (err) {
        console.error('Error adding employee:', err);
        yield mainMenu();
    }
});
exports.addEmployee = addEmployee;
