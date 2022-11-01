function employe(list){
    let employeeList = {};

    list.forEach(person => {
        employeeList[person] = person.length;
    });
    
    for(const key of Object.keys(employeeList)){
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`); // фор оф цикъл
    }
    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`); // фор ин цикъл специално за обекти
    }
    
}
employe([ 

    'Silas Butler', 
    
    'Adnaan Buckley', 
    
    'Juan Peterson', 
    
    'Brendan Villarreal' 
    
    ]);