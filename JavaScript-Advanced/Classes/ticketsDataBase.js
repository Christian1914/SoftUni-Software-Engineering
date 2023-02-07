function solve(arr, criteria){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const tickets = [];

    for (const line of arr) {
        let [destination, price, status] = line.split('|');
        price = Number(price)
        const currentTicket = new Ticket(destination, price, status); // по този начин добавяме всички необходими аргументи в класа
        tickets.push(currentTicket);
    }
    
    const sorted = tickets.sort((a, b) => { // сортираме по критерии който ни е даден като втори аргумент, ако е стринг сортираме по първата буква по азбучен ред
        if(criteria === 'destination'){ // ако е число сортираме по price 
            return a.destination.localeCompare(b.destination);
        } else if(criteria === 'status'){
            return a.status.localeCompare(b.status);
        } else if(criteria === 'price'){
            return a.price - b.price
        }
    })
    return sorted;

}
console.table(solve(['Philadelphia|94.20|available', 

'New York City|95.99|available', 

'New York City|95.99|sold', 

'Boston|126.20|departed'], 

'destination'));