const mysql = require('mysql');

function populateArray() {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'thisiscomplicated100%',
    database: 'employees_db',
  });

  connection.connect((err) => {
    if (err) throw err;
    employees();
  });


  // Getting
  function employees() {
    let sql = "SELECT employee.first_name, employee.last_name FROM employee "; // Code that enters SQL

    // Getting into MySQL
    connection.query(sql, function(err, res) {
          if (err) throw err; // Catching error
          var updateArray = [] // Returns the response
          connection.end();

          for(var i = 0; i < res.length; i++){
            let name = (res[i].first_name);
            updateArray.push(name);
          }
          // console.log(updateArray);

    });
  }
}


module.exports = populateArray;