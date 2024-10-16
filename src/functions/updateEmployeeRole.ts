import inquirer from "inquirer";
import { pool } from "../connection";

export const updateEmployee = async (mainMenu: () => Promise<void>) => {