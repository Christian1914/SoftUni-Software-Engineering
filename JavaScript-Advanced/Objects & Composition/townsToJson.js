function towns(array){

    let towns = [];

    for (let index = 1; index < array.length; index++) { // почваме от 1 вместо от 0 да избегнем първия ред '| Town | Latitude | Longitude |'
        let tokens = array[index].split(/\s*\|\s*/g); // сплитваме line по пайп, но остава в началото и края по един спейс 
        let town = tokens[1]; // затова почваме от 1 вместо от 0 - ['', 'Sofia', '42.696552', '23.32601', ''] - Sofia
        let latitude = Number(tokens[2]).toFixed(2); // 42.696552
        let longitude = Number(tokens[3]).toFixed(2); // 23.32601
        let currentObj = { // правим си обекта ръчно 
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };
        towns.push(currentObj) // пушваме моментния обект
    }
    console.log(JSON.stringify(towns));
}
towns(['| Town | Latitude | Longitude |', 

'| Sofia | 42.696552 | 23.32601 |', 

'| Beijing | 39.913818 | 116.363625 |']);