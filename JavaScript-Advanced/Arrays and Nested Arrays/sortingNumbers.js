function sorting(array){

    let resultArray = [];

    for (let index = 0; index = array.length; index++) {
        let minNumber = Math.min(...array);
        let index = array.indexOf(minNumber);
        let numberToInsert = array.splice(index, 1);
        resultArray.push(numberToInsert.join());

        let biggestNumber = Math.max(...array);
        let indexx = array.indexOf(biggestNumber);
        let numberToInsertt = array.splice(indexx, 1);
        resultArray.push(numberToInsertt.join());

        
    }
    
    
    return resultArray
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48] 