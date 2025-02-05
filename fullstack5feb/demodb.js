var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

// <<<<<<< Tabnine <<<<<<<
// /**//+
//  * This function establishes a connection to a MySQL database using the provided credentials.//+
//  *//+
//  * @param {function} callback - A callback function that will be invoked once the connection is established or if an error occurs.//+
//  *//+
//  * @param {object} err - An object representing the error that occurred during the connection attempt. If no error occurred, this parameter will be null.//+
//  *//+
//  * @returns {void}//+
//  *//+
//  * @throws {Error} If an error occurs during the connection attempt, this function will throw the error.//+
//  *//+
//  * @example//+
//  * con.connect(function(err) {//+
//  *   if (err) throw err;//+
//  *   console.log("Connected!");//+
//  * });//+
//  *///+


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




// >>>>>>> Tabnine >>>>>>>// {"conversationId":"7783f88a-aa9b-4226-8091-8bcc7f078c28","source":"instruct"}