function closure(){

    let num = 1;
    let previous = 0;

    function fib(){
        let magicNumber = num + previous;
        num = previous;
        previous = magicNumber;
        return magicNumber;
    }
    return fib;

}
let fib = closure(); 

console.log(fib()); // 1 

console.log(fib()); // 1 

console.log(fib()); // 2 

console.log(fib()); // 3 

console.log(fib()); // 5 

console.log(fib()); // 8 

console.log(fib()); // 13 