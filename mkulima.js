class Mkulima{
    constructor(){
    this.farmer = [];
    this.groceryVendor = [];
    this.product = [];
    this.addFarm = (farmId, name, farmer, phoneNumber, address) => {
    this.farmer.push({farmId,name,farmer,phoneNumber,address})
    }
    this.removeFarm = (farmId) => {
    let specific = this.farmer.find(item => item.farmId ===farmId);
    let farmIndex = this.farmer.indexOf(specific);
    this.farmer.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmerName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
    }
    }
    }
    
    let farmMkulima= new Mkulima();
    farmMkulima.addFarm("123","Ishema","Umuhoza","0789415454", "KK 123 K");
    farmMkulima.addFarm("023","Icyusa","Mugisha","0782444764", "KK 023 K");
    farmMkulima.addFarm("003","Ikirezi","Kayitete","078223234", "KN 003 K");
    console.log(farmMkulima.farms);
    
    farm1.removeFarm("023");
    console.log()