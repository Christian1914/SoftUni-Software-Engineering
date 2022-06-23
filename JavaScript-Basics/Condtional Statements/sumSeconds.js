function sumseconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;
    let totalTimeInMin = Math.floor(totalTime / 60);
    let totalTimeInSec = totalTime % 60;


    if (totalTimeInSec < 10){
    console.log(`${totalTimeInMin}:0${totalTimeInSec}`);
    } else {
        console.log(`${totalTimeInMin}:${totalTimeInSec}`);
    }
}