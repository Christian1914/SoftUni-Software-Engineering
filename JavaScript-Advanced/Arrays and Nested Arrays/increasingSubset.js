function subset(array){

    let resultArray = [];

    let firstNumber = array.shift();
    resultArray.push(firstNumber);
    
    for (const number1 of array) {
        if(number1 >= resultArray[resultArray.length - 1]){
            resultArray.push(number1)
        }
    }
    return resultArray

}
subset([20,  

    3,  
    
    2,  
    
    15, 
    
    6,  
    
    1]   );