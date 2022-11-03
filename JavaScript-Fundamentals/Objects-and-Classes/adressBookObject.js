function specialBook(list){

    let adressBook = {};

    for(const line of list){
        let [name, adress] = line.split(':');
        
        adressBook[name] = adress;
        
    }
    let adressBookEntries = Object.entries(adressBook);
    adressBookEntries.sort((a, b) => a[0].localeCompare(b[0])); // ако искаме да сортираме по value, избираме първи индекс[1]
    let sortedBook = Object.fromEntries(adressBookEntries);

    for (const key in sortedBook) {
        console.log(`${key} -> ${sortedBook[key]}`); 
    }

}
specialBook(['Tim:Doe Crossing', 

'Bill:Nelson Place', 

'Peter:Carlyle Ave', 

'Bill:Ornery Rd']);