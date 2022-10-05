function rotate(arrayToRotate, rotations){

    for(let currentRotation = 0; currentRotation < rotations; currentRotation++){
        let numberToMove = arrayToRotate.shift();
        arrayToRotate.push(numberToMove)

    }
    console.log(arrayToRotate.join(' '));

}
