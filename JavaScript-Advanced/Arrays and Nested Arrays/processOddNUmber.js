function oddNumbers(array){
    let resultArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(index % 2 != 0){
            resultArray.push(element + element)
        }
        
    }
    console.log(resultArray.reverse());

}
oddNumbers([3, 0, 10, 4, 7, 3] );