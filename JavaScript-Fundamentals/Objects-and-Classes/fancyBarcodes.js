function barcodeReader(input){

    let iterationCount = Number(input.shift());

    for (let index = 0; index < iterationCount; index++) {
        let currentBarcode = input[index];

        let concatenatedNumbers = "";

        if(currentBarcode.startsWith('@') && currentBarcode.endsWith('#')){
            let newStr = currentBarcode.replace(/@/g, ''); // заменяме маймунката
            let withoutSymbols = newStr.replace(/#/g, ''); // заменяме решетката
            if(/^[A-Za-z0-9]*$/.test(withoutSymbols)){
                let last = withoutSymbols.charAt(withoutSymbols.length - 1); // взимаме последната буква от стринга
                if(withoutSymbols.charAt(0) === withoutSymbols.charAt(0).toUpperCase() && last.charAt(0) === last.charAt(0).toUpperCase()){
                    if(withoutSymbols.length >= 6){
                        if(/\d/.test(withoutSymbols)){
                            for (let letter of withoutSymbols) {
                                if(!isNaN(letter)){
                                    concatenatedNumbers += letter;
                                }
                            }
                            console.log(`Product group: ${concatenatedNumbers}`);
                        } else {
                            console.log(`Product group: 00`);
                        }
                    } else {
                        console.log("Invalid barcode");
                    }
                } else {
                    console.log("Invalid barcode");
                }
            } else {
                console.log("Invalid barcode");
            }
        } else {
            console.log("Invalid barcode");
        }
    }
    
}
barcodeReader(["3", 

"@#FreshFisH@#", 

"@###Brea0D@###", 

"@##Che4s6E@##"]);