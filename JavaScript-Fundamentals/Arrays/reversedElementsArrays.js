function reverse(count, numbers){
    let emptyArray = [];

    for(let i = 0; i < count; i++){
        emptyArray[i] =  numbers[count - 1 - i]
    }
    console.log(emptyArray.join(' '));
}
