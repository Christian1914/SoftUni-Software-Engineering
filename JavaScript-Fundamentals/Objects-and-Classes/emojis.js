function detector(input){
    let arrayToManipulate = input.join(' ').split(/[., ]+/);;
    let count = '';
    let sum = 1;
    let sumOfChars = 0;
    let coolestWords = [];
    let foundEmojis = 0;

    let arrayToGetNumbers = input.join('').split('');
    for (let letter of arrayToGetNumbers) {
        

        if(!isNaN(letter)){
            count += letter
        }
    }
    let numbers = count.replace(/ /g,'');

    for (const digit of numbers) {
        let number = Number(digit);
        sum *= number;
    }

    for (let word of arrayToManipulate) {
        if(word.startsWith('::') && word.endsWith('::') || word.startsWith('**') && word.endsWith('**')){
            let wordLength = word.length - 4;
            if(wordLength >= 3){
                let noSpecialCharacters = word.replace(/[^a-zA-Z0-9 ]/g, '');
                if(!containsNumbers(noSpecialCharacters)){
                    if(firstIsUppercase(noSpecialCharacters)){
                        let slicedFirstLetter = noSpecialCharacters.substring(1);
                        if(isLowerCase(slicedFirstLetter)){
                            foundEmojis += 1
                            for (let index = 0; index < noSpecialCharacters.length; index++) {
                                let i = noSpecialCharacters.charCodeAt(index);
                                sumOfChars += i
                            }
                            if(sumOfChars > sum){
                                coolestWords.push(word);
                            }
                            sumOfChars = 0;
                        }
                    }
                }
                
            }
        }
    }


    function firstIsUppercase(str) {
        if (typeof str !== 'string' || str.length === 0) {
          return false;
        }
      
        if (str[0].toUpperCase() === str[0]) {
          return true;
        }
      
        return false;
    }

    function isLowerCase (input) {  
        return input === String(input).toLowerCase()
    }

    function containsNumbers(str) {
        return /\d/.test(str);
    }

   
    console.log(`Cool threshold: ${sum}`);
    console.log(`${foundEmojis} emojis found in the text. The cool ones are:`);
    for (const emoji of coolestWords) {
        console.log(emoji);
    }

}
detector(["1", "**English**."]);