const inquirer = require('inquirer');
const mysql = require('mysql');
const util = require('util');
const server = require('./SQL/server');
const populateArray = require('./SQL/functions');

function employeeManagement(arrayResult) {
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
                type: 'list',
                message: 'What is their role?',
                choices: ['Coach', 'Striker', 'Winger', 'Centre-Midfielder', 'Outside-Midfielder', 'Centreback', 'Fullback', 'Keeper'],
                when: (responses) => responses.purpose === 'Add Employee'
            },
            {
                name: 'department',
                type: 'list',
                message: 'What department are they in?',
                choices: ['Management', 'Attacking', 'Midfield', 'Defending'],
                when: (responses) => responses.purpose === 'Add Employee'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is there salary? (No commas)',
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
                // choices: [ ],
                when: (responses) => responses.purpose === 'Remove Employee'
            },
            // Updating an employee - a list of who they want to update, update employee role
            {
                name: 'employeeUpdate',
                type: 'list',
                message: 'Who do you want to update?',
                choices: ['Alisson Becker', 'Mohamed Salah', 'Jurgen Klopp', 'Jordan Henderson'],
                when: (responses) => responses.purpose === 'Update Employee Role'
            },
            {
                name: 'roleChange',
                type: 'list',
                message: 'What would you like to change their role to?',
                choices: ['Coach', 'Striker', 'Winger', 'Centre-Midfielder', 'Outside-Midfielder', 'Centreback', 'Fullback', 'Keeper'],
                when: (responses) => responses.purpose === 'Update Employee Role'
            },
        ]) // .prompt

        .then((responses) => {

            // Get
            if (responses.purpose === 'View All Employees') {
                
                async function getFunction () {
                    server.get();

                    await employeeManagement();
                }

                getFunction();

            }

            // Add
            if (responses.purpose === 'Add Employee') {

                async function employeeInfo(){
                    let firstName = responses.firstName;
                    let lastName = responses.lastName;
                    let role = responses.role;
                    let department = responses.department;
                    let salary = responses.salary;
                    let manager = responses.manager;

                    if(department === 'Management'){
                        let departmentID = 4;
                        await server.add(firstName, lastName, role, department, salary, manager, departmentID);
                    }
                    else if (department === 'Attacking'){
                        let departmentID = 3;
                        await server.add(firstName, lastName, role, department, salary, manager, departmentID);
                    }
                    else if (department === 'Midfield'){
                        let departmentID = 2;
                        await server.add(firstName, lastName, role, department, salary, manager, departmentID);
                    }
                    else if (department === 'Defending'){
                        let departmentID = 1;
                        await server.add(firstName, lastName, role, department, salary, manager, departmentID);
                    };

                }

                employeeInfo();

            }

            // Delete
            if (responses.purpose === 'Remove Employee') {
                server.delete();
            }

            // Update
            if (responses.purpose === 'Update Employee Role') {
                // let updatedEmployee = responses.employeeUpdate;
                let updatedTitle = responses.roleChange;
                server.update(updatedTitle);
            }

        }) // .then
};
const array = ['You', 'Me', 'Them']


async function test() {
    const arrayResult = populateArray.updateArray;
    await console.log(arrayResult);
    await employeeManagement(arrayResult);
}

// test();

employeeManagement();