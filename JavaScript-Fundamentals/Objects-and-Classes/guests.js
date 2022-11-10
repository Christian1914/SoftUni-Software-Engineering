function guests(input){
    let vipList = [];
    let regularList = [];

    let currentGuest = input.shift();

    while(currentGuest !== 'PARTY'){
        let isVip = !isNaN(currentGuest[0]) // ако първия символ на думата е число ще върне true, ако е буква ще върне false

        if(isVip){
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }
        currentGuest = input.shift();
    }
    let allGuests = vipList.concat(regularList);
    for (const guest of input) {
        allGuests.splice(allGuests.indexOf(guest), 1);
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));

}
guests(['7IK9Yo0h', 

'9NoBUajQ', 

'Ce8vwPmE', 

'SVQXQCbc', 

'tSzE5t0p', 

'PARTY', 

'9NoBUajQ', 

'Ce8vwPmE', 

'SVQXQCbc']);