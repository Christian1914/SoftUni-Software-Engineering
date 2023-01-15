function operations(...array){

    let number = array.shift();
    
    
    for (const command of array) {
        if(command === 'chop'){
            number = number / 2
            console.log(number);
        } else if(command === 'dice'){
            number = Math.sqrt(number)
            console.log(number);
        } else if(command === 'spice'){
            number += 1;
            console.log(number);
        } else if(command === 'bake'){
            number = number * 3
            console.log(number);
        } else if(command === 'fillet'){
            number = number * 0.8
            console.log(number.toFixed(1));
        }
        
    }
}
operations('32', 'chop', 'chop', 'chop', 'chop', 'chop' )