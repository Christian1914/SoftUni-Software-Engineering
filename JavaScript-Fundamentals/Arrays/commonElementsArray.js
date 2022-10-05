function solve(firstArray, secondArray){


    for(let firstArrIndex = 0; firstArrIndex < firstArray.length; firstArrIndex++){
        for(let secondArrIndex = 0; secondArrIndex < secondArray.length; secondArrIndex++){
            if(firstArray[firstArrIndex] === secondArray[secondArrIndex]){
                console.log(firstArray[firstArrIndex])
            }
        }

    }
    
}
