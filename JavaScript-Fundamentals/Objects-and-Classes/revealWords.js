function revealWords(magicWord, string){
    let arrayToModify = string.split(' ');
    let magicWordArray = magicWord.split(', ');
    //let magicWordLength = magicWord.length;


    for (let magicWordd of magicWordArray) {
        let magicWorddLength = magicWordd.length;
        for (let word of arrayToModify) {
            wordLength = word.length;
            if(word.includes('*')){
                if(magicWorddLength === wordLength){
                    let index = arrayToModify.indexOf(word)
                    arrayToModify.splice(index, 1, magicWordd)
                }
            }
        }
    }

    console.log(arrayToModify.join(' '));
}
revealWords('great, learning, placee', 

'softuni is ***** ****** for ******** new programming languages' );