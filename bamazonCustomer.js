// Bamazon Installations

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
// Instantiate
var table = new Table({
    head: ['Item ID', 'Item', 'Price', 'Qnty'],
    colWidths: [20, 40, 15, 15]
  });

// Creating the connection to the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});