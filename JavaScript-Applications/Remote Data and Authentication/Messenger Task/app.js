function attachEvents() {
    const url = `http://localhost:3030/jsonstore/phonebook`;
    const ul = document.getElementById('phonebook') // Там където ще добавяме новите контакти под формата на Li елементи
    const loadButton = document.getElementById('btnLoad'); // взимаме си бутоните
    const createButton = document.getElementById('btnCreate');
    const person = document.getElementById('person'); // и инпут полетата
    const phoneNumber = document.getElementById('phone')

    loadButton.addEventListener('click', onLoadClick); // казваме му да слуша за клик 
    createButton.addEventListener('click', onClickCreate);

    async function onLoadClick(){ // когато се кликне на този бутон функцията се задейства и ..
        ul.innerHTML = ''; // за да не се зареждат едни и същи данни безкрайно много пъти след цъкане на бутона 
        const response = await fetch(url); // правим GET заявка и изкарваме всички данни от сървъра
        const data = await response.json(); // вкарваме данните в json
        
        Object.values(data).forEach(x => {
            const { person, phone, _id } = x; // разбиваме обекта който получаваме на състваните му части
            const li = createElement('li', `${person}: ${phone}`, ul); // казваме че искаме да създадем li елемент, пишем функцията за създаване която направихме и и даваме нужните параметри за да създаде елемента и към кой друг елемент да го прекрепи, в случая ul
            li.setAttribute('id', _id); // добавяме му ID, което е по условие и е нещо уникално, с него можем да трием елемента

            const deleteButton = createElement('button', 'Delete', li); // добавяме delete бутона по условие срещу всеки контакт в ul, тоест срещу всяко li
            deleteButton.setAttribute('id', 'btnDelete'); // слагаме му ID, по което можем да го достъпим ако ни потрябва
            deleteButton.addEventListener('click', onClickDelete);
        })
    }
    async function onClickDelete(ev){
        const id = ev.target.parentNode.id;
        ev.target.parentNode.remove()
        const deleteResponse = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
    }
    async function onClickCreate(){

        if(person.value !== '' && phoneNumber.value !== ''){ // слагаме проверка която проверява дали инпут полетата не са празни, ако са празни няма да влезе в проверката
            
            const response = await fetch(url, { // пример за пост заявка като променяме само това какви данни да пратим на сървъра в случая пращаме person и phone
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({person:person.value, phone:phoneNumber.value})
            });
            loadButton.click(); // казваме му че и load бутона е кликнат да може да закачим директно новия контакт при другите в ul

            person.value = '';
            phoneNumber.value = '';
        }
    }

    function createElement(type, text, appender){
        const result = document.createElement(type); // създаваме елемента в зависимост от това какъв тип е елемента - type

        result.textContent = text; // добавяме му текст на елемента

        appender.appendChild(result) // appender - елемента към който ще добавяме нашите новосъздадени елементи

        return result;
    }
}

attachEvents();