function generateActivationKey(input) {
    // input & result data
    // let [rawActivationKey, ...instructions] = input;
    let activationKey = input.shift();
    let instructions = input.slice();

    // loop through instructions
    let instruction = instructions.shift();
    while (instruction != 'Generate') {
        // apply instruction
        let arguments = instruction.split('>>>'); // сплитваме instructions по стрелките
        let instructionName = arguments.shift(); // взиамаме командата

        switch (instructionName) { // питаме коя от трите е
            case 'Contains':  {
                let substring = arguments[0];
                if (activationKey.includes(substring)) { // ако съществува в стринга принтирай че го съдържа
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
            }
            case 'Flip': {
                let casing = arguments[0];
                let startIndex = arguments[1];
                let endIndex = arguments[2];

                let part = activationKey.substring(startIndex, endIndex); // изрязваме от startIndex до endIndex стринга и го запазваме в променлива
                let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase(); // питаме с тернарен оператор дали е Upper или е Lower
                activationKey = activationKey.replace(part, newPart); // заменяме с главни или малки букви зависи
                console.log(activationKey);
                break;
            }
            case 'Slice': {
                let startIndex = arguments[0];
                let endIndex = arguments[1];
                let substring = activationKey.substring(startIndex, endIndex); // изрязваме от startIndex до endIndex стринга и го запазваме в променлива
                activationKey = activationKey.replace(substring, ''); // заменяме изрязаното с празни стрингове
                console.log(activationKey);
                break;
            }
        }

        // get next instruction
        instruction = instructions.shift();
    }

    // print generated activation key
    console.log(`Your activation key is: ${activationKey}`);
}

generateActivationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
