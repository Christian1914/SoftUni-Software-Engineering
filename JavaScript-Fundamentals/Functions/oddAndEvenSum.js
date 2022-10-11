function oddEven(number){
    let oddSum = 0;
    let evenSum = 0;
    let textNumber = number.toString();

    for(i = 0; i < textNumber.length; i++){
        let currentNumber = Number(textNumber[i]);
        if(currentNumber % 2 == 0){
            evenSum += currentNumber
        } else {
            oddSum += currentNumber
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
