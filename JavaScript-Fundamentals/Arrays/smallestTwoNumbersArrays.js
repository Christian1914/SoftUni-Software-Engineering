function smallestNumber(array){
    let filteredArray = [];

    result = array.sort((a,b) => a - b).slice(0, 2);

    
    console.log(result.join(' '));


}
