function attachGradientEvents() {
    const fieldToOccursMouse = document.getElementById('gradient'); // взимаме по ID бутона през който трябва да движим мишката
    fieldToOccursMouse.addEventListener('mousemove', mouseIn); // добавяме event с който казваме че искаме да засечем кога минава мишката mousemove
    fieldToOccursMouse.addEventListener('mouseout', mouseOut) // добавяме event да виждаме кога мишката не е в полето


    function mouseIn(event){
        let percent = (event.offsetX / 300) * 100 // разделяме координатите на дължината на полето през което трябва да преминаваме с мишката и умножаваме по сто за да получим процент по условие
        document.getElementById('result').textContent = Math.floor(percent) + '%' // взимаме полето където искаме да се изпише резултат в проценти по ID и закруглямр процента надолу
        //console.log((`${Math.floor(percent)}%`)); // с това принтиране може да видим резултата в цонзолата в браузъра за дебъг
    }

    function mouseOut(event){ // създаваме си нова функция с която да кажем че когато мишката не е в полето да се изписва 0%
        document.getElementById('result').textContent = 0 + '%'; // достъпваме полето за резултат и казваме че е равно на 0% когато мишката не е в полето
    }

}