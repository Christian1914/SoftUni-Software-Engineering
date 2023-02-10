class Company {
    constructor(){
        this.departments = [];
    }

    addEmployee(user, salary, position, department){
        if(!user || !salary || !position || !department || salary < 0){ // ако едно от тези неща са Undefined, null или празен стринг или заплатата е по малка от нула
            throw new Error('Invalid input!') // хвърли грешка - невалиден инпут
        } else {
            if(!this.departments[department]){ // проверяваме дали в масива нямаме обект в който да има текущия department
                this.departments[department] = []; // ако няма такъв създаваме празен масив със съответното име
            }
            this.departments[department].push({user, salary, position}); // ако има такъв department, бутаме в него user and position
            return `New employee is hired. Name: ${user}. Position: ${position}`
        }
    }
    bestDepartment(){
        const avgDepartment = {}; // създаваме си празен обект
        Object.keys(this.departments).forEach(key => {
            const average = this.departments[key].reduce((acc, curr) => acc + curr.salary, 0) / this.departments[key].length
            avgDepartment[key] = average;
        });
        const sorted = Object.entries(avgDepartment).sort((a, b) => b[1] - a[1]);
        let result = `Best Department is: ${sorted[0][0]}\nAverage salary: ${sorted[0][1].toFixed(2)}`;
        this.departments[sorted[0][0]].sort((a, b) => b.salary - a.salary || a.user.localeCompare(b.user)).forEach((x) => {
            result += `\n${x.user} ${x.salary} ${x.position}`
        });
        return result;
    }
}


let c = new Company(); 

c.addEmployee("Stanimir", 2000, "engineer", "Construction"); 

c.addEmployee("Pesho", 1500, "electricaengineer", "Construction"); 

c.addEmployee("Slavi", 500, "dyer", "Construction"); 

c.addEmployee("Stan", 2000, "architect", "Construction"); 

c.addEmployee("Stanimir", 1200, "digitalmarketingmanager", "Marketing"); 

c.addEmployee("Pesho", 1000, "graphicaldesigner", "Marketing"); 

c.addEmployee("Gosho", 1350, "HR", "Humanresources"); 

console.log(c.bestDepartment()); 
