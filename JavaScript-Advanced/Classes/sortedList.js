class List{
    constructor(){
        this.array = [];
        this.size = this.array.length;

    }
    add(number){
        this.array.push(number); // добавяме новото число в масива 
        this.array = this.array.sort((a, b) => a - b); // сортираме след всяко ново добавено число в масива
        this.size = this.array.length; // и подменяме дължината на масива след всяка промяна
    }
    remove(index){
        if(index >= 0 && index < this.array.length){ // ако индекса е по голям или равен на нула и е по малък от дължината на масива ..
            this.array.splice(index, 1); // влез в проверката -- проверяваме дали индекса е валиден
            this.array = this.array.sort((a, b) => a - b);
            this.size = this.array.length;
        } else {
            throw new Error('Invalid Index'); // във всеки друг случай хвърли грешка
        }
    }
    get(index){
        if(index >= 0 && index < this.array.length){ // проверяваме пак дали индекса съществува 
            return this.array[index]; // ако е валиден ми дай индекса на подаденото число от масива
        } else {
            throw new Error('Invalid Index');
        }
    }
    size(){ // добавяме си и size по условие трябва да връща дължината на масива
        return this.size;
    }
    
}



let list = new List(); 

list.add(5); 

list.add(6); 

list.add(7);
console.log(list.get(1));  

list.remove(1); 

console.log(list.get(1)); 
console.log(list.size);
