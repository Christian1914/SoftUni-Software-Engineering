function phoneBook(list){

    let phoneNumbers = {};

    for(const line of list){
        let [name, number] = line.split(' ');
        phoneNumbers[name] = number;
        
    }
    
    for (const name in phoneNumbers) {
        console.log(`${name} -> ${phoneNumbers[name]}`); // фор ин цикъл специално за обекти
    }

}
phoneBook(['George 0552554', 

'Peter 087587', 

'George 0453112', 

'Bill 0845344']);