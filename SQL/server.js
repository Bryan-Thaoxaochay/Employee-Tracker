const mysql = require('mysql');

function get() {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'thisiscomplicated100%',
    database: 'employees_db',
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    getEmployees();
  });


  // Getting
  function getEmployees() {
    let sql = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department FROM employee LEFT JOIN role ON role.id = employee.id JOIN department ON role.id = department.id"; // Code that enters SQL

    // Getting into MySQL
    connection.query(sql, function(err, res) {
          if (err) throw err; // Catching error
          console.table(res); // Returns the response
          connection.end();
    });
  }
}



function add(firstName, lastName, role, department, salary, manager, departmentID) {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'thisiscomplicated100%',
    database: 'employees_db',
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    addEmployee();
  });

  // Adding
  function addEmployee() {
    connection.query( // Employee
      "INSERT INTO employee SET ?",
      {
        first_name: firstName,
        last_name: lastName,
        manager: manager
      },
      function(err, res) {
        if(err) throw err;
      }
    );
    connection.query( // Role
      "INSERT INTO role SET ?",
      {
        title: role,
        salary: salary,
        department_id: departmentID
      },
      function(err, res) {
        if(err) throw err;
      }
    );
    connection.query( // Department
      "INSERT INTO department SET ?",
      {
        department: department
      },
      function(err, res) {
        if(err) throw err;
      }
    );
    
    connection.end();
  }
}

function update(updatedTitle) {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'thisiscomplicated100%',
    database: 'employees_db',
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    updateEmployee();
  });

  // Updating
  function updateEmployee() {
    connection.query(
      "UPDATE role SET ? WHERE ?",
      [
      {
        title: updatedTitle
      },
      { // Where
        id: ""
      }
      ],

      // Callback
      function(err, res) {
        if (err) throw err;
      }
      
    );

    connection.end();
  }
}


function remove() {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'thisiscomplicated100%',
    database: 'employees_db',
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    removeEmployee();
  });

  // Removing from table
  function removeEmployee(){
    connection.query(
      "DELETE FROM department WHERE ?",
      {
        id: ""
      },
      function(err, res) {
        if (err) throw err;
      }
    );
    connection.query(
      "DELETE FROM employee WHERE ?",
      {
        id: ""
      },
      function(err, res) {
        if (err) throw err;
      }
    );
    connection.query(
      "DELETE FROM role WHERE ?",
      {
        id: ""
      },
      function(err, res) {
        if (err) throw err;
      }
    );

    connection.end();
  }
}

module.exports = {
  
  get,
  add,
  update,
  remove

}