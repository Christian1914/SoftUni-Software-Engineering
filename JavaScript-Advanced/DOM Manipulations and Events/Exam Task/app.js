window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add'); // взимаме си бутона
    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault(); // пишем го за да избегнем презареждането на сайта

        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value).toFixed(2); // закръгляме цената до втория знак след десетичната запетая


        modelInputElement.value = '';
        descriptionInputElement.value = '';
        yearInputElement.value = '';
        priceInputElement.value = '';
        
        
        if (!model || !description) { // ako се подадът такива данни да не се прави нищо 
            return;
        }

        if (year <= 0 || price <= 0) { // ako се подадът такива данни да не се прави нищо 
            return;
        }

        let rowElement = document.createElement('tr'); // създаваме си родителя на реда
        let modelCellElement = document.createElement('td'); // създаваме си първото дете на tr
        let priceCellElement = document.createElement('td');  // създаваме си следващото дете за цената 
        let actionsCellElement = document.createElement('td');
        let moreInfoButton = document.createElement('button'); // Така си създаваме нов елемент - тип бутон
        moreInfoButton.addEventListener('click', (event) => {
            if(event.currentTarget.textContent === 'More Info'){
                secondRowElement.style.display = 'contents';
                moreInfoButton.textContent = 'Less Info'
            } else {
                secondRowElement.style.display = 'none';
                moreInfoButton.textContent = 'More Info'
            }
            

        })
        let buyButton = document.createElement('button');

        buyButton.addEventListener('click', () => { // слагаме event на buy бутона и му казваме когато се натисне
            let totalPrice = document.querySelector('.total-price'); // взимаме цената която е в html скелета
            let currentTotalPrice = Number(totalPrice.textContent); // обръщаме я в числог
            totalPrice.textContent = (currentTotalPrice + Number(price)).toFixed(2); // добавяме текущата цена на furniture и смятаме тотала
            
            rowElement.remove(); // да изтрие родителя да се скрие за да изпишем други работи на негово място
            secondRowElement.remove();
            
        })

        modelCellElement.textContent = model; // даваме и стойност текст и като текст добавяме от съответния инпут
        priceCellElement.textContent = price;

        moreInfoButton.textContent = 'More Info'; // даваме текст на бутоните както е по условие
        moreInfoButton.classList.add('moreBtn'); // по условие трябва да го добавим -- <button class="buyBtn">More Info</button>
        buyButton.textContent = 'Buy it';
        buyButton.classList.add('buyBtn'); // <button class="buyBtn">Buy it</button>


        actionsCellElement.appendChild(moreInfoButton); // закачаме двата бутона на вече добавения елемент към дървото actionsCellElement
        actionsCellElement.appendChild(buyButton);

        rowElement.classList.add('info'); // пак по условие

        rowElement.appendChild(modelCellElement); // доабвяме децата към родителя който създадохме rowElement
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);

        furnitureListElement.appendChild(rowElement); // и вече доабвяме нашият създаден родител към листа с мебели който е в html скелета

        let secondRowElement = document.createElement('tr'); // правим си нов родител
        let yearElement = document.createElement('td'); // създаваме му първоото дете 
        let descriptionElement = document.createElement('td');

        yearElement.textContent = `Year: ${yearInputElement.value}`; // и в него слагаме текста от инпута за коя година е стола примерно
        descriptionElement.setAttribute('colspan', 3);
        descriptionElement.textContent = `Description: ${descriptionInputElement.value}`

        
        secondRowElement.classList.add('hide'); // добавяме му клас по условие
        secondRowElement.style.display = 'none'; // и стил
        secondRowElement.appendChild(yearElement);
        secondRowElement.appendChild(descriptionElement);

        furnitureListElement.appendChild(secondRowElement);

    })
}
