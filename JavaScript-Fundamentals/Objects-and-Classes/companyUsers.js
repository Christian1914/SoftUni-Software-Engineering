function users(input){
    let result = {};

    for (const line of input) {
        let [companyName, personID] = line.split(' -> ');
        if(!result.hasOwnProperty(companyName)){
            result[companyName] = [];
        }
        result[companyName].push(personID);
    }
    let sortedCompanies = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0])); // правим от обеекта масив и сортираме по азбучен ред
    
    sortedCompanies.forEach(element => { // именуваме си елементите и принтираме компанията
        let companyName = element[0];
        let allIds = element[1];
        console.log(companyName);

        let uniqueIds = new Set(allIds); // сета филтрира всички повтарящи се елементи и връща уникалния
        for(let id of uniqueIds){
            console.log(`--${id}`);
        }
    });
}
users([

    'SoftUni -> AA12345', 
    
    'SoftUni -> BB12345', 
    
    'Microsoft -> CC12345', 
    
    'HP -> BB12345' 
    
    ]);