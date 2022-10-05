function solve(input){
    let firstSum = 0;
    let secondSum = 0;
    let resulArray = [];
    
    for(let i = 0; i < input.length; i++){
        let number = input[i];
        firstSum += number
    
        
        if(number % 2 == 0){
            number += input.indexOf(number);
            resulArray.push(number)
        } else {
            number -= input.indexOf(number);
            resulArray.push(number)
        }
        //console.log(input)
        
    }
    //for(let i = 0; i < resulArray.length; i++){
        //let number = resulArray[i];
        //secondSum += number
    //}
    for(let textNumber of resulArray){
        textNumber = Number(textNumber)
        secondSum += textNumber
    }
    console.log(resulArray)
    console.log(firstSum)
    console.log(secondSum)
}
