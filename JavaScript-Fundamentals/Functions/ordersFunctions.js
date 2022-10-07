function order(type, count){
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    if(type == "coffee"){
        totalPrice = count * coffeePrice
    } else if (type == "water"){
        totalPrice = count * waterPrice
    } else if (type == "coke"){
        totalPrice = count * cokePrice
    } else if (type == "snacks"){
        totalPrice = count * snacksPrice
    }
    console.log(totalPrice.toFixed(2));
}
order("coffee", 2);