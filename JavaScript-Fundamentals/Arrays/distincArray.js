//function repeats(array){
//    
//    let uniqueNumbers = [...new Set(array)];
//
//    console.log(uniqueNumbers.join(' '));
//
//}
//repeats([20, 8, 12, 13, 4, 4, 8, 5]);

function repeats(array){
    let filteredArray = [];
    
    for(let index = 0; index < array.length; index++){ // Завъртаме цикъл през масива да проверяваме кое число го има в новия масив
        if(!filteredArray.includes(array[index])){ // Което число го няма в новия масив го добавяме чрез push метода
            filteredArray.push(array[index]) // Така в новия масив остават числата които не се повтарят
        }
    }
    console.log(filteredArray.join(' '));

}
