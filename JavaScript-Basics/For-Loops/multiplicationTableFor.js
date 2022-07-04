function multiplicate(input) {
    let x = Number(input[0]);

    for(let i = 1;i <= 10; i+=1) {
        let result = i * x
        console.log(`${i} * ${x} = ${result}`);
    }
}
multiplicate(['8'])