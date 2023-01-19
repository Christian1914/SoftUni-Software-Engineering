function addOrNot(array){

    let newArr = [];
    let counter = 1;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if((element === 'add')){
            newArr.push(counter++)
        } else if(element === 'remove'){
            newArr.pop(counter++)
        }
        
    }
    if(!newArr.length){
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }

}
addOrNot(['add',  

'add',  

'remove',  

'add',  

'add']);