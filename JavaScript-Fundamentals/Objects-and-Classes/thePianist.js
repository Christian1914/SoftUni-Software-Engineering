function pianist(input){
    let collectionLength = Number(input.shift());
    let collection = [];
    
    for (let index = 0; index < collectionLength; index++) {
        const element = input[index];
        collection.push(element)
        
    }
    
    for (const line of input) {
        let splittedLine = line.split('|');
        let command = splittedLine[0];
        let name = splittedLine[1];
        let singer = splittedLine[2];
        let key = splittedLine[3];
        
        

        if(command === 'Add'){
            
            let joined = collection.join(' ');
            if(!joined.includes(name)){
                let shifted = splittedLine.shift();
                collection.push(splittedLine.join('|'))
            }

            
                
            

        } else if (command === 'Remove'){
            for (const line of collection) {
                if(line.includes(name)){
                    let index = collection.indexOf(line);
                    collection.splice(index, 1);
                    console.log(`Successfully removed ${name}!`);
                }
            }
            
            console.log(`"Invalid operation! ${name} does not exist in the collection."`);
            
        } else if(command === 'ChangeKey'){
            for (const line of collection) {
                if(line.includes(name)){
                    let splitted = line.split('|'); // запазвам крайния резултат в променлива и после на непроменения елемент добавям променения в масива
                    let nameToChange = splitted[2];
                    let index = splitted.indexOf(nameToChange)
                    let spliced = splitted.splice(index, 1, singer)
                    let indexToChange = collection.indexOf(line)
                    
                    collection.splice(indexToChange, 1, splitted.join('|'))
                    
                }
            }
        }

    }
    
    for (let line of collection) {
        let splitted = line.split('|');
        let name = splitted[0];
        let compositor = splitted[1];
        let key = splitted[2];
        console.log(`${name} -> Composer: ${compositor}, Key: ${key}`); 
    }
}
pianist([ 

    '4', 
  
    'Eine kleine Nachtmusik|Mozart|G Major', 
  
    'La Campanella|Liszt|G# Minor', 
  
    'The Marriage of Figaro|Mozart|G Major', 
  
    'Hungarian Dance No.5|Brahms|G Minor', 
  
    'Add|Spring|Vivaldi|E Major', 
  
    'Remove|The Marriage of Figaro', 
  
    'Remove|Turkish March', 
  
    'ChangeKey|Spring|C Major', 
  
    'Add|Nocturne|Chopin|C# Minor', 
  
    'Stop' 
  
  ]);