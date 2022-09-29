//function asking(letter){
//   let resul = letter === letter.toUpperCase() ? console.log('upper-case'): console.log('lower-case');

//}
//asking("b")

function secondVariant(letter){
    let asciiValue = letter.charCodeAt();

    if (asciiValue >= 65 && asciiValue <= 90){
        console.log('upper-case');
    } else if (asciiValue >= 97 && asciiValue <= 122){
        console.log('lower-case')
    } else {
        console.log("Error")
    }
}
