function solve({model, power, color, carriage, wheelsize}){

    
    const engines = { // Създаваме си обекта по описанието в задачата
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500}
    };

    let engine = {};

    if(power <= 90){ // щом е по малко или равно на 90 отговаря на small
        engine = engines.small
    } else if(power <= 120){
        engine = engines.normal
    } else{
        engine = engines.monster
    }


    if(wheelsize % 2 == 0){ // Ако джантите са четно число ги намаляме с едно да станат нечетно
        wheelsize--;
    }

    const car = {
        model, // модела ни е даден
        engine, // двигателя сме го създали ние
        carriage: { // дадено е
            type: carriage,
            color // дадено е
        },
        wheels: Array(4).fill(wheelsize) // Array(4) - колко пъти да вкараш числото в масива, wheelsize - променливата която да се вкара
    };
    

    return car

}
solve({ model: 'Opel Vectra', 

power: 110, 

color: 'grey', 

carriage: 'coupe', 

wheelsize: 17 } );