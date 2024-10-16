INSERT INTO department (department_name)
VALUES  ('Engineering'),
        ('Finance'), 
        ('Legal'), 
        ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES  ('Software Engineer', 100000, 1),
        ('Accountant', 80000, 2),
        ('Lawyer', 120000, 3),
        ('Salesperson', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Alice', 'Johnson', 1, NULL),
        ('Bob', 'Smith', 2, 1),
        ('Charlie', 'Brown', 3, 1),
        ('David', 'Wilson', 4, 1),
        ('Eve', 'Williams', 1, NULL),
        ('Frank', 'Miller', 2, 5),
        ('Grace', 'Davis', 3, 5),
        ('Henry', 'Moore', 4, 5),
        ('Isabel', 'Taylor', 1, NULL),
        ('Jack', 'Anderson', 2, 9),
        ('Katie', 'Thomas', 3, 9),
        ('Larry', 'Jackson', 4, 9),
        ('Molly', 'White', 1, NULL),
        ('Nathan', 'Harris', 2, 13),
        ('Olivia', 'Martin', 3, 13),
        ('Peter', 'Thompson', 4, 13);