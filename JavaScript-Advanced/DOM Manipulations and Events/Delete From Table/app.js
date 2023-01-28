function deleteByEmail() {
    const inputFromUser = document.querySelector('input[name="email"]').value; // <input type="text" name="email"> == $0, взимаме въведения от usera текст
    const allRows = document.querySelectorAll('tbody tr'); // от tbody слизаме към клона tr и със querySelectorAll избираме всички редове от tr
    let array = Array.from(allRows); // всичките редове ги правим на масив да може да ги обходим

    let deleted = false; // използваме булева стойност 

    for (const line of array) {
        let currentEmail = line.children[1]; // сегашния ред от масива го бутаме в променлива и по точно втория елемент от целия ред

        if(currentEmail.textContent == inputFromUser){ // питаме дали текста от втория елемент е равен на текста от въведения от потребителя текст
            line.remove(); // ако влезе в проверката значи е равен и премахваме целия ред
            deleted = true; // ако има нещо изтрито променяме булевата стойност на true
        }
    }
    document.getElementById('result').textContent = deleted ? 'Deleted' : 'Not found.'; 
    // първо взимаме по ID result където трябва да изпишем резултата
    // след това питаме с тернарния оператор дали deleted е true, ако е true изписваме Deleted, ако е false изписваме Not found
}