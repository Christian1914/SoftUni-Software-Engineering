function moviecalculation(input) {
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let oneStatistprice = Number(input[2]);

    decorSum = budget * 0.10;
    clothesSum = statistCount * oneStatistprice;
    totalSum = decorSum + clothesSum;

    if (statistCount > 150) {
        discount = clothesSum * 0.10
        clothesSum -= discount
    }

    totalSum = decorSum + clothesSum;
    leftMoney = budget - totalSum;



    if (totalSum > budget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(Math.abs(leftMoney)).toFixed(2)} leva more. `)
    } else {
        console.log(`Action! `)
        console.log(`Wingard starts filming with ${(Math.abs(leftMoney)).toFixed(2)} leva left.`)
    }
}