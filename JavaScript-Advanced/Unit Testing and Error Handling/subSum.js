function sub(arrayInput, startIndex, endIndex){

    if(Array.isArray(arrayInput) == false){
        return NaN;
    }
    if(startIndex < 0){
        startIndex = 0;
    }
    return arrayInput.slice(startIndex, endIndex + 1).map(Number).reduce((acc, x) => acc + x, 0);

    

}
sub([10, 'twenty', 30, 40], 0, 2);