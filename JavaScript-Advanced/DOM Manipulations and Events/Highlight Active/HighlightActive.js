function focused() {
    const inputFromUser = Array.from(document.querySelectorAll('input')); // взимаме всички инпути и ги вкарваме в масив

    for (let input of inputFromUser) { // обхождаме инпутите

        input.addEventListener('focus', () => { // event - a слуша за цъкане на инпът полето и ако се цъкне се фокусира
            
            input.parentElement.className = 'focused';
        });
        input.addEventListener('blur', () => { // ако се цъкне другаде се оцветява
            
            input.parentElement.className = '';
        });
        
    }
    
}