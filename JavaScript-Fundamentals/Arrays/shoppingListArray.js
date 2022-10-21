function shoppingList(groceriesItems){
    let arrayToManipulate = groceriesItems.shift().split('!');


    for(let index = 0; index < groceriesItems.length; index++){
        let currentCommand = groceriesItems[index].split(' ');
        let command = currentCommand[0];
        let firstArgument = currentCommand[1];
        //let secondArgument = currentCommand[2];
        if(command === "Urgent"){
            if(arrayToManipulate.includes(firstArgument)){
                continue;
            } else {
                arrayToManipulate.unshift(firstArgument);
            }
            
        } 
        if(command === "Unnecessary"){
            if(arrayToManipulate.includes(firstArgument)){
                let index = arrayToManipulate.indexOf(firstArgument);
                if(index > -1){
                    arrayToManipulate.splice(index, 1);
                }
            }else {
                continue;
            }
        } 
        if(command === "Correct"){
            if(arrayToManipulate.includes(firstArgument)){
                const name = arrayToManipulate.indexOf(firstArgument);
                const secondName = currentCommand[2];
                arrayToManipulate.splice(name, 1, secondName);
            } else {
                continue;
            }
        } 
        if(command === "Rearrange"){
            if(arrayToManipulate.includes(firstArgument)){
                //let nameToSwap = currentCommand[1]
                //const rearangeItem = arrayToManipulate.indexOf(currentCommand[1]);
                arrayToManipulate.splice(firstArgument, 1);
                arrayToManipulate.push(firstArgument);
            } else {
                continue;
            }
        }
        if(command === "Go"){
            break;
        } else {
            continue;
        }
    }
    console.log(arrayToManipulate.join(', '));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana", 

"Urgent beb", 

"Urgent beb", 

"Correct Pepper Onion", 

"Rearrange Milk", 

"Correct Tomatoes Potatoes", 

"Go Shopping!"]);