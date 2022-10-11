function palindrome(arrayOfNumbers){

    for(index = 0; index < arrayOfNumbers.length; index++){
        let numberAsString = arrayOfNumbers[index].toString();
        let reversedString = numberAsString.split('').reverse().join('');
        if(numberAsString === reversedString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
    //console.log(currentReversedNumber);
}
