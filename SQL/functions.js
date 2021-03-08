// Select an item from a table
function getEmployees() {
    let sql = "SELECT * FROM department"; // Code that enters SQL

    // Getting into MySQL
    connection.query(sql, function(err, res) {
          if (err) throw err; // Catching error
          console.table(res); // Returns the response
          //  connection.end();
    });
};
// res is an object, and we can parse through it to get specific items

// Adding to the table
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

// Updating the table
function updateEmployee() {
const query = connection.query(
  "UPDATE table SET ? WHERE ?",
  [
  { // Table Values
    key: "value"
  },
  { // Where
    id: "#"
  }
  ],

  // Callback
  function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " updated");
  }
);
}

// Removing from table
function removeEmployee(){
connection.query(
  "DELETE FROM table WHERE ?", // ? is a parameter, if we need to be more specific
  {
    id: "#"
  },
  function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " deleted");
  }
);
}


module.exports = {

    getEmployees,
    addEmployee,
    removeEmployee,
    updateEmployee,

}