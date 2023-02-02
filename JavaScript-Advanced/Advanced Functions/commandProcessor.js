function createProcessor(){
    let string = '';

    function append(str){
        string += str;
    }

    function print(){
        console.log(string);
    }

    function removeStart(n){
        string = string.slice(n);
    }

    function removeEnd(n){
        string = string.slice(0, -n);
    }

    return {
        append,
        print,
        removeStart,
        removeEnd
    }
}

let firstZeroTest = createProcessor(); 

 

firstZeroTest.append('hello'); 

firstZeroTest.append('again'); 

firstZeroTest.removeStart(3); 

firstZeroTest.removeEnd(4); 

firstZeroTest.print(); 