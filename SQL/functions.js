// Select an item from a table
function getEmployees() {
    let sql = "SELECT * FROM department"; // Code that enters SQL

    // Getting into MySQL
    connection.query(sql, function(err, res) {
          if (err) throw err; // Catching error
          console.log(res); // Returns the response
          //  connection.end();
    });
};
// res is an object, and we can parse through it to get specific items

// // Adding to the table
// function addEmployee() {
// var query = connection.query(
//   "INSERT INTO table SET ?",
//   {
//     key: "value"
//   },
//   function(err, res) {
//     if(err) throw err;
//     console.log(res.affectedRows + " product(s) added");
//   }
// );
// }

// // Updating the table
// function updateEmployee() {
// const query = connection.query(
//   "UPDATE table SET ? WHERE ?",
//   [
//   { // Table Values
//     key: "value"
//   },
//   { // Where
//     id: "#"
//   }
//   ],

//   // Callback
//   function(err, res) {
//     if (err) throw err;
//     console.log(res.affectedRows + " updated");
//   }
// );
// }

// // Removing from table
// function removeEmployee(){
// connection.query(
//   "DELETE FROM table WHERE ?", // ? is a parameter, if we need to be more specific
//   {
//     id: "#"
//   },
//   function(err, res) {
//     if (err) throw err;
//     console.log(res.affectedRows + " deleted");
//   }
// );
// }


module.exports = {

    getEmployees,
    // addEmployee,
    // removeEmployee,
    // updateEmployee,

}