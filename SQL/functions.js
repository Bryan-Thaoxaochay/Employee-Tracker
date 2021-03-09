// Selecting
function getEmployees() {
    let sql = "SELECT * FROM role"; // Code that enters SQL

    // Getting into MySQL
    connection.query(sql, function(err, res) {
          if (err) throw err; // Catching error
          console.log(res); // Returns the response
          //  connection.end();
    });
};
// res is an object, and we can parse through it to get specific items

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

// Updating
function updateEmployee() {
  const query = connection.query(
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


module.exports = {

    getEmployees,
    addEmployee,
    removeEmployee,
    updateEmployee,

}