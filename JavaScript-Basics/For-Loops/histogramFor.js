function percents(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for(let i = 1; i <= n; i+=1) {
        let currentNumber = Number(input[i]);
        if (currentNumber < 200) {
            p1 +=1;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            p2 +=1;
        } else if(currentNumber >= 400 && currentNumber <= 599) {
            p3 +=1;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            p4 +=1;
        } else {
            p5 +=1;
        }
    }

    let p1Percent = p1 / n * 100
    let p2Percent = p2 / n * 100
    let p3Percent = p3 / n * 100
    let p4Percent = p4 / n * 100
    let p5Percent = p5 / n * 100

    console.log(p1Percent.toFixed(2) + "%")
    console.log(p2Percent.toFixed(2) + "%")
    console.log(p3Percent.toFixed(2) + "%")
    console.log(p4Percent.toFixed(2) + "%")
    console.log(p5Percent.toFixed(2) + "%")
}