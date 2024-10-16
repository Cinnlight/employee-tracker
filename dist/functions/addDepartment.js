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
exports.addDepartment = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const connection_1 = require("../connection");
const addDepartment = (mainMenu) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answers = yield inquirer_1.default.prompt([
            { type: 'input', name: 'department_name', message: 'Enter the department name:' },
        ]);
        const { department_name } = answers;
        const result = yield connection_1.pool.query('INSERT INTO department (department_name) VALUES ($1) RETURNING *', [department_name]);
        console.log('Added department:', result.rows[0]);
        yield mainMenu();
    }
    catch (err) {
        console.error('Error adding department:', err);
        yield mainMenu();
    }
});
exports.addDepartment = addDepartment;
