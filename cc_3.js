// in class coding challenge 3

let inventory = [
    {sku:"SKU-001",name:"Eco Bottle",price:19.99,stock:42},
     
    {sku:"SKU-002",name:"Switch", price: 255,stock:200},

    {sku:"SKU-003",name:"midi piano", price: 300,stock:50},

    {sku:"SKU--004",name:"monster energy", price:2.99,stock:100}
    
]

inventory.forEach(obj =>console.log(`Name: ${obj.name}`));