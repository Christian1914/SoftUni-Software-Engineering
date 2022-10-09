function charsMeasure(firstChar, secondChar){
    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let allSymbols = [];

    for(let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++){
        //let singleChar = String.fromCharCode(currentChar);
        allSymbols.push(String.fromCharCode(currentChar));

    }
    console.log(allSymbols.join(' '));
}
