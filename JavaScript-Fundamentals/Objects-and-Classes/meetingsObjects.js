function meeting(list){

    let meets = {};

    for(const line of list){
        let [day, name] = line.split(' ');
        if(meets.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            meets[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const key in meets) {
        console.log(`${key} -> ${meets[key]}`); 
    }

}
meeting(['Friday Bob', 

'Saturday Ted', 

'Monday Bill', 

'Monday John', 

'Wednesday George']);