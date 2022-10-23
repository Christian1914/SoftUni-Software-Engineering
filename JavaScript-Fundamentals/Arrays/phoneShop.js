function phones(phoness){
    let arrayToManipulate = phoness.shift().split(', ');


    for(let k = 0; k < phoness.length; k++){
        let currentLine = phoness[k].split(/[' ':]+/);
        let currentCommand = currentLine[0];
        let currentPhone = currentLine[2];
        let oldPhone = currentLine[3];
        let bonusNewPhone = currentLine[4];

        if(currentCommand === "Add"){
            if(!arrayToManipulate.includes(currentPhone)){
                arrayToManipulate.push(currentPhone);
            }
        }else if(currentCommand === "Remove"){
            if(arrayToManipulate.includes(currentPhone)){
                let index = arrayToManipulate.indexOf(currentPhone)
                arrayToManipulate.splice(index, 1);

            }
        }else if(currentCommand === "Bonus"){
            if(arrayToManipulate.includes(oldPhone)){
                let index = arrayToManipulate.indexOf(oldPhone)
                index = index + 1
                //arrayToManipulate.splice(index, 0, bonusNewPhone);
                //arrayToManipulate.push(bonusNewPhone);
                arrayToManipulate.splice(index, 0, bonusNewPhone) // Така се вкарва елемент пред тоя елемент който искаме
                
            }
        }else if(currentCommand === "Last"){
            if(arrayToManipulate.includes(currentPhone)){
                arrayToManipulate.splice(currentPhone, 1);
                arrayToManipulate.push(currentPhone);
            }
        }
        if(currentCommand === "End"){
            break;
        }
    }
    console.log(arrayToManipulate.join(', '));
}
phones(["SamsungA50, MotorolaG5, Iphone10",
"Add - Iphone10",
"Remove - Iphone10",
"Remove - SamsungA50",
"Remove - MotorolaG5",
"End",]);
