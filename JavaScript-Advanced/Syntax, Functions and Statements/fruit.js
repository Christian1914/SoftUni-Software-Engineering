function solve(...params){
    let totalPrice = (params[2] * params[1]) / 1000;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(params[1] / 1000).toFixed(2)} kilograms ${params[0]}.`);
}
solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)