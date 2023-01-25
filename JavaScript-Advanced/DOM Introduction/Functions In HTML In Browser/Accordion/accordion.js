function toggle() {
    const button = document.getElementsByClassName('button')[0]; // връща колекция обаче на нас ни трябва само един елемент(спан елемента) и слагаме [0]
    const extraDiv = document.getElementById('extra'); // id = "extra" style = "display: none;" - none - е като не се вижда текста

    if(button.textContent === 'More'){  // ако на бутона пише More
        button.textContent = 'Less'; // като се натисне трябва да пише вече less
        extraDiv.style.display = 'block' // и сменяме на block за да се покаже
    } else if (button.textContent === 'Less'){
        button.textContent = 'More'
        extraDiv.style.display = 'none'
    }
}