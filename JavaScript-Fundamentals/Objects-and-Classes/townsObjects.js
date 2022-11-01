function town(list){
    
    let townList = {};

    for (const line of list) {
        let [townName,latitude,longitude] = line.split(' | ');
        townList.town = townName;  // обекта.създаваме име на key = променливата кръстена от нас
        townList.latitude = Number(latitude).toFixed(2); // to.Fixed - седи извън скобите
        townList.longitude = Number(longitude).toFixed(2);
        console.log(townList);
        
        
    }

}
town(['Sofia | 42.696552 | 23.32601', 

'Beijing | 39.913818 | 116.363625']);