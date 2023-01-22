function lowestPricesInCities(input) {
    let data = input.slice();
 
    const storage = {};
 
    for (let line of data) {
        let [city, item, price] = line.split(' | ');
        price = Number(price);
 
        if (!storage[item]) { // Ако го няма item в обекта го добавяме
            storage[item] = { qty: price, city }; // добавяме и цената и града
        } else {
            if (storage[item].qty > price) { // ако цената на продукта който е в обекта вече е по висока от итерацията в момента, слагаме сегашната цена
                storage[item] = { qty: price, city };
            }
        }
    }
 
    let products = Object.keys(storage); // от обекта вземаме keys и ги вкарваме в променлива тоест в масив
    
    for (const product of products) {
        console.log(`${product} -> ${storage[product].qty} (${storage[product].city})`);
    }   
}
lowestPricesInCities(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000']);