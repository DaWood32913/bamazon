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

    password: "Feb24021103",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Initializing Shopping
startShopping();

function startShopping() {
    connection.query('SELECT * FROM Products', function (err, res) {
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].price.toFixed(2), res[i].stock_quantity])
        }
        console.log(table.toString());
    })
}