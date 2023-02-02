function solution(){

    const storage = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    const storedElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function manager(str){
        const [command, ingredientOrProduct, quantity] = str.split(' ');

        if(command == 'restock'){
            storedElements[ingredientOrProduct] += Number(quantity);
            return 'Success'

        } else if(command == 'prepare'){
            let recipe = storage[ingredientOrProduct]; // даваме стойност на променливата 'рецепта' от storage обекта   
            for (const neededIngredient in recipe) { // правим цикъл през lemonade: {carbohydrate: 10, flavour: 20} 
                if(recipe[neededIngredient] * Number(quantity) >= storedElements[neededIngredient]){ // ако neededIngredient умножено по даденото ни количество дава резултат по голям от текущото ни количество в storedElements значи не ни достига и връщаме грешка
                    return `Error: not enough ${neededIngredient} in stock`
                }
            }
            for (const neededIngredient in recipe) { // ако сме влезнали в този цикъл значи имаме необходимото количество
                storedElements[neededIngredient] -= recipe[neededIngredient] * quantity; // нужната съставка я умножаваме по количеството и вадим резултата от нашето количество
            }
            return 'Success'

        } else if(command === 'report'){
            let resultArray = [];
            for (const key in storedElements) {
                resultArray.push(`${key}=${storedElements[key]}`)
            }
            return resultArray.join(' ')
        }
        
    }
    return manager;

}


let manager = solution ();
console.log (manager ("restock flavour 50")); // Success  
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock

console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));