function solve(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumbers = '';

    for (let i = n; i < m; i+=1) {
        if(i % 9 === 0) {
            sum += i
            outputNumbers += i
        }
    }
}