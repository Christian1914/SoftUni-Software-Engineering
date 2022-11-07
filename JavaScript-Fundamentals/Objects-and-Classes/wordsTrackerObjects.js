function tracker(array){
    let finalWords = {};

    let topArray = array.shift().split(' ');

    for (const word of array) {
        if(topArray.includes(word)){
            finalWords[word] = 0;
        }
        
    }
    for (const word of array) {
        if(topArray.includes(word)){
            finalWords[word]++;
        }
        
    }
    let wordsEntries = Object.entries(finalWords);
    let sortedWords = wordsEntries.sort((a, b) => b[1] - a[1]);

    for (const [word, occuriences] of sortedWords){
        console.log(`${word} -> ${occuriences} times`); 
    }
}
tracker([ 

    'is the',  
    
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);