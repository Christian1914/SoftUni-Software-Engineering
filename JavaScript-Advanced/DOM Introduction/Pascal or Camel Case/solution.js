function solve() {
  const inputFromUser = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const button = document.getElementById('result');

  const toPascal = (text) => 
    text
      .split(' ') // сплитваме This is an example по спейс и получаваме ['This', 'is', 'an', 'example']
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()) // искам за всяка първа буква да я направиш голяма, след това от първата буква нататък word.slice(1) изрежи и изрязаното го направи само от малки букви .toLowerCase() и със плюса ги конкатенирай
      .join(''); // джойнваме ги по празно
  

  const toCamelCase = (text) => {
    text = toPascal(text); // взимаме текста от предишната функция 
    return text[0].toLowerCase() + text.slice(1); // и му казваме първата буква на стринга да я направи малка и конкатенираме с останалото от стринга
  }

      if(convention === 'Pascal Case'){
        button.textContent = toPascal(inputFromUser);
      } else if(convention === 'Camel Case'){
        button.textContent = toCamelCase(inputFromUser)
      } else {
        return button.textContent = 'Error!' // на бутона му добавяме свойството да изписва нещо и текста срещу него 
      }

}