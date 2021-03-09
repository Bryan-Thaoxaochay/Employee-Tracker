const mysql = require('mysql');

function get() {
  // create the connection information for the sql database
  const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
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
    let sql = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee LEFT JOIN role ON role.id = employee.id JOIN department ON role.id = department.id"; // Code that enters SQL

    // Getting into MySQL
    connection.query(sql, function(err, res) {
          if (err) throw err; // Catching error
          console.table(res); // Returns the response
          //  connection.end();
    });
  }
}



function add() {
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
    connection.query( // First Name
      "INSERT INTO employee SET ?",
      {
        first_name: ""
      },
      function(err, res) {
        if(err) throw err;
      }
    );
    connection.query( // Last Name
      "INSERT INTO employee SET ?",
      {
        last_name: ""
      },
      function(err, res) {
        if(err) throw err;
      }
    );
    connection.query( // Role
      "INSERT INTO role SET ?",
      {
        title: ""
      },
      function(err, res) {
        if(err) throw err;
      }
    );
    connection.query( // Department
      "INSERT INTO department SET ?",
      {
        name: ""
      },
      function(err, res) {
        if(err) throw err;
      }
    );
    connection.query( // Manager
      "INSERT INTO employee SET ?",
      {
        manager_id: ""
      },
      function(err, res) {
        if(err) throw err;
      }
    );
  }
}

function update() {
  // create the connection information for the sql database
  const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
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
        title: ""
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
  }
}


function remove() {
  // create the connection information for the sql database
  const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
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
  }
}

module.exports = {
  
  get,
  add,
  update,
  remove
  
}