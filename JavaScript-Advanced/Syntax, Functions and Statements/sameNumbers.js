function sameOrNot(number){
    let counter = 0;

    let array = number.toString().split('')
    let lastElement = array[array.length - 1]
    let itsSame = true;

    for (const number of array) {
        counter += Number(number)
    }
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element !== lastElement){
            itsSame = false;
        }
        
    }
    console.log(itsSame);
    console.log(counter);
}
sameOrNot(1234);