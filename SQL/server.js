const mysql = require('mysql');

function server() {
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


  // Select an item from a table
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

module.exports = server;