function reversed(string){
    let array = string.split('').reverse();
    let half = array.length / 2
    let oneSentenceArray = [];
    let secondSentenceArray = [];

    for (let index = 0; index < array.length; index++) {
        const word = array[index];
        if(index >= half){
            oneSentenceArray.push(word)
        } else {
            secondSentenceArray.push(word)
        }
        
        
    }
    console.log(oneSentenceArray.join(''));
    console.log(secondSentenceArray.join(''));

}
reversed('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');