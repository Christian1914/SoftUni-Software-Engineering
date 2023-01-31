function typeOf(){
    let array = Array.from(arguments);
    const count = new Map(); // нещо като обект



    for (const element of array) {
        let type = typeof element
        console.log(`${type}: ${element}`);
        if(!count.has(type)){ // ако в нашия обект нямаме този type го добави, ако го имаме няма да влезе в проверката и ще отиде на следващия ред и ще увеличи брояча с едно
            count.set(type, 0); // го сетни на нула
        }
        count.set(type, count.get(type) + 1); // след като го има му увеличи брояча с едно тоест че го има един път вече
       
    }
    let result = Array.from(count.entries()).sort((a, b) => b[1] - a[1]) // превръщаме в масив обекта и сортираме само entries в низходящ ред




    for (const element of result) { // обхождаме обекта и Принтираме елементите
        console.log(element.join(' = '));
    }


}
typeOf({ name: 'bob'}, 3.333, 9.999)