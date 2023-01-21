function population(array){

    let result = {};

    for (let line of array) {
        let mutatedLine = line.split(' <-> ')
        let name = mutatedLine[0];
        let population = Number(mutatedLine[1]);

        if(name in result){ // проверяваме дали името вече съществува в обекта с оператора IN 
            result[name] += population // ако го има, влизаме в проверката и добавяме към value на name популацията от повторението
        } else {
            result[name] = population // ако го няма го добавяме просто 
        }
    }
    
    for (const [name, population] of Object.entries(result)) { // изкарваме данните на нов ред 
        console.log(`${name} : ${population}`);
    }

}
population(['Istanbul <-> 100000', 

'Honk Kong <-> 2100004', 

'Jerusalem <-> 2352344', 

'Mexico City <-> 23401925', 

'Istanbul <-> 1000'] );