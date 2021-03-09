const inquirer = require('inquirer');
const server = require('./SQL/server');

function employeeManagement() {
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
                choices: [],
                when: (responses) => responses.purpose === 'Remove Employee'
            },
            // Updating an employee - a list of who they want to update, update employee role
            {
                name: 'roleChange',
                type: 'input',
                message: 'What would you like to change their role to?',
                when: (responses) => responses.purpose === 'Update Employee Role'
            },
        ]) // .prompt

        .then((responses) => {

            // Get
            if (responses.purpose === 'View All Employees') {
                server.get();
            }

            // Add
            if (responses.purpose === 'Add Employee') {

                async function variables(){
                    let firstName = responses.firstName;
                    let lastName = responses.lastName;
                    let role = responses.role;
                    let department = responses.department;
                    let manager = responses.manager;

                    await server.add(firstName, lastName, role, department, manager);
                }

                variables();

            }

            // Delete
            if (responses.purpose === 'Remove Employee') {
                server.delete();
            }

            // Update
            if (responses.purpose === 'Update Employee Role') {
                server.update();
            }

        }) // .then
}

employeeManagement();