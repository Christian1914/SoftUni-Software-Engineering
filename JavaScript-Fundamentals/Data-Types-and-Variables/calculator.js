function calsulate(firstNumber, operator, secondNumber){
    let sum = 0;
    if(operator === "+"){
        sum = firstNumber + secondNumber
    } else if (operator === "-"){
        sum = firstNumber - secondNumber
    } else if (operator === "/"){
        sum = firstNumber / secondNumber
    } else if (operator === "*"){
        sum = firstNumber * secondNumber
    }
    console.log(sum.toFixed(2))
}