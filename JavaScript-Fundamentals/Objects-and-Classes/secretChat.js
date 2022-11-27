function secretChat(input){
    let secretWord = input.shift();
    let instructions = input.slice();
    

    let instruction = instructions.shift();

    while(instruction != 'Reveal'){
        let arguments = instruction.split(':|:'); // сплитваме instructions по стрелките
        let instructionName = arguments.shift(); // взимаме командата
        
        if(instructionName === 'ChangeAll'){
            let firstLetter = arguments[0];
            let secondLetter = arguments[1];

            for (let letter of secretWord) {
                if(letter === firstLetter){
                    secretWord = secretWord.replace(firstLetter, secondLetter);
                    
                }
            }
            console.log(`${secretWord}`);
            
        } else if(instructionName === 'Reverse'){
            let substring = arguments[0];
            if(secretWord.includes(substring)){
                secretWord = secretWord.replace(substring, '')
                let arrayToReverse = substring.split(''); // ['?', 'u', 'o', 'y']
                let reversed = arrayToReverse.reverse().join('');
                let splittedSecretWord = secretWord.split(' ');
                splittedSecretWord.push(reversed);
                // конкатениране
                let concatanated = `${splittedSecretWord[0]}${splittedSecretWord[1]}`
                secretWord = concatanated;

                // secretWord = secretWord.replace(substring, reversed);
                console.log(`${secretWord}`);
            } else {
                console.log(`error`);
            }
        } else if(instructionName === 'InsertSpace'){
            let indexToInsert = Number(arguments[0]);
            let splitted = secretWord.split('');
            splitted.splice(indexToInsert, 0, ' ');
            let joined = splitted.join('');
            secretWord = joined
            console.log(`${secretWord}`);
            
        }
        
        
        instruction = instructions.shift();
    }
    console.log(`You have a new text message: ${secretWord}`);
}
secretChat([ 

    '?woHuiyare', 
  
    'Reverse:|:?woH', 
  
    'Reveal' 
  
  ]);