function calculator(cars){
    let arrayToManipulate = cars.shift().split('>>');
    let kmForFamilyCar = 3000;
    let kmForHeavyDuty = 9000;
    let kmforSports = 2000;
    let totalSumFamily = 0;
    let totalSumheavyDuty = 0;
    let totalSumSports = 0;
    let nationalRevenue = 0;




    for(let index = 0; index < arrayToManipulate.length; index++){
        let currentLine = arrayToManipulate[index].split(' ');
        let typeofCar = currentLine[0];
        let years = Number(currentLine[1]);
        let kilometers = Number(currentLine[2]);

        if(typeofCar === "family"){
            let kmInKm = Math.floor(kilometers / kmForFamilyCar);
            totalSumFamily = kmInKm * 12 + (50 - years * 5);
            nationalRevenue += totalSumFamily;
            console.log(`A ${typeofCar} car will pay ${totalSumFamily.toFixed(2)} euros in taxes.`);

        }else if(typeofCar === "heavyDuty"){
            kmInKm = Math.floor(kilometers / kmForHeavyDuty);
            totalSumheavyDuty = kmInKm * 14 + (80 - years * 8);
            nationalRevenue += totalSumheavyDuty;
            console.log(`A ${typeofCar} car will pay ${totalSumheavyDuty.toFixed(2)} euros in taxes.`);

        }else if(typeofCar === "sports"){
            kmInKm = Math.floor(kilometers / kmforSports);
            totalSumSports = kmInKm * 18 + (100 - years * 9);
            nationalRevenue += totalSumSports;
            console.log(`A ${typeofCar} car will pay ${totalSumSports.toFixed(2)} euros in taxes.`);
        }else{
            console.log("Invalid car type.");
        }
        
    }
    

    console.log(`The National Revenue Agency will collect ${nationalRevenue.toFixed(2)} euros in taxes.`);
}
calculator([ 'family 5 3210>>van 4 2345>>heavyDuty 7 21000>>sports 5 9012>>family 3 9012']);