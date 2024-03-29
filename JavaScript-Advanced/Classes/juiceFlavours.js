function solve(input = []) {
    const bottles = new Map();
   
    input.reduce((acc, curr) => {
      let [juice, quantity] = curr.split(" => ");
      quantity = Number(quantity);
   
      if(!acc.hasOwnProperty(juice)) {
          acc[juice] = 0;
      }  
      acc[juice] += quantity;
   
      if (acc[juice] >= 1000) {
        if (!bottles.has(juice)) {
          bottles.set(juice, 0);
        }
   
      bottles.set(juice, bottles.get(juice) + parseInt(acc[juice] / 1000));
        acc[juice] %= 1000;
      }
   
      return acc;
    }, {});
   
   
    for(let[juice, quantity] of bottles) {
        console.log(`${juice} => ${quantity}`);
    }
  }
solve(['Kiwi => 234', 

'Pear => 2345', 

'Watermelon => 3456', 

'Kiwi => 4567', 

'Pear => 5678', 

'Watermelon => 6789'])