function create(words) {
   let parentElement = document.getElementById('content');
   //let elements = words;

   
   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(words[i]); // взимаме на всяка итерация по едно име от масива [Section1, Section2, Section3, Section4]

      p.appendChild(text); // към параграфа добавяме текущия текст взет от words
      p.style.display = 'none'; // превръщаме от block на none за да се вижда
      div.appendChild(p); // към div добавяме параграфа с вече добавения текст
      div.addEventListener('click', (event) => { // слагаме event на div да слуша за клик и когато се кликне да се изпълни
         event.target.children[0].style.display = 'block';
      });
      parentElement.appendChild(div);
   }
   
}