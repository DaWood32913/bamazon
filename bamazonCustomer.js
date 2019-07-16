// Bamazon Installations

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
// Instantiate
var table = new Table({
    head: ['Item ID', 'Item', 'Department', 'Price', 'Qnty'],
    colWidths: [20, 40, 15, 15, 15]
  });

// Creating the connection to the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "Feb24021103",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Initializing Shopping
startShopping();

//Displays Store Item Database in CLI Table
function startShopping() {
    connection.query('SELECT * FROM Products', function (err, res) {
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity])
        }
        console.log(table.toString());

//Prompts User to select an item to purchase        
        inquirer.prompt([{
            name: "choice",
            type: "list",
            message: "Select an item to purchase.",

            choices: function (value) {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].product_name);
                }
                return choiceArray;
            }
          }, {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                  return false;  
                }
            }
            
        }]).then(function (answer) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].product_name === answer.choice) {
                    var selectedItem = res[i];
                }
            }
        })
    })
}