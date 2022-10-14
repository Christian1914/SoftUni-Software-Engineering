function oddNumbers(array){
    let resultArray = [];

    for(i = 0; i < array.length; i++){
        if(i % 2 == 0){
            
        } else {
            let number = array[i];
            resultArray.push(number * 2)
        }
    }
    
    resultArray.reverse();
    console.log(resultArray.join(' '));



}
