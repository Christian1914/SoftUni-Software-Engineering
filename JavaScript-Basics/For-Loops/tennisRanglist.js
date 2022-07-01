function ranglsit(input){
    let index = 0;
    let countOfTournaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let pointsCounter = 0;
    let winsCounter = 0;

    for(let i = 0; i < countOfTournaments; i+=1){
        let currentStage = input[index];
        index++;

        if (currentStage === "W"){
            startingPoints += 2000
            pointsCounter += 2000
            winsCounter += 1
        } else if (currentStage === "F"){
            startingPoints += 1200
            pointsCounter += 1200
        } else if (currentStage === "SF"){
            startingPoints += 720
            pointsCounter += 720
        }

    }
    let averagePoints = pointsCounter / countOfTournaments
    let wins = (winsCounter / countOfTournaments) * 100

    console.log(`Final points: ${startingPoints}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${wins.toFixed(2) + "%"}`)
}