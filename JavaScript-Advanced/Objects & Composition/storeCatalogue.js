function storing(array){

    let storage = {};

    for (const line of array) {
        let [product, price] = line.split(' : ');
        let firstLetter = product[0];
        if(!storage.hasOwnProperty(firstLetter)){
            storage[firstLetter] = {};
        }
        storage[firstLetter][product] = Number(price);
    }
    let sorted = Object.keys(storage).sort((a, b) => a.localeCompare(b)); // сортираме първите букви на продуктите 
    

    for (const key of sorted) {
        console.log(key);
        let sortedProduct = Object.keys(storage[key]).sort((a, b) => a.localeCompare(b));

        for (const product of sortedProduct) {
            console.log(`  ${product}: ${storage[key][product]}`);
        }
    };
    
}
storing(['Appricot : 20.4', 

'Fridge : 1500', 

'TV : 1499', 

'Deodorant : 10', 

'Boiler : 300', 

'Apple : 1.25', 

'Anti-Bug Spray : 15', 

'T-Shirt : 10']);