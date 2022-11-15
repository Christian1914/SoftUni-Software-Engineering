function demo(input){
    let array = input.split('\\');
    let lastElement = array.pop();
    let finalArray = lastElement.split('.');
    
    if(finalArray.length === 3){
        console.log(`File name: ${finalArray[0] + '.' + finalArray[1]}`);
        console.log(`File extension: ${finalArray[2]}`);
    } else {
        console.log(`File name: ${finalArray[0]}`);
        console.log(`File extension: ${finalArray[1]}`);
    }
}
demo('C:\\Internal\\training-internal\\Template.pptx');