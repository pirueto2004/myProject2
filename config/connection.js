var mysql = require("mysql");

//Read and set any environment variables with the dotenv package.
require("dotenv").config();

//Define database connection properties (host, user, password, and database name)
//Use production database when deployed.
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //else use localhost database for local development.
  //MySQL password is passed into connection.js from the .env file using the dotenv npm package.
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "pro2master_db"
  });
}
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
