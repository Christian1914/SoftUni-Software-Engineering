async function solution() {
    
    const main = document.getElementById('main'); // където ще добавяме елементите

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const response = await fetch(url);
    const data = await response.json();
    
    data.forEach(article => {
        let divAccordion = createElement('div', '', ['class', 'accordion']);
        let divHead = createElement('div', '', ['class', 'head']);
        let span = createElement('span', article.title);
        let button = createElement('button', 'More', ['class', 'button', 'id', article._id]);
        let divExtra = createElement('div', '', ['class', 'extra']);
        let p = document.createElement('p');

        button.addEventListener('click', toggle);


        divExtra.appendChild(p);
        divAccordion.appendChild(divExtra);
        divHead.appendChild(button);
        divHead.appendChild(span);
        divAccordion.appendChild(divHead);
        main.appendChild(divAccordion);
    });

    async function toggle(ev){
        

        const id = ev.target.id;
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        const response = await fetch(url); // щом го пишем тва значи правим нова заявка
        const data = await response.json();
        let content = data.content;
        const p = ev.target.parentNode.parentNode.children[0].children[0];
        let divTarget = ev.target.parentNode.parentNode.children[0]
        p.textContent = content;
        if(ev.target.textContent === 'More'){
            divTarget.style.display = 'block'
            ev.target.textContent = 'Less'
        } else{
            divTarget.style.display = 'none'
            ev.target.textContent = 'More'
        }

    }

    function createElement(type, content, attributes = []){
        const element = document.createElement(type);

        if(content){
            element.textContent = content
        }

        if(attributes.length > 1){
            for (let index = 0; index < attributes.length; index+=2) {
                element.setAttribute(attributes[index], attributes[index + 1]);
                
            }
        }
        return element;
    }
}
solution()