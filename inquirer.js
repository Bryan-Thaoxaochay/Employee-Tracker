const inquirer = require('inquirer');
const server = require('./SQL/server');

inquirer
    .prompt([
        {
            name: 'purpose',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Add Employee', 'Remove Employee', 'Update Employee Role', 'View All Employees']
        },
        // Adding an employee - first name, last name, role, manager
        {
            name: 'firstName',
            type: 'input',
            message: 'What is their first name?',
            when: (responses) => responses.purpose === 'Add Employee'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is their last name?',
            when: (responses) => responses.purpose === 'Add Employee'
        },
        {
            name: 'role',
            type: 'input',
            message: 'What is their role?',
            when: (responses) => responses.purpose === 'Add Employee'
        },
        {
            name: 'department',
            type: 'input',
            message: 'What department are they in?',
            when: (responses) => responses.purpose === 'Add Employee'
        },
        {
            name: 'manager',
            type: 'input',
            message: 'Who is their manager?',
            when: (responses) => responses.purpose === 'Add Employee'
        },
        // Removing an employee - a list of who they want to eliminate
        {
            name: 'eliminate',
            type: 'list',
            message: 'Who do you want to remove?',
            when: (responses) => responses.purpose === 'Remove Employee'
        },
        // Updating an employee - a list of who they want to update, update employee role
        {
            name: 'roleChange',
            type: 'input',
            message: 'What would you like to change their role to?',
            when: (responses) => responses.purpose === 'Update Employee Role'
        },
    ]) // Inquirer

    .then((responses) => {

        if (responses.purpose === 'View All Employees') {
            server.getEmployees;
        }

    })