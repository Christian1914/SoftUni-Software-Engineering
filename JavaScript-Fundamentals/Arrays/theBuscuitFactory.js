function factory(numbers){

    let buscuitsCount = Number(numbers[0]);
    let workersCount = Number(numbers[1]);
    let otherFactoryProduction = Number(numbers[2]);
    let days = 30;
    let productionForDay =  buscuitsCount * workersCount;
    let productionForThirtydays =  productionForDay * days;
    let discount =  productionForDay * 0.25;
    let totalSum = Math.floor(productionForThirtydays - (10 * discount));
    let diff = totalSum - otherFactoryProduction;
    let percents = (diff / otherFactoryProduction) * 100

    console.log(`You have produced ${Math.abs(totalSum)} biscuits for the past month.`);

    if(totalSum > otherFactoryProduction){
        console.log(`You produce ${percents.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${Math.abs(percents.toFixed(2))} percent less biscuits.`);
    }
}
factory(["0", "0", "0"]);