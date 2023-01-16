function elements(array, count){
    let resultArray = [];

    for (let index = 0; index < array.length; index+= count) {
        const element = array[index];
        resultArray.push(element)
    }
    return resultArray

}
elements(['1',  

'2', 

'3',  

'4',  

'5'],  

6 )