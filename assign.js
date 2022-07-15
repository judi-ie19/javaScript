// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00)

let purchases={
    "orange":30,
    "pine":20,
    "apple":5,
    purchase:function (fruits,price){
        return `${price}${fruits} for KES ${this.apple*price}` 
    }


}
console.log(purchases.purchase("apple",2))
   
    



