function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputText = document.querySelector('#inputs>textarea'); // от ID слизаме две надолу по децата и взимаме <textarea></textarea> - полето за писане
   const bestRestaurantP = document.querySelector('#bestRestaurant>p'); // oт ID слизаме три надолу и взимаме <p></p>
   const workersP = document.querySelector('#outputs #workers p');

   function onClick () {
      let array = JSON.parse(inputText.value); // ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
      let restaurants = {};

      array.forEach(line =>  { // ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
         const tokens = line.split(' - '); // ['Pizzahut', 'Peter 500', 'George 300', 'Mark 800']
         const name = tokens[0]; // name = 'Pizzahut'
         const workerArray = tokens[1].split(', '); // workersArray = ['Peter 500', 'George 300', 'Mark 800'];
         let workers = []; 

         for (const worker of workerArray) { // workersArray = ['Peter 500', 'George 300', 'Mark 800'];
            let workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]); // всеки първи индекс на елемента от масива го правим на число
            workers.push({name: workerTokens[0], salary}) // пушваме в празния масив обект с нашите данни [{...}, {...}, {...}] иначе казано - {name: 'Peter', salary: 500}, {name: 'George', salary: 300}, {name: 'Mark', salary: 800}
         }
         
         if(restaurants[name]){
            workers = workers.concat(restaurants[name].workers)
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary)
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
         
      });
      let bestRestaurantSalary = 0;
      let bestRest = undefined;
      for (const name in restaurants) {
         if(restaurants[name].averageSalary > bestRestaurantSalary){
            bestRestaurantSalary = restaurants[name].averageSalary;
            best = { name, ...restaurants[name]}
         }
      }
      bestRestaurantP.textContent = `Name: ${bestRest.name} Average Salary: ${bestRest.averageSalary.toFixed(2)} Best Salary: ${bestRest.bestSalary.toFixed(2)}`
      let workersResult = [];
      bestRest.workers.array.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });

      workersP.innerText = workersResult.join(' ');

   }

}