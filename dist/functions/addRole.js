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
exports.addRole = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const connection_1 = require("../connection");
const addRole = (mainMenu) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answers = yield inquirer_1.default.prompt([
            { type: 'input', name: 'title', message: 'Enter the role title:' },
            { type: 'input', name: 'salary', message: 'Enter the role salary:' },
            { type: 'input', name: 'department_id', message: 'Enter the department ID the role belongs to:' },
        ]);
        const { title, salary, department_id } = answers;
        const result = yield connection_1.pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]);
        console.log('Added role:', result.rows[0]);
        yield mainMenu();
    }
    catch (err) {
        console.error('Error adding role:', err);
        yield mainMenu();
    }
});
exports.addRole = addRole;
