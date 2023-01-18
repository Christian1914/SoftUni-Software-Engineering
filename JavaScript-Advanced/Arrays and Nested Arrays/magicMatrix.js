function magic(matrix){
    let counter = 0;

    for (const array of matrix) {
        for (const number of array) {
            counter += number
        }
    }
    if(counter % 3 == 0){
        console.log(true);
    }else {
        console.log(false);
    }

}
magic([[1, 0, 0], 

    [0, 0, 1], 
   
    [0, 1, 0]]  );