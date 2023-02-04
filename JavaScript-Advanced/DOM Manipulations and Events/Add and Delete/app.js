const listOfItems = document.getElementById('items') // взимаме заглавието (ID) на List of items
listOfItems.addEventListener('click', onDelete);


function onDelete(event){
    if(event.target.tagName == 'A'){
        event.target.parentElement.remove();
    }
}


function addItem() {
    
    let text = document.getElementById('newItemText').value; // полето за писане на потребителя
    const li = document.createElement('li'); // създаваме си нов елемент li - нов ред 
    li.textContent = text; // казваме че написаното в полето за писане на потребителя го добавяме към List of items по условие
    let buttonAdd = document.querySelector('input[type="text"]');



    const deleteButton = document.createElement('a'); // за триене суздаваме елемент 'а';
    deleteButton.href = '#'; // и мy добавяме линк
    deleteButton.textContent = '[Delete]'; // добавяме текст на бутона (по условие);

    li.appendChild(deleteButton); // към Li добавяме бутона

    deleteButton.addEventListener('click', () => li.remove()); // добавяме към бутона някакво събитие в случая click и му казваме да изтрие реда при кликане на бутона

    
    listOfItems.appendChild(li);
}