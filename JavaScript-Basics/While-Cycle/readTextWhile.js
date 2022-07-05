function readtext(input){
    let index = 0;
    let stringg = input[index]

    while(stringg !== 'Stop'){
        console.log(stringg);
        index++;
        stringg = input[index];
    }
}