function replace(input){
    let array = input.split('');
    let finalArray = [];

    for (let index = 0; index < array.length; index++) {
        const letter = array[index];
        const nextLetter = array[index + 1]

        if(letter != nextLetter){
            finalArray.push(letter)
        }
        
    }
    console.log(finalArray.join(''));
}
replace('NNNNNiiiiikkkkkooooollll');
