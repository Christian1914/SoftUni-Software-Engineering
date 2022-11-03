function heroess(list){
    let heroes = [];

    list.forEach(line => { // правим цикъл for each и създаваме колкото обекта са необходими
        let [name, level, items] = line.split(' / ');
        let currentHero = {
            name,   // когато имената на променливата и на key се застъпват, може да напишем само key - а
            level: Number(level),
            items,
        };
        heroes.push(currentHero)
    });
    heroes.sort((a, b) => a.level - b.level); // сортираме ги във възходящ ред по нивото

    heroes.forEach((hero) => { // правим цикъл и достъпваме всички стойности в обектите
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });

}
heroess(['Isacc / 25 / Apple, GravityGun', 
    
    'Derek / 12 / BarrelVest, DestructionSword', 
    
    'Hes / 1 / Desolator, Sentinel, Antara']);