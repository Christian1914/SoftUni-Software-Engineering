function toyorder(input) {
    let adventurePrize = Number(input[0]);
    let countOfPuzzles = Number(input[1]);
    let countOfDolls = Number(input[2]);
    let countOfBears = Number(input[3]);
    let countOfMinions = Number(input[4]);
    let countOfTrucks = Number(input[5]);
    
    totalSum = 0;

    totalSum = countOfPuzzles * 2.60 + countOfDolls * 3 + countOfBears * 4.10 + countOfMinions * 8.20 + countOfTrucks * 2
    countOfToys = countOfPuzzles + countOfDolls + countOfBears + countOfMinions + countOfTrucks

    if(countOfToys >= 50) {
        totalSum = totalSum - (totalSum * 0.25)
    }

    totalSum = totalSum - (totalSum * 0.10)
    //totalSum = totalSum - adventurePrize

    if (totalSum >= adventurePrize) {
        totalSum -= adventurePrize
        console.log(`Yes! ${(totalSum).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(adventurePrize - totalSum).toFixed(2)} lv needed. `)
    }
}