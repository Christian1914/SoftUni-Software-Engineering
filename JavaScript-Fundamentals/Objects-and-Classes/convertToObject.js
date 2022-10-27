function converting(input){
    let convertedObject = JSON.parse(input);
    
    for(const key of Object.keys(convertedObject)){
        console.log(`${key}: ${convertedObject[key]}`);
    }

}
converting('{"name": "George", "age": 40, "town": "Sofia"}');