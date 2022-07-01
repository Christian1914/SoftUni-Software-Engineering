function oscars(input){
    let index = 0;
    let name = input[index];
    index++;

    let points = Number(input[index])
    index++;
    let n = Number(input[index]);
    index++;
    let hasGotNominee = false;

    for(let i = 0; i < n; i+=1) {
        let currentName = input[index]
        index++;
        let currentPoints = Number(input[index])
        index++;

        let totalPoints = (currentName.length * currentPoints) / 2;
        points += totalPoints
        

        if(points > 1250.5){
            hasGotNominee = true;
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`)
            break;
        }

    }
    if (!hasGotNominee) {
        let diff = Math.abs(points - 1250.5);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}