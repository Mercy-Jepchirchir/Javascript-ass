// fruitsPriceList = [{ "orange": 30 }, { "mango": 15 }, { "avocado": 40 }];
// for (let i = 0; i < fruitsPriceList.length; i++) {


// }
// console.log(Object.keys(fruitsPriceList).length);
// console.log(fruitsPriceList);
// console.log(Object.keys(fruitsPriceList));
// console.log(Object.values(fruitsPriceList));
class Mkulima{
    constructor(id, farmName, farmer, phoneNumber, address){
        this.farmer = farmer;
        this.id = id;
        this.farmName = farmName
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    setFarmer(newFarmer){
        this.farmer = newFarmer;
    }

}
const name = new Mkulima("37765751","Baringo","Mercy","0713520935","616 Korongo");
console.log(name);
name.setFarmer = "Nicholas";
console.log(name);

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
let b = a.map()
console.log(b);
let result = a.find(item => item.name==="mango");
console.log(result);
