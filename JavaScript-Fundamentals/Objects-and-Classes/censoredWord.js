function censore(sentence, magicWord){

    let arrayOfSentence = sentence.split(/[' ',]+/);
    for (let word of arrayOfSentence) {
        if(word === magicWord){
           word = word.split(' ')
           let topWord = word.join();
           let wordd = topWord.replace(/./g, "*");
           let joinedArray = arrayOfSentence.join(' ')
           let newString = joinedArray.replaceAll(topWord, wordd); // заменя ВСИЧКИ думи с думата която ни трябва, judge не го поддържа
           console.log(newString);
           break;
        }
    }
    
    
}
censore('A small sentence with small some small words', 'small');