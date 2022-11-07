function occuriences(array){
    let words = {};

    for(const word of array){
        if(!words[word]){ // ако думата я няма
            words[word] = 0; // добави я, сетни и стойност 0
        }

        words[word]++; // инкрементирай с едно на всяко повторение
    }
    let wordsEntries = Object.entries(words); // обръщаме обекта в масив за да сортираме
    let sortedWords = wordsEntries.sort((a, b) => a[1] - b[1]); // сортираме по values, затова избираме по индекс от 1, key[0], value[1]
    
    for (const [word, occuriences] of sortedWords){
        console.log(`${word} -> ${occuriences} times`); 
    }


}
occuriences(["Here", "is", "the", "first", "sentence",
 "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);