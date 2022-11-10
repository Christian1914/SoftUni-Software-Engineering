function task(input){
    let storedProducts = {};


    for(let index = 0; index < input.length; index += 2){
        let currentProduct = input[index];
        let quantity = Number(input[index + 1]);
        
        if(!storedProducts.hasOwnProperty(currentProduct)){ // ако го няма, добави currentProduct и го сетни на 0
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += quantity; // ако вече го има просто го увеличи със стойността на същия продукт от инпута
    }
    
    
    
    
    for (const key in storedProducts) {
        console.log(`${key} -> ${storedProducts[key]}`); // фор ин цикъл специално за обекти
    }
}
task([ 

    'gold', 
    
    '155', 
    
    'silver', 
    
    '10', 
    
    'copper', 
    
    '17', 
    
    'gold', 
    
    '15' 
    
    ]);