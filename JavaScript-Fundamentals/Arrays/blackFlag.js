function blackFlag(numbers){
    
    let days = Number(numbers[0]);
    let dailyPlunder = Number(numbers[1]);
    let expectedPlunder = Number(numbers[2]);
    let gatheredPlunder = 0;

    for(let i = 1; i <= days; i++){
        gatheredPlunder += dailyPlunder
        //if(i % 1 === 0 || i % 2 === 0){
        //    gatheredPlunder += dailyPlunder
        //}
        if(i % 3 == 0){
            gatheredPlunder += dailyPlunder / 2
        }
        if(i % 5 == 0){
            gatheredPlunder = gatheredPlunder * 0.7
        }

    }
    if(gatheredPlunder >= expectedPlunder){
        console.log(`Ahoy! ${gatheredPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percent = (gatheredPlunder / expectedPlunder) * 100
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
        //console.log(gatheredPlunder);
    }
    //console.log(gatheredPlunder);
}
blackFlag(["10", 

"20", 

"380"]);