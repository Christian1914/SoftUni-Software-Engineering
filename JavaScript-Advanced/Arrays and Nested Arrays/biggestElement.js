function biggestOnes(array){

    let resultArray = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        for (const number of element) {
            resultArray.push(number);
        }
        
    }

    console.log(Math.max(...resultArray));

}
biggestOnes([[20, 50, 10], [8, 33, 145]]  )