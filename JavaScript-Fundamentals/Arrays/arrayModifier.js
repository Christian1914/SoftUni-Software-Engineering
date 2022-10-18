function arrayModifier(array){
    let arrayToManipulate = array.shift().split(' ').map(Number);
    let subtract = 1;

    for(let index = 0; index < array.length; index++){
        let currentCommand = array[index].split(' ');
        if(currentCommand[0] === "swap"){
            //let tmp = a[4];
            //a[4] = a[3];
            //a[3] = tmp;
            let firstIndex = Number(currentCommand[1]);
            let secondindex = Number(currentCommand[2]);
            let temp = arrayToManipulate[firstIndex];
            arrayToManipulate[firstIndex] = arrayToManipulate[secondindex];
            arrayToManipulate[secondindex] = temp;
            
            
        } else if(currentCommand[0] === "multiply"){
            let firstSum = Number(currentCommand[1]);
            let secondSum = Number(currentCommand[2])
            let first = arrayToManipulate[firstSum];
            let second = arrayToManipulate[secondSum];
            arrayToManipulate[firstSum] = first * second;
            
        }else if(currentCommand[0] === "decrease"){
            arrayToManipulate = arrayToManipulate.map(el => el - 1);


        } 
        //if(currentCommand[0] === "end"){
        //    break;
    //
        //}
            
    }
    console.log(arrayToManipulate.join(', '));
}
arrayModifier([ 

    '1 2 3 4', 
  
    'swap 0 1', 
  
    'swap 1 2', 
  
    'swap 2 3', 
  
    'multiply 1 2', 
  
    'decrease', 
  
    'end']);