function hardtask(array){
    
    let arrayToManipulate = array.pop();
    let newString = array.toString().split(' ');


    for (let magicWord of arrayToManipulate) {
        for (let word of newString) {
            if(word.includes('_')){
                if(word.startsWith('_') && !word.endsWith('_') || !word.startsWith('_') && word.endsWith('_')){
                    
                    if(magicWord.length + 1 === word.length){
                        let index = newString.indexOf(word);
                        newString.splice(index, 1, magicWord)
                    }
                }
                if(magicWord.length === word.length){
                    let index = newString.indexOf(word);
                    newString.splice(index, 1, magicWord)
                }
            }
        }
    }
    console.log(newString.join(' '));
}
hardtask(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', 
['glad', 'bring', 'pie', 'During', 'amazing', 'pharmacist', 'sprained']]);