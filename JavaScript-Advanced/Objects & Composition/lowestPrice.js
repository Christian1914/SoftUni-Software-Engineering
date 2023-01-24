function lowestPrice(array){
    let object = {};

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let [town, product, price] = element.split(' | ');
        if(!object[product]){ // Ако го няма продукта в обекта го добавяме
            object[product] = {}; // добавяме го само като key
            object[product][town] = Number(price); // тук добавяме продукта, града и цената
        } else {
            object[product][town] = Number(price) // ако ги има вече ги подменяме с по ниската цена и съответния град
        }
    }
    let finalResult = [];

    for (const key in object) {
        let sorted = Object.entries(object[key]).sort((a, b) => a[1] - b[1]);
        let [town, price] = sorted[0];
        finalResult.push(`${key} -> ${price} (${town})`)
    }
    return finalResult.join('\n');

}
console.log(lowestPrice(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000']));