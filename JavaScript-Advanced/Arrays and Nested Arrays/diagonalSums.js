function diagonal(matrix){
    let main = 0;
    let theOtherOne = 0;
    let result = [];

    for (let index = 0; index < matrix.length; index++) {
        main += matrix[index][index];
        
    }
    result.push(main);

    let reversed = matrix.reverse();

    for (let index = 0; index < reversed.length; index++) {
        theOtherOne += reversed[index][index];
        
    }
    result.push(theOtherOne);

    console.log(result.join(' '));

}
diagonal([[3, 5, 17], 

    [-1, 7, 14], 
   
    [1, -8, 89]] )