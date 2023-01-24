function calories(array){
    let result = {};

    for (let index = 0; index < array.length; index+=2) {
        const key = array[index];
        const value = Number(array[index + 1])
        result[key] = value
        
        
        
    }
    console.log(result);

}
calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);