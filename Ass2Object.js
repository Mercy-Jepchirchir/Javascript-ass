// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 60.0
class fruitKiosk {
    constructor(fruitName, quantity) {
        this.fruitName = fruitName;
        this.quantity = quantity;
        this.price = 30.00;
        this.calculateFruitCost = function () {
            return `${this.quantity} ${this.fruitName} for KES ${this.price * this.quantity}`;

        }
    }
}
var student = new fruitKiosk("pineapple", 4)
console.log(student.calculateFruitCost());

// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) method. 
// kioskCalc.getTotalCost( )  // returns “2 orange for KES 60”
class KioskCalc {
    constructor(fruitName, quantity, fruitsPriceList) {
        this.fruitName = fruitName;
        this.quantity = quantity;
        this.fruitsPriceList = {
            "orange": 30,
            "mango": 15,
            "avocado": 40
        },
            this.getAllTotalCost = function () {
                return `${this.quantity}  ${this.fruitName} for KES ${this.quantity * this.fruitsPriceList.mango}`
            }
    }
}


var mango = new KioskCalc("mango", 2)
console.log(mango.getAllTotalCost())




