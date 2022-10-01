function solve(array){
    let sum = 0;
    for(let textNumber of array){
        let number = Number(textNumber)
        if(number % 2 == 0){
            sum += number
        }
    }
    console.log(sum)
}
