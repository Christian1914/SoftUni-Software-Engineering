function substring(firstString, startIndex, endIndex){
    let arrayString = firstString.split('');
    let array = [];
    
    for (let index = 0; index < arrayString.length; index++) {
        if(index === startIndex){
            let finalWord = arrayString.splice(startIndex, endIndex);
            array.push(finalWord);
            console.log(finalWord.join(''));
            
        }
    }
}
substring('ASentence', 1, 8);