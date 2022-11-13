function censored(text, word){
    let result = text;

    while(result.includes(word)){
       result =  result.replace(word, word[0] + '*'.repeat(word.length))
    }
    console.log(result);

}
censored('A small sentence with some words', 'small');