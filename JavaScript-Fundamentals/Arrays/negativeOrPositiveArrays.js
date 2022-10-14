function negativeOrPositive(numbers){
    let resultArray = [];
   
    for(const element of numbers){
        let number = Number(element);

        if(number < 0){
            resultArray.unshift(number)
        } else {
            resultArray.push(number)
        }
    }

    for(const number of resultArray){
        console.log(number);
    }
}
