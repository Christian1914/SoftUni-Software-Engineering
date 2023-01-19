function sorting(array){


    array.sort((a, b) => a.localeCompare(b));
    array.sort((a, b) => a.length - b.length)
    console.log(array.join('\n'));

}
sorting(['test',  

'Deny',  

'omen',  

'Default'] )