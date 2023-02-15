window.addEventListener('load', solution);

function solution() {
    let submitButtonElement = document.getElementById('submitBTN'); // взимаме си бутона
    let fullNameElement = document.getElementById('fname');
    let emailInputElement = document.getElementById('email');
    let phoneNumberInputElement = document.getElementById('phone');
    let adressInputElement = document.getElementById('address');
    let postalCodeInputElement = document.getElementById('code');
    let infoPreviewElement = document.getElementById('infoPreview')

    submitButtonElement.addEventListener('click', () => {

      let fullName = fullNameElement.value;
      let email = emailInputElement.value;
      let phoneNumber = phoneNumberInputElement.value;
      let adress = adressInputElement.value;
      let postalCode = postalCodeInputElement.value;

      fullNameElement.value = '';
      emailInputElement.value = '';
      phoneNumberInputElement.value = '';
      adressInputElement.value = '';
      postalCodeInputElement.value = '';

      if (!fullName || !email) { // ako се подадът такива данни да не се прави нищо 
        return;
    }

      document.getElementById("submitBTN").disabled = true;

      document.getElementById("editBTN").disabled = false;
      document.getElementById("continueBTN").disabled = false;

      let fullNameLiElement = document.createElement('li');
      fullNameLiElement.textContent = `Full Name: ${fullName}`;
      infoPreviewElement.appendChild(fullNameLiElement);

      let emailLiElement = document.createElement('li');
      emailLiElement.textContent = `Email: ${email}`;
      infoPreviewElement.appendChild(emailLiElement);

      let phoneNumberLiElement = document.createElement('li');
      phoneNumberLiElement.textContent = `Phone Number: ${phoneNumber}`;
      infoPreviewElement.appendChild(phoneNumberLiElement);

      let adressLiElement = document.createElement('li');
      adressLiElement.textContent = `Address: ${adress}`;
      infoPreviewElement.appendChild(adressLiElement);

      let postalCodeLiElement = document.createElement('li');
      postalCodeLiElement.textContent = `Postal Code: ${postalCode}`;
      infoPreviewElement.appendChild(postalCodeLiElement);
      

      
    });

    let editButton = document.getElementById("editBTN")
    const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'))
    inputValues.pop();


    editButton.addEventListener('click', () => {

        const listItems = Array.from(infoPreviewElement.childNodes);

        for(let i = 0; i < inputValues.length; i++){ // когато искаме да върнем от едно поле инпут елементите в началните инпут елементи
          inputValues[i].value = listItems[i].textContent.split(': ')[1];
        }

        document.getElementById("editBTN").disabled = true;
        document.getElementById("continueBTN").disabled = true;
        

        const list = document.getElementById("infoPreview");
        list.innerHTML = "";

        document.getElementById("submitBTN").disabled = false;
      
    });

    let continueButton = document.getElementById('continueBTN');

    continueButton.addEventListener('click', () => {
      const div = document.getElementById("block");
      div.innerHTML = "";

      let finalSentence = document.createElement('h3');
      finalSentence.textContent = 'Thank you for your reservation!';
      div.appendChild(finalSentence);
    });
}
