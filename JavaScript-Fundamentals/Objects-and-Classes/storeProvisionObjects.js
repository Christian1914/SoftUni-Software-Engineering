function storeProvisions(avaiable, delivery){
    let storedProducts = {};


    for(let index = 0; index < avaiable.length; index += 2){
        let currentProduct = avaiable[index];
        storedProducts[currentProduct] = Number(avaiable[index + 1]);
    }
    for(let index = 0; index < delivery.length; index += 2){
        let currentProduct = delivery[index];
        if(!storedProducts.hasOwnProperty(currentProduct)){
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += Number(delivery[index + 1]);
    }
    
    for (const key in storedProducts) {
        console.log(`${key} -> ${storedProducts[key]}`); // фор ин цикъл специално за обекти
    }


}
storeProvisions([ 

    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' 
    
    ], 
    
    [ 
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' 
    
    ] );