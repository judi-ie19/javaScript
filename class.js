// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
// and takes two parameters (fruit, quantity) when initialized i.e. 
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
// getTotalCost( ) methods
 class KioskCalc{
    constructor(fruit,quanity){
        this.fruit=fruit
        this.quanity=quanity
        this.fruitsPriceList={ "orange": 30, "mango": 15, "avocado": 40 };
        this.getTotalCost=function(){
        return `${fruit} ${quanity} for KES ${quanity*this.fruitsPriceList.mango}`
        }
    }

 }
 var kiosk=new KioskCalc("mango",4)
 console.log(kiosk.getTotalCost())