function search() {
   const towns = Array.from(document.querySelectorAll('#towns li')) // взимаме всички лист елементи тоест всички градове и ги вкарваме в масив
   const searchBox = document.querySelector('#searchText');
   const button = document.querySelector('#result');

   let counter = 0;

   for (const element of towns) {
      if(searchBox.value === ''){
         counter = 0;
      }
      if(element.textContent.includes(searchBox.value)){
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      } else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
      
   }
   button.textContent = `${counter} matches found`
}
