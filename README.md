# Employee Tracker CLI Application

## Description
The **Employee Tracker CLI Application** is a command-line interface tool designed to help businesses manage their employees, roles, and departments efficiently. Built using **Node.js** with **PostgreSQL** as the database, this tool allows you to view, add, and update employee information directly through the command line. It uses **Inquirer** for user interaction and **pg** for managing the PostgreSQL database connections.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Database Schema](#database-schema)
- [Commands](#commands)
- [License](#license)

## Installation
To run this application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Cinnlight/employee-tracker.git
   cd employee-tracker
   ```

2. **Install Dependencies**:
   Ensure you have **Node.js** installed. Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

3. **Set Up PostgreSQL Database**:
   - Make sure you have **PostgreSQL** installed and running on your local machine.
   - Create a `.env` file in the root directory with the following content:
     ```
     DB_NAME=employee_db
     DB_USER=your_postgres_username
     DB_PASSWORD=your_postgres_password
     ```

4. **Run the SQL Schema**:
   Create the necessary database and tables by running the schema:
   ```bash
   psql -U your_postgres_username -d postgres -f schema.sql
   ```
   This command will create the `employee_db` database along with the required tables.

5. **Build the Project**:
   Compile the TypeScript files into JavaScript using:
   ```bash
   npm run build
   ```

6. **Start the Application**:
   Run the application with:
   ```bash
   npm run start
   ```

## Usage
Upon running the application, you will be presented with a main menu with options to manage your business's employee records. Navigate through the options to:

- View all employees, roles, and departments.
- Add new employees, roles, or departments.
- Update an employee's role.

Use the **arrow keys** to navigate, press **Enter** to select options, and follow the prompts to input new information.

## Features
- **View Employees**: Displays all employees, including their roles, departments, and managers.
- **View Roles and Departments**: Lists all roles or departments within the company.
- **Add Employees, Roles, and Departments**: Adds new data entries into the system to expand the workforce, roles, or departments.
- **Update Employee Role**: Assign a new role to an existing employee.
- **User-Friendly CLI**: Uses Inquirer for easy user interaction in the command line.

## Database Schema
The PostgreSQL database consists of three main tables:

1. **department**:
   - `id` (Primary Key)
   - `department_name` (Name of the department)

2. **role**:
   - `id` (Primary Key)
   - `title` (Title of the role)
   - `salary` (Salary for the role)
   - `department_id` (Foreign Key referencing `department`)

3. **employee**:
   - `id` (Primary Key)
   - `first_name` (First name of the employee)
   - `last_name` (Last name of the employee)
   - `role_id` (Foreign Key referencing `role`)
   - `manager_id` (Optional, Foreign Key referencing `employee` for managerial relationships)

## Commands
- **View Data**:
  - View all employees
  - View all roles
  - View all departments
- **Add Data**:
  - Add a new employee
  - Add a new role
  - Add a new department
- **Update Data**:
  - Update an existing employee's role
- **Exit**: Close the application

## Video Walkthrough
https://drive.google.com/file/d/1LRwW9ByvGhn55pVCdnWzIBNGvTD_ERGJ/view

## License
This project is licensed under the **MIT License**. Feel free to modify and use the code as per your needs.

---

If you have any questions or run into issues, feel free to reach out to [cinnlight@gmail.com]. You can also find me on GitHub at [Cinnlight](https://github.com/Cinnlight). Contributions and suggestions for improvement are always welcome!

