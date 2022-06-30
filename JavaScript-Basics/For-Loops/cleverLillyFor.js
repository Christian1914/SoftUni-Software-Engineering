function lilly(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let currentMoney = 10;
    let toyCounter = 0;

    for(let i = 1;i <= age; i+=1){
        if(i % 2 === 0) {
            money += currentMoney;
            currentMoney += 10;
            money -=1;
        } else {
            toyCounter +=1;
        }

    }

    money += toyCounter * toyPrice;
    let diff = Math.abs(washingMachinePrice - money);

    if(money > washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}