// fruitsPriceList = [{ "orange": 30 }, { "mango": 15 }, { "avocado": 40 }];
// for (let i = 0; i < fruitsPriceList.length; i++) {


// }
// console.log(Object.keys(fruitsPriceList).length);
// console.log(fruitsPriceList);
// console.log(Object.keys(fruitsPriceList));
// console.log(Object.values(fruitsPriceList));

let a = [
    {
        name: "mango",
        price: 15
    },
    {
        name: "orange",
        price: 30
    },

    {
        name: "pineapple",
        price: 40
    }

]
let result = a.find(item => item.name==="mango");
console.log(result);
