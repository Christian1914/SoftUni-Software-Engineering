function greaterThan(numbers){
    let arrayToManipulate = numbers.split(' ').map(Number);
    let resultArray = [];

   
    let average = arrayToManipulate.reduce((a, b) => a + b, 0) / arrayToManipulate.length;

    for(number of arrayToManipulate){
        if(number > average){
            resultArray.push(number);
        }
        if(arrayToManipulate.length < 2){
            console.log("No");
        }
        
    }
    resultArray.sort((a, b) => b - a);
    let theFive = resultArray.slice(0, 5);

    
    console.log(theFive.join(' '));
}
greaterThan('10 20 30');