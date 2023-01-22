function inventory(array){
    let resultArray = [];


    for (let line of array) {
        let [name, level, items] = line.split(' / ')

        const hero = {
            name,
            level: Number(level),
            items: items ? items.split(', ') : [],
        };
        resultArray.push(hero); // след всяка итерация добавяме готовия обект към масив
        
    }
    console.log(JSON.stringify(resultArray)); // връщаме резултата като JSON

}
inventory(['Isacc / 25 / Apple, GravityGun', 

'Derek / 12 / BarrelVest, DestructionSword', 

'Hes / 1 / Desolator, Sentinel, Antara']);

[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}] 