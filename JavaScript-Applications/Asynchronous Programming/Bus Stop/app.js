async function getInfo() {
    const stopNameElement = document.getElementById('stopName') // елемента в който трябва да вкараме името на следваща спирка промерно
    const timeTableElement = document.getElementById('buses') // листа кум който трябва да добавяме автобуси
    const busStop = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`;

    

    try {
        stopNameElement.textContent = 'Loading...' // докато се изпълни заявката
        timeTableElement.innerHTML = '';
        const response = await fetch(url);
        
        //if(response.status !== 200){ // ако статус кода е различен от 200 хвърли грешка с alert
        //    stopNameElement.textContent = 'Error'
        //}
        
        const data = await response.json(); // парсваме данните които идват към json формат
        
        stopNameElement.textContent = data.name; 
        // buses: {20: 11, 22: 4}
        // name: "Centralni Hali" -- това са ни данните и от тях взимаме името на спирката със data.name

        Object.entries(data.buses).forEach(bus => { // взимаме от обекта {20: 11, 22: 4} и го правим на масив ['20', 11] ['22', 4]
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            timeTableElement.appendChild(liElement);
        });

    } catch (error) { // ако хванем грешка 
        stopNameElement.textContent = 'Error'; // в съобщението изписваме грешка
    }
}